import { Pressable, StyleSheet, Text, View } from 'react-native';

export type FilterValue = 'todas' | 'pendentes' | 'concluidas';

type Props = {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
};

const filters: { label: string; value: FilterValue }[] = [
  { label: 'Todas', value: 'todas' },
  { label: 'Pendentes', value: 'pendentes' },
  { label: 'Concluídas', value: 'concluidas' },
];

export function FilterBar({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <Pressable
          key={filter.value}
          onPress={() => onChange(filter.value)}
          style={[styles.button, value === filter.value && styles.activeButton]}
        >
          <Text style={[styles.text, value === filter.value && styles.activeText]}>
            {filter.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  button: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, backgroundColor: '#E8EBEF' },
  activeButton: { backgroundColor: '#334155' },
  text: { color: '#64748B', fontSize: 13 },
  activeText: { color: '#FFFFFF' },
});
