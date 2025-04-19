import { Link } from 'react-router-dom'
import { FaUserGraduate, FaBuilding, FaCalendarAlt, FaChartLine, FaFileAlt, FaUsers, FaCog } from 'react-icons/fa'

const AdminPortal = () => {
  return (
    <div className="bg-light min-h-screen">
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admin Portal</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to the Training & Placement Cell Admin Portal. Manage students, recruiters, and placement activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Student Management */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaUserGraduate className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Student Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Manage student profiles, verify documents, and track placement eligibility.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  View and approve student registrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Verify student documents
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Manage eligibility criteria
                </li>
              </ul>
              <Link to="/admin/students" className="btn btn-outline w-full text-center">
                Manage Students
              </Link>
            </div>
          </div>

          {/* Recruiter Management */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaBuilding className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Recruiter Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Manage company profiles, job postings, and recruitment drives.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Approve company registrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Review and publish job postings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Schedule campus recruitment drives
                </li>
              </ul>
              <Link to="/admin/recruiters" className="btn btn-outline w-full text-center">
                Manage Recruiters
              </Link>
            </div>
          </div>

          {/* Placement Events */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaCalendarAlt className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Placement Events</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Schedule and manage placement drives, interviews, and pre-placement talks.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Create and manage event calendar
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Schedule interviews and tests
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Send notifications to eligible students
                </li>
              </ul>
              <Link to="/admin/events" className="btn btn-outline w-full text-center">
                Manage Events
              </Link>
            </div>
          </div>

          {/* Analytics */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Analytics & Reports</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Generate reports and analyze placement statistics.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Placement statistics by department
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Salary package analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Year-on-year comparison
                </li>
              </ul>
              <Link to="/admin/analytics" className="btn btn-outline w-full text-center">
                View Analytics
              </Link>
            </div>
          </div>

          {/* Announcements */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaFileAlt className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Announcements</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create and manage announcements for students and recruiters.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Post important notices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Schedule announcements
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Target specific departments or batches
                </li>
              </ul>
              <Link to="/admin/announcements" className="btn btn-outline w-full text-center">
                Manage Announcements
              </Link>
            </div>
          </div>

          {/* Settings */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaCog className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Portal Settings</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Configure portal settings, user permissions, and system preferences.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Manage admin users
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Configure email templates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Set system preferences
                </li>
              </ul>
              <Link to="/admin/settings" className="btn btn-outline w-full text-center">
                Portal Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPortal