import { Navigate } from 'react-router-dom'

const AuthGuard = ({ user, requiredRole, children }) => {
  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />
  }
  
  // If a specific role is required and user doesn't have it, redirect to appropriate page
  if (requiredRole && user.role !== requiredRole) {
    // Redirect based on the user's actual role
    if (user.role === 'student') {
      return <Navigate to="/student/dashboard" replace />
    } else if (user.role === 'recruiter') {
      return <Navigate to="/recruiter/dashboard" replace />
    } else if (user.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />
    } else {
      // Fallback to home if role is unknown
      return <Navigate to="/" replace />
    }
  }
  
  // If user is authenticated and has the required role (or no specific role is required)
  return children
}

export default AuthGuard