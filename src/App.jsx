import { useContext } from 'react'
import { Context } from './context/Context'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'
import styles from './styles/App.module.scss'
import { useSEO } from './hooks/useSEO'

function App() {
	const { tasks } = useContext(Context)
	useSEO({
		title: `(${tasks.length}) ZephyroCode | Tasks App`,
		description: `Tasks App made with ReactJS by ZephyroCode`,
	})

	return (
		<>
			<h1 className={styles.title}>Zephyr Tasks App</h1>
			<TaskForm />
			<TasksList />
		</>
	)
}

export default App
