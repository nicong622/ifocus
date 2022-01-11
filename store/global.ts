import type { TaskType } from '@components/Task/type';
import { createState } from '@hookstate/core';

const baseData: TaskType[] = [
  {
    id: '1',
    title: 'A big project',
    isDone: false,
    desc: 'This is a big project',
    subTasks: [
      {
        id: '1-1',
        title: 'small project 1',
        isDone: false,
        subTasks: []
      },
      {
        id: '1-2',
        title: 'small project 2',
        isDone: true,
        subTasks: []
      }
    ]
  }
]

const globalState = createState(baseData)

export default globalState