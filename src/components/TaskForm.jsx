import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import styles from './TaskForm.module.scss'

const TaskForm = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const { tasks, createTask } = useContext(Context)

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(tasks))
	}, [tasks])

	const handleSubmit = e => {
		e.preventDefault()
		if (title !== '' && description !== '') {
			createTask({
				title,
				description,
			})
			setTitle('')
			setDescription('')
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label className={styles.label} htmlFor='title'>
				Task Title:
			</label>
			<input
				className={styles.input}
				type='text'
				id='title'
				name='title'
				placeholder='Task title'
				onChange={e => {
					setTitle(e.target.value)
				}}
				value={title}
				autoFocus
			/>
			<label className={styles.label} htmlFor='description'>
				Task Description:
			</label>

			<textarea
				className={styles.input}
				id='description'
				name='description'
				placeholder='Task description'
				onChange={e => {
					setDescription(e.target.value)
				}}
				value={description}
			></textarea>
			<button className={styles.button} type='submit'>
				Add Task
			</button>
		</form>
	)
}

export default TaskForm
