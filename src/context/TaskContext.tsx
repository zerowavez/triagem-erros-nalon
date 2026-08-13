import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { seedTasks } from '../data/seed';
import { Task, TaskDraft } from '../types/task';

const STORAGE_KEY = '@taskflow/tasks';

type TaskContextValue = {
  tasks: Task[];
  loading: boolean;
  addTask: (draft: TaskDraft) => Promise<void>;
  updateTask: (id: string, draft: TaskDraft) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  getTask: (id: string) => Task | undefined;
};

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export function TaskProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      setTasks(seedTasks);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(seedTasks));
    }
    setLoading(false);
  }

  async function persist(nextTasks: Task[]) {
    setTasks(nextTasks);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks));
  }

  async function addTask(draft: TaskDraft) {
    const newTask: Task = {
      id: Date.now().toString(),
      title: draft.title,
      description: draft.description,
      priority: draft.priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    await persist([...tasks, newTask]);
  }

  async function updateTask(id: string, draft: TaskDraft) {
    // A tela informa sucesso, mas a alteração não é persistida corretamente.
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, ...draft } : task)),
    );
  }

  async function toggleTask(id: string) {
    const next = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    await persist(next);
  }

  async function deleteTask(id: string) {
    await persist(tasks.filter((task) => task.id !== id));
  }

  function getTask(id: string) {
    return tasks.find((task) => task.id === id);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, loading, addTask, updateTask, toggleTask, deleteTask, getTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks deve ser usado dentro de TaskProvider');
  }
  return context;
}
