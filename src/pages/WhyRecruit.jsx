import { Link } from 'react-router-dom'
import { FaGraduationCap, FaUsers, FaChartLine, FaHandshake, FaUniversity, FaLaptopCode } from 'react-icons/fa'

const WhyRecruit = () => {
  const reasons = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-4xl text-primary" />,
      title: 'Top Academic Talent',
      description: 'Our institution consistently ranks among the top universities, producing graduates with strong academic foundations and problem-solving abilities.'
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      title: 'Industry-Ready Skills',
      description: 'Our curriculum is designed in consultation with industry experts to ensure students develop relevant technical and soft skills required in the workplace.'
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-primary" />,
      title: 'Diverse Talent Pool',
      description: 'Access to a diverse pool of talented students from various disciplines, backgrounds, and skill sets to meet your specific recruitment needs.'
    },
    {
      id: 4,
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: 'Proven Track Record',
      description: 'Our graduates have consistently performed exceptionally well in various organizations, with many rising to leadership positions.'
    },
    {
      id: 5,
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: 'Streamlined Recruitment Process',
      description: 'Our dedicated placement team ensures a smooth and efficient recruitment process, from scheduling to final selection.'
    },
    {
      id: 6,
      icon: <FaUniversity className="text-4xl text-primary" />,
      title: 'Long-term Partnership',
      description: 'We value long-term relationships with companies and offer various collaboration opportunities beyond recruitment.'
    }
  ]

  const process = [
    {
      id: 1,
      title: 'Initial Contact',
      description: 'Reach out to our placement cell with your recruitment requirements and preferred timeline.'
    },
    {
      id: 2,
      title: 'Job Profile Sharing',
      description: 'Share detailed job descriptions, eligibility criteria, and compensation packages.'
    },
    {
      id: 3,
      title: 'Pre-Placement Talk',
      description: 'Conduct a presentation about your company, work culture, and opportunities for students.'
    },
    {
      id: 4,
      title: 'Selection Process',
      description: 'Conduct your selection process, which may include aptitude tests, technical assessments, and interviews.'
    },
    {
      id: 5,
      title: 'Final Selection',
      description: 'Make offers to selected candidates and complete the necessary documentation.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Recruit From Us?</h1>
            <p className="text-xl text-gray-100 mb-8">
              Discover why leading companies choose our institution for their recruitment needs and how we can help you find the perfect talent for your organization.
            </p>
            <Link to="/recruiters-portal" className="btn bg-white text-primary hover:bg-gray-100">
              Become a Recruiting Partner
            </Link>
          </div>
        </div>
      </div>

      {/* Reasons to Recruit Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Reasons to Recruit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's why our institution should be your preferred destination for campus recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.id} className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Process Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Recruitment Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We strive to make the recruitment process as smooth and efficient as possible for our corporate partners.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={step.id} className="flex mb-8 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < process.length - 1 && (
                    <div className="h-full w-0.5 bg-primary mx-auto mt-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Recruiters Testimonials */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Recruiters Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from companies that have recruited from our institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-6">
                "We have been recruiting from this institution for the past 5 years and have always been impressed by the quality of students. They are well-prepared, technically sound, and adapt quickly to our work environment."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/42.jpg" 
                  alt="HR Manager" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-dark">Rajesh Mehta</h4>
                  <p className="text-primary">HR Manager, Tech Solutions Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-light p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-6">
                "The placement cell is highly professional and makes the entire recruitment process seamless. The students we've hired have consistently exceeded our expectations and contributed significantly to our projects."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/42.jpg" 
                  alt="Talent Acquisition Lead" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-dark">Ananya Gupta</h4>
                  <p className="text-primary">Talent Acquisition Lead, Global Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Recruit Top Talent?</h2>
          <p className="text-gray-100 max-w-2xl mx-auto mb-8">
            Partner with us to access a pool of talented and well-prepared students for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/recruiters-portal" className="btn bg-white text-primary hover:bg-gray-100">
              Become a Recruiting Partner
            </Link>
            <Link to="/contact-us" className="btn bg-transparent border border-white text-white hover:bg-white/10">
              Contact Placement Cell
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyRecruit