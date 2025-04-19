import { FaBuilding, FaGraduationCap, FaChartLine, FaHandshake } from 'react-icons/fa'

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FaBuilding className="text-4xl text-primary" />,
      count: '500+',
      label: 'Partner Companies'
    },
    {
      id: 2,
      icon: <FaGraduationCap className="text-4xl text-primary" />,
      count: '10,000+',
      label: 'Students Placed'
    },
    {
      id: 3,
      icon: <FaChartLine className="text-4xl text-primary" />,
      count: '95%',
      label: 'Placement Rate'
    },
    {
      id: 4,
      icon: <FaHandshake className="text-4xl text-primary" />,
      count: '₹18 LPA',
      label: 'Highest Package'
    }
  ]

  return (
    <div className="bg-light py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Placement Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our placement records and the strong relationships we've built with industry leaders over the years.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-dark mb-2">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsSection