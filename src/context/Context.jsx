import { createContext, useState, useEffect } from 'react'

export const Context = createContext()

export const ContextProvider = props => {
	const [tasks, setTasks] = useState(() => {
		const item = localStorage.getItem('data')
		const tasks = JSON.parse(item)
		if (tasks === null) {
			return []
		}
		if (tasks.length > 0) {
			return tasks
		}
		return []
	})

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(tasks))
	}, [tasks])

	const createTask = task => {
		setTasks([
			...tasks,
			{
				id: crypto.randomUUID(),
				title: task.title,
				description: task.description,
			},
		])
	}

	const deleteTask = taskId => {
		setTasks(tasks.filter(task => task.id !== taskId))
	}

	return (
		<Context.Provider value={{ tasks, createTask, deleteTask }}>
			{props.children}
		</Context.Provider>
	)
}
