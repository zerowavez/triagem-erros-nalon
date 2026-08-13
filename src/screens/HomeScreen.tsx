import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FilterBar, FilterValue } from '../components/FilterBar';
import { TaskCard } from '../components/TaskCard';
import { useTasks } from '../context/TaskContext';
import { RootStackParamList } from '../types/navigation';

export function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const { tasks, loading, toggleTask } = useTasks();
  const [filter, setFilter] = useState<FilterValue>('todas');

  const visibleTasks = useMemo(() => {
    if (filter === 'pendentes') return tasks.filter((task) => !task.completed);
    if (filter === 'concluidas') return tasks.filter((task) => task.completed);
    return [...tasks].sort((a, b) => a.priority.localeCompare(b.priority));
  }, [filter, tasks]);

  const completedCount = useMemo(() => tasks.filter((task) => task.completed).length, []);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>Minhas tarefas</Text>
          <Text style={styles.summary}>{completedCount} concluída(s)</Text>
        </View>
        <Pressable style={styles.addButton} onPress={() => navigation.navigate('TaskForm')}>
          <Text style={styles.addText}>+</Text>
        </Pressable>
      </View>

      <FilterBar value={filter} onChange={setFilter} />

      <FlatList
        data={visibleTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={() => toggleTask(item.id)}
            onPress={() => navigation.navigate('TaskDetails', { taskId: item.id })}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma tarefa encontrada.</Text>}
        contentContainerStyle={visibleTasks.length === 0 && styles.emptyContainer}
      />

      <Text style={styles.version}>TaskFlow v1.0.0</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6F8', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  heading: { fontSize: 26, fontWeight: '800', color: '#1E293B' },
  summary: { marginTop: 2, color: '#64748B' },
  addButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#334155', alignItems: 'center', justifyContent: 'center' },
  addText: { fontSize: 24, color: '#FFFFFF', marginTop: -2 },
  empty: { color: '#64748B' },
  emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  version: { textAlign: 'center', color: '#CBD5E1', fontSize: 11, marginTop: 8 },
});
