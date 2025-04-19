import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaBuilding, 
  FaUsers, 
  FaCalendarAlt, 
  FaChartLine, 
  FaHandshake, 
  FaUniversity, 
  FaUserPlus, 
  FaFileAlt, 
  FaCheckCircle, 
  FaComments, 
  FaTasks,
  FaArrowRight,
  FaLongArrowAltRight
} from 'react-icons/fa'

const RecruitersPortal = () => {
  const [activeStep, setActiveStep] = useState(1);
  const benefits = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl text-primary" />,
      title: 'Access to Top Talent',
      description: 'Connect with a diverse pool of talented students from various disciplines and specializations.'
    },
    {
      id: 2,
      icon: <FaCalendarAlt className="text-4xl text-primary" />,
      title: 'Streamlined Recruitment',
      description: 'Our dedicated team ensures a smooth and efficient recruitment process tailored to your needs.'
    },
    {
      id: 3,
      icon: <FaBuilding className="text-4xl text-primary" />,
      title: 'Brand Visibility',
      description: 'Enhance your company\'s visibility among students through pre-placement talks and campus events.'
    },
    {
      id: 4,
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: 'Cost-Effective Hiring',
      description: 'Reduce recruitment costs by connecting with multiple qualified candidates in a single visit.'
    },
    {
      id: 5,
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: 'Long-term Partnership',
      description: 'Build a lasting relationship with our institution for continuous access to fresh talent.'
    },
    {
      id: 6,
      icon: <FaUniversity className="text-4xl text-primary" />,
      title: 'Industry-Academia Collaboration',
      description: 'Opportunities for collaborative research, projects, and curriculum development.'
    }
  ]

  const recruitmentOptions = [
    {
      id: 1,
      title: 'Campus Recruitment',
      description: 'Conduct on-campus recruitment drives to hire students for full-time positions.',
      features: [
        'Pre-placement talks',
        'Written tests',
        'Technical and HR interviews',
        'On-the-spot offers'
      ]
    },
    {
      id: 2,
      title: 'Internship Programs',
      description: 'Hire students for internships that can lead to pre-placement offers.',
      features: [
        'Summer internships (May-July)',
        'Winter internships (Dec-Jan)',
        'Semester-long internships',
        'Project-based internships'
      ]
    },
    {
      id: 3,
      title: 'Virtual Recruitment',
      description: 'Conduct the entire recruitment process remotely through our digital platform.',
      features: [
        'Online assessments',
        'Virtual interviews',
        'Digital documentation',
        'Remote onboarding support'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recruiters Portal</h1>
            <p className="text-xl text-gray-100 mb-8">
              Partner with us to access a pool of talented and well-prepared students for your organization's recruitment needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login?type=recruiter" className="btn bg-white text-primary hover:bg-gray-100">
                Login to Portal
              </Link>
              <Link to="/register?type=recruiter" className="btn bg-accent text-white hover:bg-accent/90">
                Register as Recruiter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Benefits for Recruiters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of partnering with our Training & Placement Cell for your recruitment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Options Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Recruitment Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer flexible recruitment options to meet your specific hiring needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recruitmentOptions.map((option) => (
              <div key={option.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <h3 className="text-xl font-bold text-dark mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-primary mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Process Section - Stylish & Animated */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Recruitment Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A simple and streamlined process to help you find the right talent for your organization.
            </p>
          </div>

          {/* Process Steps - Interactive Cards */}
          <div className="max-w-5xl mx-auto">
            {/* Process Steps Navigation */}
            <div className="flex justify-between items-center mb-12 relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              
              {[1, 2, 3, 4, 5].map((step) => (
                <button 
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className={`relative z-10 flex flex-col items-center transition-all duration-300 group ${activeStep === step ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2 transition-all duration-500 ${
                      activeStep === step 
                        ? 'bg-primary shadow-lg shadow-primary/30' 
                        : step < activeStep 
                          ? 'bg-green-500' 
                          : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}
                  >
                    {step < activeStep ? (
                      <FaCheckCircle className="text-2xl" />
                    ) : (
                      step
                    )}
                  </div>
                  <span className={`text-sm font-medium transition-colors ${activeStep === step ? 'text-primary' : 'text-gray-500'}`}>
                    Step {step}
                  </span>
                </button>
              ))}
            </div>

            {/* Step Content - Animated */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform">
              {/* Step 1 */}
              <div className={`transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div className="bg-gradient-to-r from-primary to-indigo-700 p-8 flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mr-6">
                    <FaUserPlus className="text-4xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Registration</h3>
                    <p className="text-white/80">First step in our recruitment partnership</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-dark mb-4">What You Need to Do</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Create an account on our Recruiters Portal</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Provide your company details and profile</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Specify your recruitment requirements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Submit necessary documentation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="text-xl font-semibold text-dark mb-4">Benefits</h4>
                      <p className="text-gray-600 mb-4">
                        Registration gives you access to our comprehensive recruitment platform, allowing you to:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Browse student profiles and resumes</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Post job openings and internship opportunities</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Schedule campus recruitment drives</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={() => setActiveStep(2)} 
                      className="btn btn-primary flex items-center group"
                    >
                      Next Step
                      <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div className="bg-gradient-to-r from-primary to-indigo-700 p-8 flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mr-6">
                    <FaFileAlt className="text-4xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Job Profile Submission</h3>
                    <p className="text-white/80">Define your hiring needs</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-dark mb-4">What to Include</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Detailed job descriptions for each position</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Required skills and qualifications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Compensation packages and benefits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Number of positions available</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="text-xl font-semibold text-dark mb-4">Our Assistance</h4>
                      <p className="text-gray-600 mb-4">
                        Our placement team will help you:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Refine job descriptions for better matches</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Identify suitable candidates based on requirements</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Provide market insights on compensation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button 
                      onClick={() => setActiveStep(1)} 
                      className="btn btn-outline flex items-center group"
                    >
                      <FaLongArrowAltRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      Previous Step
                    </button>
                    <button 
                      onClick={() => setActiveStep(3)} 
                      className="btn btn-primary flex items-center group"
                    >
                      Next Step
                      <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`transition-opacity duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div className="bg-gradient-to-r from-primary to-indigo-700 p-8 flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mr-6">
                    <FaCalendarAlt className="text-4xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Schedule Confirmation</h3>
                    <p className="text-white/80">Planning the recruitment timeline</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-dark mb-4">Scheduling Process</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Select preferred dates for campus visits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Choose between in-person or virtual recruitment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Specify time requirements for each stage</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Confirm logistics and technical requirements</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="text-xl font-semibold text-dark mb-4">Our Coordination</h4>
                      <p className="text-gray-600 mb-4">
                        We'll handle all the logistics:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Arrange suitable venues for each activity</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Coordinate student participation schedules</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Set up technical infrastructure for assessments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button 
                      onClick={() => setActiveStep(2)} 
                      className="btn btn-outline flex items-center group"
                    >
                      <FaLongArrowAltRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      Previous Step
                    </button>
                    <button 
                      onClick={() => setActiveStep(4)} 
                      className="btn btn-primary flex items-center group"
                    >
                      Next Step
                      <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`transition-opacity duration-500 ${activeStep === 4 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div className="bg-gradient-to-r from-primary to-indigo-700 p-8 flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mr-6">
                    <FaComments className="text-4xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Pre-Placement Talk</h3>
                    <p className="text-white/80">Introducing your company to potential candidates</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-dark mb-4">Presentation Guidelines</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Introduce your company history and culture</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Highlight career growth opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Showcase projects and work environment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Address student questions and concerns</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="text-xl font-semibold text-dark mb-4">Our Support</h4>
                      <p className="text-gray-600 mb-4">
                        We'll ensure your presentation reaches the right audience:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Arrange presentation venue with AV equipment</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Ensure attendance of relevant student groups</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Facilitate Q&A sessions with students</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button 
                      onClick={() => setActiveStep(3)} 
                      className="btn btn-outline flex items-center group"
                    >
                      <FaLongArrowAltRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      Previous Step
                    </button>
                    <button 
                      onClick={() => setActiveStep(5)} 
                      className="btn btn-primary flex items-center group"
                    >
                      Next Step
                      <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className={`transition-opacity duration-500 ${activeStep === 5 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div className="bg-gradient-to-r from-primary to-indigo-700 p-8 flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mr-6">
                    <FaTasks className="text-4xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Selection Process</h3>
                    <p className="text-white/80">Finding the perfect match for your organization</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-dark mb-4">Selection Components</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Aptitude and technical assessments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Group discussions and case studies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Technical and HR interviews</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-700">Final selection and offer rollout</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="text-xl font-semibold text-dark mb-4">Our Assistance</h4>
                      <p className="text-gray-600 mb-4">
                        Throughout the selection process, we provide:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Dedicated rooms for each selection stage</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Student coordination and scheduling</span>
                        </li>
                        <li className="flex items-center">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          <span className="text-gray-700">Documentation and offer letter processing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button 
                      onClick={() => setActiveStep(4)} 
                      className="btn btn-outline flex items-center group"
                    >
                      <FaLongArrowAltRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      Previous Step
                    </button>
                    <Link to="/register?type=recruiter" className="btn btn-primary flex items-center group">
                      Get Started
                      <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placement Statistics Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Placement Statistics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse of our placement records from the previous academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placement Rate Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Placement Rate by Department</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Computer Science</span>
                    <span className="text-primary font-medium">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Electronics & Communication</span>
                    <span className="text-primary font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Mechanical Engineering</span>
                    <span className="text-primary font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Electrical Engineering</span>
                    <span className="text-primary font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Civil Engineering</span>
                    <span className="text-primary font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Statistics */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Salary Statistics (LPA)</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Highest Package</h4>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold text-primary">₹18</div>
                    <div className="text-gray-600">LPA</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Average Package</h4>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold text-primary">₹8.5</div>
                    <div className="text-gray-600">LPA</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Median Package</h4>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold text-primary">₹7.2</div>
                    <div className="text-gray-600">LPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#" className="btn btn-outline">
              Download Detailed Placement Brochure
            </a>
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
            <Link to="/register?type=recruiter" className="btn bg-white text-primary hover:bg-gray-100">
              Register as Recruiter
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

export default RecruitersPortal