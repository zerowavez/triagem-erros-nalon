import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTasks } from '../context/TaskContext';
import { RootStackParamList } from '../types/navigation';
import { TaskPriority } from '../types/task';

const priorities: TaskPriority[] = ['baixa', 'media', 'alta'];

export function TaskFormScreen({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'TaskForm'>) {
  const { addTask, updateTask, getTask } = useTasks();
  const editingTask = useMemo(() => route.params?.taskId ? getTask(route.params.taskId) : undefined, [route.params?.taskId]);

  const [title, setTitle] = useState(editingTask?.title ?? '');
  const [description, setDescription] = useState(editingTask?.description ?? '');
  const [priority, setPriority] = useState<TaskPriority>(editingTask?.priority ?? 'media');

  async function handleSave() {
    const draft = { title, description, priority };
    if (editingTask) {
      await updateTask(editingTask.id, draft);
    } else {
      await addTask(draft);
    }
    Alert.alert('Sucesso', 'Tarefa salva com sucesso.');
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Digite o título"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Descreva a tarefa"
          multiline
        />

        <Text style={styles.label}>Prioridade</Text>
        <View style={styles.priorityRow}>
          {priorities.map((item) => (
            <Pressable
              key={item}
              onPress={() => setPriority(item)}
              style={[styles.priorityButton, priority === item && styles.priorityButtonActive]}
            >
              <Text style={[styles.priorityText, priority === item && styles.priorityTextActive]}>
                {item.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Salvar tarefa</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6F8' },
  content: { padding: 18, paddingBottom: 260 },
  label: { marginBottom: 6, marginTop: 14, fontWeight: '700', color: '#334155' },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 10, padding: 12 },
  textArea: { minHeight: 110, textAlignVertical: 'top' },
  priorityRow: { flexDirection: 'row', gap: 8 },
  priorityButton: { flex: 1, paddingVertical: 10, borderRadius: 8, backgroundColor: '#E2E8F0', alignItems: 'center' },
  priorityButtonActive: { backgroundColor: '#334155' },
  priorityText: { color: '#64748B', fontSize: 12, fontWeight: '700' },
  priorityTextActive: { color: '#FFFFFF' },
  saveButton: { marginTop: 28, backgroundColor: '#334155', borderRadius: 10, paddingVertical: 14, alignItems: 'center' },
  saveText: { color: '#FFFFFF', fontWeight: '800' },
});
