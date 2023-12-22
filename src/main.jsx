import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './context/Context.jsx'
import App from './App.jsx'
import './styles/normalize.css'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
)
