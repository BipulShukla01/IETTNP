import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bundelkhand University</h3>
            <h4 className="text-md font-medium mb-4 text-gray-300">IET Training & Placement Cell</h4>
            <p className="text-gray-300 mb-4">
              Connecting talented students with industry-leading companies for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/why-recruit" className="text-gray-300 hover:text-white transition-colors">Why Recruit</Link>
              </li>
              <li>
                <Link to="/student-portal" className="text-gray-300 hover:text-white transition-colors">Student Portal</Link>
              </li>
              <li>
                <Link to="/recruiters-portal" className="text-gray-300 hover:text-white transition-colors">Recruiters Portal</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</Link>
              </li>
              <li>
                <Link to="/our-team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Placement Statistics</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Brochure</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Resume Templates</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Interview Preparation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-300 mt-1" />
                <span className="text-gray-300">123 University Campus, Main Road, City - 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300" />
                <span className="text-gray-300">tnp@university.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Bundelkhand University IET Training & Placement Cell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer