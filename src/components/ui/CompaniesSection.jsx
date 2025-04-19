import { 
  FaMicrosoft, 
  FaAmazon, 
  FaApple, 
  FaFacebook, 
  FaBuilding
} from 'react-icons/fa'
import { SiIbm, SiAccenture, SiInfosys, SiSamsung } from 'react-icons/si'

const CompaniesSection = () => {
  const companies = [
    { id: 1, name: 'Samsung', icon: <SiSamsung className="text-4xl" /> },
    { id: 2, name: 'Microsoft', icon: <FaMicrosoft className="text-4xl" /> },
    { id: 3, name: 'Amazon', icon: <FaAmazon className="text-4xl" /> },
    { id: 4, name: 'Apple', icon: <FaApple className="text-4xl" /> },
    { id: 5, name: 'Meta', icon: <FaFacebook className="text-4xl" /> },
    { id: 6, name: 'IBM', icon: <SiIbm className="text-4xl" /> },
    { id: 7, name: 'Accenture', icon: <SiAccenture className="text-4xl" /> },
    { id: 8, name: 'Infosys', icon: <SiInfosys className="text-4xl" /> },
  ]

  return (
    <div className="bg-white py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Recruiting Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading companies across various industries to provide the best opportunities for our students.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="flex flex-col items-center justify-center p-6 bg-light rounded-lg hover:shadow-md transition-shadow">
              <div className="text-gray-500 hover:text-primary transition-colors">
                {company.icon}
              </div>
              <div className="mt-2 font-medium text-gray-700">
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompaniesSection