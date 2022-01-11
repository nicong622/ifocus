import { TaskType } from "@components/Task/type";
import { State, useState } from "@hookstate/core";
import { randomId } from '@utils';

const TaskCreator: React.FC<{ list: State<TaskType[]> }> = (props) => {
  const isEditing = useState(false)
  const inputTitle = useState('')

  function onSubmit() {
    isEditing.set(false)

    const newTask: TaskType = {
      id: randomId(),
      title: inputTitle.get(),
      isDone: false,
      desc: '',
      subTasks: []
    }
    props.list.merge([newTask])
  }

  return isEditing.get() ? (
		<div>
			<input
        autoFocus
        placeholder="input task name"
				type='text'
				value={inputTitle.get()}
				onChange={(e) => inputTitle.set(e.currentTarget.value)}
			/>

      <button onClick={onSubmit}>submit</button>
		</div>
	) : (
		<button
			onClick={() => isEditing.set(true)}
			className='border text-center rounded px-4'
		>
			Add Task
		</button>
	);
}

export default TaskCreator