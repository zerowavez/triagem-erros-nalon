export type RootStackParamList = {
  Home: undefined;
  TaskForm: { taskId?: string } | undefined;
  TaskDetails: { taskId: string };
};
