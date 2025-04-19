import { Link } from 'react-router-dom'
import departmentImage from '../../assets/Department_IET.jpg'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Bundelkhand University
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              IET Training & Placement Cell
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Bridging the gap between academia and industry to create future-ready professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login?type=student" className="btn bg-white text-primary hover:bg-gray-100">
                For Students
              </Link>
              <Link to="/login?type=recruiter" className="btn bg-white text-primary hover:bg-gray-100">
                For Recruiters
              </Link>
              <Link to="/login?type=admin" className="btn bg-white text-primary hover:bg-gray-100">
                Admin Login
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src={departmentImage} 
              alt="Institute of Engineering & Technology, Bundelkhand University" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero