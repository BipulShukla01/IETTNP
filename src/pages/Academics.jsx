import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaChalkboardTeacher, 
  FaFlask, 
  FaDna, 
  FaAppleAlt, 
  FaHeartbeat,
  FaArrowRight,
  FaChevronDown,
  FaBook
} from 'react-icons/fa'

const Academics = () => {

  const departments = [
    {
      id: 1,
      name: 'Computer Science & Engineering',
      shortName: 'CSE',
      icon: <FaLaptopCode className="text-4xl text-white" />,
      bgColor: 'from-blue-600 to-indigo-700',
      description: 'Focuses on computer programming, software development, artificial intelligence, and other computing technologies.',
      courses: ['B.Tech in Computer Science', 'M.Tech in Computer Science', 'PhD in Computer Science'],
      highlights: [
        'State-of-the-art computer labs with the latest hardware and software',
        'Specialized labs for AI, Machine Learning, and Data Science',
        'Industry partnerships with leading tech companies',
        'Research opportunities in cutting-edge technologies'
      ],
      careers: [
        'Software Developer',
        'Data Scientist',
        'AI/ML Engineer',
        'Systems Architect',
        'Cybersecurity Specialist'
      ],
      facultyCount: 25,
      studentsCount: 480,
      placementRate: 95
    },
    {
      id: 2,
      name: 'Electronics & Communication',
      shortName: 'ECE',
      icon: <FaChalkboardTeacher className="text-4xl text-white" />,
      bgColor: 'from-blue-600 to-indigo-700',
      description: 'Deals with electronic devices, circuits, communication equipment, and embedded systems.',
      courses: ['B.Tech in Electronics & Communication', 'M.Tech in VLSI Design', 'PhD in Electronics'],
      highlights: [
        'Advanced electronics and communication labs',
        'Embedded systems and IoT research facilities',
        'Industry-sponsored projects in VLSI design',
        'Wireless communication and signal processing labs'
      ],
      careers: [
        'Electronics Engineer',
        'Communication Systems Designer',
        'VLSI Design Engineer',
        'IoT Specialist',
        'Embedded Systems Developer'
      ],
      facultyCount: 22,
      studentsCount: 420,
      placementRate: 92
    },
    {
      id: 3,
      name: 'Mechanical Engineering',
      shortName: 'ME',
      icon: <FaGraduationCap className="text-4xl text-white" />,
      bgColor: 'from-blue-600 to-indigo-700',
      description: 'Covers the design, manufacturing, and maintenance of mechanical systems and machinery.',
      courses: ['B.Tech in Mechanical Engineering', 'M.Tech in Thermal Engineering', 'PhD in Mechanical Engineering'],
      highlights: [
        'Modern manufacturing and CAD/CAM labs',
        'Thermal and fluid dynamics research facilities',
        'Robotics and automation laboratories',
        'Industry partnerships for practical training'
      ],
      careers: [
        'Mechanical Design Engineer',
        'Manufacturing Engineer',
        'Thermal Systems Specialist',
        'Automotive Engineer',
        'Robotics Engineer'
      ],
      facultyCount: 20,
      studentsCount: 400,
      placementRate: 90
    },
    {
      id: 4,
      name: 'Electrical Engineering',
      shortName: 'EE',
      icon: <FaFlask className="text-4xl text-white" />,
      bgColor: 'from-blue-600 to-indigo-700',
      description: 'Focuses on electrical systems, power generation, transmission, and electrical machines.',
      courses: ['B.Tech in Electrical Engineering', 'M.Tech in Power Systems', 'PhD in Electrical Engineering'],
      highlights: [
        'Power systems and high voltage laboratories',
        'Electrical machines and drives research facilities',
        'Smart grid and renewable energy labs',
        'Industry collaborations for practical exposure'
      ],
      careers: [
        'Electrical Engineer',
        'Power Systems Engineer',
        'Control Systems Specialist',
        'Energy Management Expert',
        'Renewable Energy Consultant'
      ],
      facultyCount: 18,
      studentsCount: 360,
      placementRate: 88
    },
    {
      id: 5,
      name: 'Biotechnology',
      shortName: 'BT',
      icon: <FaDna className="text-4xl text-white" />,
      bgColor: 'from-blue-600 to-indigo-700',
      description: 'Explores the use of living systems and organisms to develop or make products for specific use.',
      courses: ['B.Tech in Biotechnology', 'M.Tech in Biotechnology', 'PhD in Biotechnology'],
      highlights: [
        'Advanced molecular biology and genetic engineering labs',
        'Bioinformatics and computational biology facilities',
        'Bioprocess engineering and fermentation technology units',
        'Research collaborations with pharmaceutical companies'
      ],
      careers: [
        'Biotechnologist',
        'Bioprocess Engineer',
        'Research Scientist',
        'Bioinformatics Specialist',
        'Quality Control Analyst'
      ],
      facultyCount: 15,
      studentsCount: 300,
      placementRate: 85
    },
    {
      id: 6,
      name: 'Food Technology',
      shortName: 'FT',
      icon: <FaAppleAlt className="text-4xl text-white" />,
      bgColor: 'from-blue-600 to-indigo-700',
      description: 'Focuses on the application of food science to selection, preservation, processing, packaging, and distribution of safe food.',
      courses: ['B.Tech in Food Technology', 'M.Tech in Food Processing', 'PhD in Food Science'],
      highlights: [
        'Food processing and preservation laboratories',
        'Food quality testing and analysis facilities',
        'Product development and sensory evaluation units',
        'Partnerships with food industry leaders'
      ],
      careers: [
        'Food Technologist',
        'Quality Assurance Manager',
        'Food Product Developer',
        'Food Safety Officer',
        'Research & Development Specialist'
      ],
      facultyCount: 14,
      studentsCount: 280,
      placementRate: 82
    },
    {
      id: 7,
      name: 'Biomedical Engineering',
      shortName: 'BME',
      icon: <FaHeartbeat className="text-4xl text-white" />,
      bgColor: 'from-blue-600 to-indigo-700',
      description: 'Applies engineering principles and design concepts to medicine and biology for healthcare purposes.',
      courses: ['B.Tech in Biomedical Engineering', 'M.Tech in Medical Instrumentation', 'PhD in Biomedical Engineering'],
      highlights: [
        'Medical instrumentation and device development labs',
        'Biomaterials and tissue engineering facilities',
        'Medical imaging and signal processing units',
        'Collaborations with hospitals and healthcare providers'
      ],
      careers: [
        'Biomedical Engineer',
        'Medical Device Designer',
        'Clinical Engineer',
        'Rehabilitation Engineer',
        'Regulatory Affairs Specialist'
      ],
      facultyCount: 16,
      studentsCount: 320,
      placementRate: 86
    }
  ]

  const trainingPrograms = [
    {
      id: 1,
      title: 'Technical Skills Development',
      description: 'Comprehensive training in programming languages, software tools, and emerging technologies.',
      duration: '60 hours',
      features: [
        'Hands-on coding sessions',
        'Industry-relevant projects',
        'Expert-led workshops',
        'Technical assessment and feedback'
      ]
    },
    {
      id: 2,
      title: 'Soft Skills Enhancement',
      description: 'Training in communication, teamwork, leadership, and other essential workplace skills.',
      duration: '40 hours',
      features: [
        'Communication workshops',
        'Group discussions',
        'Presentation skills',
        'Interpersonal skills development'
      ]
    },
    {
      id: 3,
      title: 'Placement Preparation',
      description: 'Focused preparation for aptitude tests, technical interviews, and HR rounds.',
      duration: '50 hours',
      features: [
        'Aptitude test practice',
        'Mock interviews',
        'Resume building',
        'Company-specific preparation'
      ]
    }
  ]

  const facilities = [
    {
      id: 1,
      title: 'Advanced Computer Labs',
      description: 'State-of-the-art computer laboratories equipped with the latest hardware and software.'
    },
    {
      id: 2,
      title: 'Training Centers',
      description: 'Dedicated training centers for technical and soft skills development.'
    },
    {
      id: 3,
      title: 'Digital Library',
      description: 'Comprehensive digital library with access to international journals, e-books, and research papers.'
    },
    {
      id: 4,
      title: 'Innovation Hub',
      description: 'A space for students to work on innovative projects and startups with mentorship support.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Animated */}
      <div className="bg-gradient-to-r from-primary to-indigo-800 text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 -right-24 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Academic <span className="text-accent">Excellence</span> & Innovation
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Discover our cutting-edge academic programs designed to prepare you for the challenges of tomorrow's world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/student-portal" className="btn bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-transform">
                Explore Programs
              </Link>
              <a href="#departments" className="btn bg-transparent border border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform">
                View Departments
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section - Interactive & Animated */}
      <div id="departments" className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Engineering Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our specialized engineering departments offering cutting-edge education and research opportunities.
            </p>
          </div>

          {/* Department Cards - Grid Layout with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {departments.map((department) => (
              <Link 
                key={department.id} 
                to={`/academics/${department.id}`}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`bg-gradient-to-r ${department.bgColor} p-6 relative h-52 overflow-hidden`}>
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                        {department.icon}
                      </div>
                      <span className="text-xs font-bold bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                        {department.shortName}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{department.name}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{department.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{department.courses.length} Courses</span>
                    <span className="text-sm font-medium text-primary flex items-center group-hover:text-accent transition-colors">
                      View Details
                      <FaArrowRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Training Programs Section - Animated Cards */}
      <div className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our specialized training programs are designed to enhance technical and soft skills required in the professional world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-primary to-indigo-700 p-6 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mt-10 -mr-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -mb-8 -ml-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{program.title}</h3>
                  <div className="text-sm text-white/80 font-medium mb-1 relative z-10">Duration: {program.duration}</div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${index * 50}ms` }}>
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <button className="text-primary font-medium hover:text-indigo-700 transition-colors flex items-center justify-center w-full">
                    Learn More
                    <FaArrowRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section - Animated Grid */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide world-class facilities to support academic excellence and skill development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={facility.id} 
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8 flex items-start">
                  <div className="bg-primary/10 p-4 rounded-lg mr-5">
                    <div className="w-10 h-10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {index === 0 ? <FaLaptopCode className="text-2xl" /> : 
                       index === 1 ? <FaChalkboardTeacher className="text-2xl" /> : 
                       index === 2 ? <FaBook className="text-2xl" /> : 
                       <FaFlask className="text-2xl" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Collaboration Section - Modern Design */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Industry Collaboration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We collaborate with industry leaders to ensure our curriculum remains relevant and our students stay updated with the latest trends.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up animation-delay-300">
            <div className="bg-gradient-to-r from-primary to-indigo-700 p-8 text-white">
              <h3 className="text-2xl font-bold">Bridging Academia and Industry</h3>
              <p className="text-white/80">Our partnerships with leading companies create opportunities for students and faculty alike</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <FaChalkboardTeacher className="text-primary text-sm" />
                  </div>
                  Collaborative Initiatives
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Industry-sponsored research projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Guest lectures by industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Industry-aligned curriculum development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Internship opportunities for students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Faculty development programs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <FaLaptopCode className="text-primary text-sm" />
                  </div>
                  Industry Partners
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Leading technology companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Manufacturing giants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Financial institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Consulting firms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-600">Research organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Calendar Section - Modern Table */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Academic Calendar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Key dates and events for the current academic year.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up animation-delay-300">
            <div className="bg-gradient-to-r from-primary to-indigo-700 p-6 text-white">
              <h3 className="text-2xl font-bold">2023-2024 Academic Year</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-primary font-bold rounded-tl-lg">Event</th>
                      <th className="px-6 py-4 text-left text-primary font-bold">Date</th>
                      <th className="px-6 py-4 text-left text-primary font-bold rounded-tr-lg">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 font-medium">Semester Start</td>
                      <td className="px-6 py-4 text-gray-600">August 1, 2023</td>
                      <td className="px-6 py-4 text-gray-600">Beginning of Fall Semester</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 font-medium">Mid-Term Examinations</td>
                      <td className="px-6 py-4 text-gray-600">October 10-15, 2023</td>
                      <td className="px-6 py-4 text-gray-600">Mid-semester assessment</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 font-medium">Winter Break</td>
                      <td className="px-6 py-4 text-gray-600">December 20, 2023 - January 5, 2024</td>
                      <td className="px-6 py-4 text-gray-600">Holiday period</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 font-medium">Final Examinations</td>
                      <td className="px-6 py-4 text-gray-600">December 1-15, 2023</td>
                      <td className="px-6 py-4 text-gray-600">End-semester assessment</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 font-medium">Spring Semester Start</td>
                      <td className="px-6 py-4 text-gray-600">January 10, 2024</td>
                      <td className="px-6 py-4 text-gray-600">Beginning of Spring Semester</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 font-medium">Annual Technical Fest</td>
                      <td className="px-6 py-4 text-gray-600">February 15-17, 2024</td>
                      <td className="px-6 py-4 text-gray-600">Campus-wide technical festival</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gray-50 p-6 text-center">
              <a href="#" className="btn btn-outline inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Complete Academic Calendar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Animated Gradient */}
      <div className="py-20 bg-gradient-to-r from-primary to-indigo-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mt-24 -mr-24"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -mb-24 -ml-24"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Explore our programs and take the first step towards a successful career in engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/student-portal" className="btn bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-transform">
                Explore Programs
              </Link>
              <Link to="/contact-us" className="btn bg-transparent border border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academics