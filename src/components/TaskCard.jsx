import { useContext } from 'react'
import { Context } from '../context/Context'
import styles from './TaskCard.module.scss'

const TaskCard = ({ task }) => {
	const { deleteTask } = useContext(Context)
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{task.title}</h3>
			<p className={styles.description}>{task.description}</p>
			<button className={styles.button} onClick={() => deleteTask(task.id)}>
				Delete Task
			</button>
		</div>
	)
}

export default TaskCard
