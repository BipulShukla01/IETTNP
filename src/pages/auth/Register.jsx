import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone, FaGraduationCap, FaIdCard, FaBuilding, FaUserTie, FaUserGraduate, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa'

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get('type') || 'student';

  const [activeTab, setActiveTab] = useState(userType);
  const [formData, setFormData] = useState({
    // Common fields
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Student specific fields
    enrollmentNumber: '',
    institution: '',
    course: '',
    graduationYear: '',
    
    // Recruiter specific fields
    company: '',
    designation: '',
    
    // Admin specific fields
    employeeId: '',
    department: '',
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
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
    
    // Common validations
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits'
    }
    
    // Role-specific validations
    if (activeTab === 'student') {
      if (!formData.enrollmentNumber) {
        newErrors.enrollmentNumber = 'Enrollment/Roll number is required'
      }
      
      if (!formData.institution.trim()) {
        newErrors.institution = 'Institution name is required'
      }
      
      if (!formData.course.trim()) {
        newErrors.course = 'Course is required'
      }
      
      if (!formData.graduationYear) {
        newErrors.graduationYear = 'Graduation year is required'
      }
    } else if (activeTab === 'recruiter') {
      if (!formData.company.trim()) {
        newErrors.company = 'Company name is required'
      }
      
      if (!formData.designation.trim()) {
        newErrors.designation = 'Designation is required'
      }
    } else if (activeTab === 'admin') {
      if (!formData.employeeId.trim()) {
        newErrors.employeeId = 'Employee ID is required'
      }
      
      if (!formData.department.trim()) {
        newErrors.department = 'Department is required'
      }
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
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
      // For this example, we'll simulate a successful registration
      setTimeout(() => {
        setRegistrationSuccess(true)
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate(`/login?type=${activeTab}`)
        }, 2000)
      }, 1500)
    } catch (error) {
      setErrors({ form: 'Registration failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const switchTab = (tab) => {
    setActiveTab(tab)
    setErrors({})
  }

  if (registrationSuccess) {
    return (
      <div className="bg-light min-h-screen py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary py-4 px-6">
              <h2 className="text-2xl font-bold text-white text-center">Registration Successful</h2>
            </div>
            <div className="p-6 text-center">
              <div className="mb-6 text-green-600 text-5xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Account Created Successfully!</h3>
              <p className="text-gray-600 mb-6">You will be redirected to the login page shortly.</p>
              <Link to={`/login?type=${activeTab}`} className="btn btn-primary">
                Go to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-light min-h-screen py-16">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary py-4 px-6">
            <h2 className="text-2xl font-bold text-white text-center">Create an Account</h2>
          </div>
          
          {/* User Type Header */}
          <div className="bg-gray-50 py-4 px-6 border-b flex items-center justify-center">
            <div className="flex items-center">
              {activeTab === 'student' && <FaUserGraduate className="text-primary text-xl mr-2" />}
              {activeTab === 'recruiter' && <FaUserTie className="text-primary text-xl mr-2" />}
              {activeTab === 'admin' && <FaChalkboardTeacher className="text-primary text-xl mr-2" />}
              <h3 className="text-lg font-medium text-gray-800">
                {activeTab === 'student' && 'Student Registration'}
                {activeTab === 'recruiter' && 'Recruiter Registration'}
                {activeTab === 'admin' && 'Admin Registration'}
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
              {/* Common Fields */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
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
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
              </div>
              
              {/* Student-specific fields */}
              {activeTab === 'student' && (
                <>
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
                  
                  <div className="mb-4">
                    <label htmlFor="institution" className="block text-gray-700 font-medium mb-2">Institution</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGraduationCap className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.institution ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Enter your institution name"
                      />
                    </div>
                    {errors.institution && <p className="mt-1 text-red-500 text-sm">{errors.institution}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="course" className="block text-gray-700 font-medium mb-2">Course/Program</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGraduationCap className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Enter your course/program"
                      />
                    </div>
                    {errors.course && <p className="mt-1 text-red-500 text-sm">{errors.course}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="graduationYear" className="block text-gray-700 font-medium mb-2">Graduation Year</label>
                    <select
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className={`w-full py-2 px-3 border ${errors.graduationYear ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    >
                      <option value="">Select Year</option>
                      {[...Array(6)].map((_, i) => {
                        const year = new Date().getFullYear() + i;
                        return <option key={year} value={year}>{year}</option>;
                      })}
                    </select>
                    {errors.graduationYear && <p className="mt-1 text-red-500 text-sm">{errors.graduationYear}</p>}
                  </div>
                </>
              )}
              
              {/* Recruiter-specific fields */}
              {activeTab === 'recruiter' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBuilding className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Enter your company name"
                      />
                    </div>
                    {errors.company && <p className="mt-1 text-red-500 text-sm">{errors.company}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="designation" className="block text-gray-700 font-medium mb-2">Designation</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUserTie className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.designation ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Enter your designation"
                      />
                    </div>
                    {errors.designation && <p className="mt-1 text-red-500 text-sm">{errors.designation}</p>}
                  </div>
                </>
              )}
              
              {/* Admin-specific fields */}
              {activeTab === 'admin' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="employeeId" className="block text-gray-700 font-medium mb-2">Employee ID</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaIdCard className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="employeeId"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.employeeId ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Enter your employee ID"
                      />
                    </div>
                    {errors.employeeId && <p className="mt-1 text-red-500 text-sm">{errors.employeeId}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="department" className="block text-gray-700 font-medium mb-2">Department</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUniversity className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.department ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Enter your department"
                      />
                    </div>
                    {errors.department && <p className="mt-1 text-red-500 text-sm">{errors.department}</p>}
                  </div>
                </>
              )}
              
              {/* Password fields */}
              <div className="mb-4">
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
                    placeholder="Create a password"
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
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Confirm your password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword}</p>}
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
                {isLoading ? 'Creating Account...' : 'Register'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to={`/login?type=${activeTab}`} className="text-primary hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register