import { Task } from '../types/task';

export const seedTasks: Task[] = [
  {
    id: '1',
    title: 'Revisar protótipo',
    description: 'Validar o fluxo principal do aplicativo.',
    priority: 'alta',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Atualizar documentação',
    description: 'Registrar as funcionalidades disponíveis.',
    priority: 'media',
    completed: true,
    createdAt: new Date().toISOString(),
  },
];
