export interface TaskType {
  id: string,
  title: string
  desc?: string
  isDone: boolean
  subTasks: TaskType[]
}