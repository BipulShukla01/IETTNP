import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaIdCard, FaUserTie, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'

const Login = ({ onLogin }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get('type') || 'student';

  const [activeTab, setActiveTab] = useState(userType);
  const [formData, setFormData] = useState({
    // Student fields
    enrollmentNumber: '',
    // Recruiter/Admin fields
    email: '',
    // Common fields
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (activeTab === 'student') {
      // Enrollment number validation
      if (!formData.enrollmentNumber) {
        newErrors.enrollmentNumber = 'Enrollment/Roll number is required'
      }
    } else {
      // Email validation for recruiters and admins
      if (!formData.email) {
        newErrors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid'
      }
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      // In a real application, you would make an API call here
      // For this example, we'll simulate a successful login
      setTimeout(() => {
        let userData;
        
        if (activeTab === 'student') {
          userData = {
            id: '1',
            name: 'John Doe',
            enrollmentNumber: formData.enrollmentNumber,
            role: 'student'
          }
        } else if (activeTab === 'recruiter') {
          userData = {
            id: '2',
            name: 'Jane Smith',
            email: formData.email,
            role: 'recruiter',
            company: 'Tech Corp'
          }
        } else if (activeTab === 'admin') {
          userData = {
            id: '3',
            name: 'Admin User',
            email: formData.email,
            role: 'admin',
            department: 'Computer Science'
          }
        }
        
        onLogin(userData)
        
        // Redirect based on user role
        if (activeTab === 'student') {
          navigate('/student/dashboard')
        } else if (activeTab === 'recruiter') {
          navigate('/recruiter/dashboard')
        } else if (activeTab === 'admin') {
          navigate('/admin/dashboard')
        }
      }, 1000)
    } catch (error) {
      setErrors({ form: 'Invalid credentials. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const switchTab = (tab) => {
    setActiveTab(tab)
    setErrors({})
  }

  return (
    <div className="bg-light min-h-screen py-16">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary py-4 px-6">
            <h2 className="text-2xl font-bold text-white text-center">Login to Your Account</h2>
          </div>
          
          {/* User Type Header */}
          <div className="bg-gray-50 py-4 px-6 border-b flex items-center justify-center">
            <div className="flex items-center">
              {activeTab === 'student' && <FaUserGraduate className="text-primary text-xl mr-2" />}
              {activeTab === 'recruiter' && <FaUserTie className="text-primary text-xl mr-2" />}
              {activeTab === 'admin' && <FaChalkboardTeacher className="text-primary text-xl mr-2" />}
              <h3 className="text-lg font-medium text-gray-800">
                {activeTab === 'student' && 'Student Login'}
                {activeTab === 'recruiter' && 'Recruiter Login'}
                {activeTab === 'admin' && 'Admin Login'}
              </h3>
            </div>
          </div>
          
          <div className="p-6">
            {errors.form && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {errors.form}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {activeTab === 'student' ? (
                <div className="mb-4">
                  <label htmlFor="enrollmentNumber" className="block text-gray-700 font-medium mb-2">Enrollment/Roll Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaIdCard className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="enrollmentNumber"
                      name="enrollmentNumber"
                      value={formData.enrollmentNumber}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.enrollmentNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                      placeholder="Enter your enrollment/roll number"
                    />
                  </div>
                  {errors.enrollmentNumber && <p className="mt-1 text-red-500 text-sm">{errors.enrollmentNumber}</p>}
                </div>
              ) : (
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Enter your password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-primary hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary flex justify-center items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to={`/register?type=${activeTab}`} className="text-primary hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login