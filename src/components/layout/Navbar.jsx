import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa' 
import assets from '../../assets/asset.js'
import RoleSelectionModal from '../auth/RoleSelectionModal'

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('login') // 'login' or 'register'

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    onLogout()
    setDropdownOpen(false)
    closeMenu()
  }
  
  const openModal = (mode) => {
    setModalMode(mode)
    setModalOpen(true)
    closeMenu() // Close mobile menu if open
  }
  
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src={assets.BU_logo} width={36} height={36} />
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-gray-800 leading-tight">Bundelkhand University</span>
              <span className="text-xs font-medium text-primary">IET Training & Placement Cell</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 mx-4 flex-grow justify-center">
            <NavLink to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              Home
            </NavLink>
            <NavLink to="/why-recruit" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              Why Recruit
            </NavLink>
            <NavLink to="/student-portal" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              Students
            </NavLink>
            <NavLink to="/recruiters-portal" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              Recruiters
            </NavLink>
            <NavLink to="/academics" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              Academics
            </NavLink>
            <NavLink to="/our-team" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              Team
            </NavLink>
            <NavLink to="/contact-us" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              Contact
            </NavLink>
            <NavLink to="/s-portal" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium px-3 py-2" 
                  : "text-gray-700 hover:text-primary transition-colors px-3 py-2"
              }
            >
              S-Portal
            </NavLink>
          </div>

          {/* User Menu (Desktop) */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            {user ? (
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary px-3 py-2"
                >
                  <FaUserCircle className="text-xl" />
                  <span className="max-w-[100px] truncate">{user.name}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {user?.role === 'admin' && (
                      <Link 
                        to="/admin-portal" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Admin Portal
                      </Link>
                    )}
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <button onClick={() => openModal('login')} className="btn btn-outline py-1.5 px-3 text-sm">Login</button>
                <button onClick={() => openModal('register')} className="btn btn-primary py-1.5 px-3 text-sm">Register</button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col">
              <NavLink to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink to="/why-recruit" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                Why Recruit
              </NavLink>
              <NavLink to="/student-portal" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                Student Portal
              </NavLink>
              <NavLink to="/recruiters-portal" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                Recruiters Portal
              </NavLink>
              <NavLink to="/academics" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                Academics
              </NavLink>
              <NavLink to="/our-team" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                Our Team
              </NavLink>
              <NavLink to="/contact-us" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
              <NavLink to="/s-portal" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium py-3 px-2 border-b border-gray-100" 
                    : "text-gray-700 hover:text-primary transition-colors py-3 px-2 border-b border-gray-100"
                }
                onClick={closeMenu}
              >
                S-Portal
              </NavLink>
              
              {/* User Menu (Mobile) */}
              {user ? (
                <>
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex items-center space-x-2 text-gray-700 mb-2 px-2">
                      <FaUserCircle className="text-xl" />
                      <span className="font-medium">{user.name}</span>
                    </div>
                    {user?.role === 'admin' && (
                      <Link 
                        to="/admin-portal" 
                        className="block py-3 px-2 text-gray-700 hover:text-primary border-b border-gray-100"
                        onClick={closeMenu}
                      >
                        Admin Portal
                      </Link>
                    )}
                    <Link 
                      to="/dashboard" 
                      className="block py-3 px-2 text-gray-700 hover:text-primary border-b border-gray-100"
                      onClick={closeMenu}
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left py-3 px-2 text-gray-700 hover:text-primary border-b border-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-3 p-4 mt-2 border-t border-gray-200">
                  <button className="btn btn-outline py-2 text-center" onClick={() => openModal('login')}>Login</button>
                  <button className="btn btn-primary py-2 text-center" onClick={() => openModal('register')}>Register</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Role Selection Modal */}
      <RoleSelectionModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        mode={modalMode} 
      />
    </nav>
  )
}

export default Navbar