import { createHashRouter, Navigate } from 'react-router-dom'
import Login from '@renderer/pages/login'
import Entry from '@renderer/pages/entry'
import Home from '@renderer/pages/home'

function globalRoute() {
  return createHashRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Entry />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/',
          element: <Navigate to="/home" />
        },
        {
          path: '*',
          element: <Navigate to="/login" />
        }
      ]
    }
  ])
}

const globalRouter = globalRoute()

export default globalRouter
