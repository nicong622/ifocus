import type { TaskType } from './type';
import { useState, State } from '@hookstate/core';

const Task: React.FC<{ state: State<TaskType> }> = (props) => {
  const state = useState(props.state)

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    state.isDone.set(e.currentTarget.checked)
  }

  return (
		<div className='flex'>
			<div className='checkbox mr-2'>
				<input
					type='checkbox'
					onChange={onChange}
					defaultChecked={state.isDone.get()}
				/>
			</div>

			<div className='content'>
				<h6>{state.title.get()}</h6>

				<div className='subtasks'>{props.children}</div>
			</div>
		</div>
	);
}

export default Task;