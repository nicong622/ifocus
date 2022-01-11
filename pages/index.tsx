import type { NextPage } from 'next'
import { useState, State } from '@hookstate/core';
import globalState from '@store/global';
import Task from '@components/Task';
import type { TaskType } from '@components/Task/type';
import TaskCreator from '@components/TaskCreator';
import { randomId } from '@utils';

function renderTask(state: State<TaskType[]>) {
  return state.map((task: State<TaskType>) => {
    const children = task.subTasks.get().length > 0
      ? renderTask(task.subTasks).concat(<TaskCreator key={randomId()} list={task.subTasks} />)
      : null

    return <Task key={task.id.get()} state={task}>{children}</Task>
  })
}

const Home: NextPage = () => {
  const state = useState(globalState)

  return (
		<div>
      <TaskCreator list={state} />
			{ renderTask(state) }
		</div>
	);
}

export default Home
