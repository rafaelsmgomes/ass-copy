import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './index.scss'
import QuestionsPage from './layout/QuestionsPage/QuestionsPage'
import Homepage from './layout/Homepage/Homepage'
import store from './redux'
import ReportPage from './layout/ReportPage/ReportPage'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'questions', element: <QuestionsPage /> },
      { path: 'report', element: <ReportPage /> },
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
