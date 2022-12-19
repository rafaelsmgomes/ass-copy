import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './index.scss'
import QuestionsPage from './components/LandingPage/QuestionsPage'
import Homepage from './components/Homepage/Homepage'
import store from './redux'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'questions', element: <QuestionsPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
