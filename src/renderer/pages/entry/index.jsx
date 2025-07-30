import { Outlet, Navigate } from 'react-router-dom'
import Header from '@renderer/components/header'

function PrivateRoute(props) {
  return window.localStorage.getItem('Electron_Login_Info') ? (
    props.children
  ) : (
    <Navigate to="/login" />
  )
}

export default function Entry() {
  return (
    <PrivateRoute>
      <div style={{ overflow: 'hidden', height: '100%' }}>
        <Header />
        <Outlet />
      </div>
    </PrivateRoute>
  )
}
