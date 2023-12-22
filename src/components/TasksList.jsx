import { useContext } from 'react'
import TaskCard from './TaskCard'
import { Context } from '../context/Context'
import styles from './TasksList.module.scss'

const TasksList = () => {
	const { tasks } = useContext(Context)

	if (tasks.length === 0) {
		return <h2 className={styles.title}>No tasks yet</h2>
	}

	return (
		<>
			<h2 className={styles.title}>Tasks List</h2>
			<div className={styles.tasks}>
				{tasks.map(task => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</>
	)
}

export default TasksList
