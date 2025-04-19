import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import WhyRecruit from './pages/WhyRecruit'
import StudentPortal from './pages/StudentPortal'
import RecruitersPortal from './pages/RecruitersPortal'
import AdminPortal from './pages/AdminPortal'
import Academics from './pages/Academics'
import DepartmentDetail from './pages/DepartmentDetail'
import OurTeam from './pages/OurTeam'
import ContactUs from './pages/ContactUs'
// Auth pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
// Auth guard component
import AuthGuard from './components/auth/Login'


function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} onLogout={handleLogout} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-recruit" element={<WhyRecruit />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/recruiters-portal" element={<RecruitersPortal />} />
          <Route path="/admin-portal" element={
            <AuthGuard user={user}>
              <AdminPortal />
            </AuthGuard>
          } />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/:departmentId" element={<DepartmentDetail />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          
          {/* User-specific dashboard routes */}
          <Route 
            path="/student/dashboard/*" 
            element={
              <AuthGuard user={user} requiredRole="student">
                <StudentPortal />
              </AuthGuard>
            } 
          />
          <Route 
            path="/recruiter/dashboard/*" 
            element={
              <AuthGuard user={user} requiredRole="recruiter">
                <RecruitersPortal />
              </AuthGuard>
            } 
          />
          <Route 
            path="/admin/dashboard/*" 
            element={
              <AuthGuard user={user} requiredRole="admin">
                <AdminPortal />
              </AuthGuard>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App