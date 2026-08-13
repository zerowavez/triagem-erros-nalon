import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Task } from '../types/task';

const priorityLabels = {
  baixa: 'Baixa',
  media: 'Média',
  alta: 'Alta',
};

type Props = {
  task: Task;
  onPress: () => void;
  onToggle: () => void;
};

export function TaskCard({ task, onPress, onToggle }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.content}>
        <Text style={[styles.title, task.completed && styles.completed]} numberOfLines={1}>
          {task.title || '(Sem título)'}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {task.description || 'Sem descrição'}
        </Text>
        <Text style={styles.priority}>Prioridade: {priorityLabels[task.priority]}</Text>
      </View>
      <Pressable onPress={onToggle} style={styles.checkButton} accessibilityLabel="Alterar status da tarefa">
        <Text style={styles.checkText}>{task.completed ? '✓' : '○'}</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    elevation: 1,
  },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
  completed: { textDecorationLine: 'line-through', color: '#94A3B8' },
  description: { marginTop: 4, color: '#64748B', fontSize: 13 },
  priority: { marginTop: 8, color: '#A0AEC0', fontSize: 11 },
  checkButton: { width: 28, height: 28, alignItems: 'center', justifyContent: 'center' },
  checkText: { fontSize: 23, color: '#475569' },
});
