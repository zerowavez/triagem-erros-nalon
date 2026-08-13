export type TaskPriority = 'baixa' | 'media' | 'alta';

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
};

export type TaskDraft = Omit<Task, 'id' | 'createdAt' | 'completed'>;
