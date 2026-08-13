import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTasks } from '../context/TaskContext';
import { RootStackParamList } from '../types/navigation';

export function TaskDetailsScreen({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'TaskDetails'>) {
  const { getTask, deleteTask } = useTasks();
  const task = getTask(route.params.taskId);

  if (!task) {
    return (
      <View style={styles.center}>
        <Text>Tarefa não encontrada.</Text>
      </View>
    );
  }

  async function handleDelete() {
    await deleteTask(task.id);
    navigation.popToTop();
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{task.title || '(Sem título)'}</Text>
      <Text style={styles.status}>{task.completed ? 'Concluída' : 'Pendente'}</Text>
      <Text style={styles.label}>Descrição</Text>
      <Text style={styles.description}>{task.description || 'Sem descrição.'}</Text>
      <Text style={styles.label}>Prioridade</Text>
      <Text style={styles.description}>{task.priority}</Text>

      <Pressable
        style={styles.editButton}
        onPress={() => navigation.navigate('TaskForm', { taskId: task.id })}
      >
        <Text style={styles.editText}>Editar</Text>
      </Pressable>

      <Pressable style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>Excluir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6F8', padding: 18 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 25, fontWeight: '800', color: '#1E293B' },
  status: { marginTop: 6, color: '#64748B' },
  label: { marginTop: 24, marginBottom: 5, fontWeight: '800', color: '#475569' },
  description: { color: '#475569', lineHeight: 21 },
  editButton: { marginTop: 32, backgroundColor: '#334155', padding: 14, borderRadius: 10, alignItems: 'center' },
  editText: { color: '#FFFFFF', fontWeight: '800' },
  deleteButton: { marginTop: 12, backgroundColor: '#FDECEC', padding: 14, borderRadius: 10, alignItems: 'center' },
  deleteText: { color: '#B91C1C', fontWeight: '800' },
});
