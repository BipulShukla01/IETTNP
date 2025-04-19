import { useParams, Link } from 'react-router-dom'
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
  FaBook,
  FaArrowLeft
} from 'react-icons/fa'

const DepartmentDetail = () => {
  const { departmentId } = useParams();
  const id = parseInt(departmentId);

  // Same department data as in Academics.jsx
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
      placementRate: 95,
      longDescription: `The Department of Computer Science & Engineering offers a comprehensive curriculum that covers fundamental principles and cutting-edge technologies. Our program is designed to prepare students for the rapidly evolving field of computing.

      The B.Tech program provides a strong foundation in programming, algorithms, data structures, computer architecture, and software engineering. Advanced courses cover areas such as artificial intelligence, machine learning, data science, cloud computing, and cybersecurity.

      Our faculty members are experts in their respective fields and are actively engaged in research and industry collaborations. Students have access to state-of-the-art laboratories and computing facilities, enabling them to work on real-world projects and gain practical experience.`
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
      placementRate: 92,
      longDescription: `The Department of Electronics & Communication Engineering offers programs that blend theoretical knowledge with practical skills in electronic systems, communication technologies, and signal processing.

      Our curriculum covers analog and digital electronics, electromagnetic theory, communication systems, microprocessors, VLSI design, and embedded systems. Students learn to design, develop, and maintain electronic equipment and communication systems.

      The department has well-equipped laboratories for basic electronics, communication systems, microprocessors, VLSI design, and signal processing. Students get hands-on experience with industry-standard tools and technologies, preparing them for careers in various sectors.`
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
      placementRate: 90,
      longDescription: `The Department of Mechanical Engineering offers comprehensive programs that cover the principles of mechanics, thermodynamics, materials science, and manufacturing processes.

      Our curriculum includes courses in engineering mechanics, thermodynamics, fluid mechanics, heat transfer, manufacturing technology, machine design, and automation. Students learn to design, analyze, and maintain mechanical systems and processes.

      The department has well-equipped laboratories for material testing, fluid mechanics, heat transfer, CAD/CAM, robotics, and automation. Students work on industry-relevant projects and participate in competitions like SAE, BAJA, and Formula Student, gaining practical experience and problem-solving skills.`
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
      placementRate: 88,
      longDescription: `The Department of Electrical Engineering offers programs that focus on the generation, transmission, distribution, and utilization of electrical energy, as well as the design and operation of electrical systems and equipment.

      Our curriculum covers electrical circuits, power systems, electrical machines, control systems, power electronics, and renewable energy technologies. Students learn to design, analyze, and maintain electrical systems for various applications.

      The department has well-equipped laboratories for electrical machines, power systems, control systems, and power electronics. Students work on projects related to smart grids, renewable energy integration, and energy-efficient systems, preparing them for careers in the power sector and beyond.`
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
      placementRate: 85,
      longDescription: `The Department of Biotechnology offers programs that integrate biology, chemistry, and engineering principles to develop products and processes that improve human health and the environment.

      Our curriculum covers molecular biology, genetics, biochemistry, microbiology, bioprocess engineering, and bioinformatics. Students learn to apply biological systems and organisms to develop new products and processes for healthcare, agriculture, and environmental applications.

      The department has state-of-the-art laboratories for molecular biology, genetic engineering, bioprocess engineering, and bioinformatics. Students work on research projects in areas such as drug discovery, vaccine development, biofuels, and environmental biotechnology, preparing them for careers in the rapidly growing biotechnology sector.`
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
      placementRate: 82,
      longDescription: `The Department of Food Technology offers programs that focus on the science and engineering principles involved in the production, processing, preservation, packaging, and distribution of food products.

      Our curriculum covers food chemistry, food microbiology, food processing operations, food engineering, food quality control, and food packaging. Students learn to develop safe, nutritious, and high-quality food products and processes.

      The department has well-equipped laboratories for food processing, food analysis, food microbiology, and sensory evaluation. Students work on projects related to food product development, food preservation, food safety, and quality control, preparing them for careers in the food industry and regulatory agencies.`
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
      placementRate: 86,
      longDescription: `The Department of Biomedical Engineering offers programs that apply engineering principles and design concepts to medicine and biology for healthcare purposes.

      Our curriculum integrates engineering principles with medical and biological sciences to design and create equipment, devices, computer systems, and software used in healthcare. Students learn to develop innovative solutions for diagnosing, monitoring, and treating medical conditions.

      The department has specialized laboratories for medical instrumentation, biomaterials, tissue engineering, and medical imaging. Students work on projects in collaboration with hospitals and healthcare providers, developing skills in designing and testing medical devices and systems.`
    }
  ];

  const department = departments.find(dept => dept.id === id);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Department Not Found</h1>
          <p className="text-gray-600 mb-6">The department you're looking for doesn't exist.</p>
          <Link to="/academics" className="btn btn-primary">
            Back to Academics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${department.bgColor} text-white py-20 relative overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 -right-24 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <Link to="/academics" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to All Departments
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center animate-fade-in-up">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="p-5 bg-white/20 backdrop-blur-sm rounded-lg mr-6">
                {department.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{department.name}</h1>
                <p className="text-xl text-white/80">{department.description}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">{department.facultyCount}</div>
                <div className="text-sm text-white/80">Faculty</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">{department.studentsCount}</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">{department.placementRate}%</div>
                <div className="text-sm text-white/80">Placement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About the Department */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-dark">About the Department</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 whitespace-pre-line">{department.longDescription}</p>
                </div>
              </div>

              {/* Courses Offered */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up animation-delay-300">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-dark flex items-center">
                    <FaGraduationCap className="mr-3 text-primary" /> 
                    Courses Offered
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {department.courses.map((course, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-gray-800">{course}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {index === 0 ? '4 years program' : index === 1 ? '2 years program' : 'Research program'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Department Highlights */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up animation-delay-600">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-dark flex items-center">
                    <FaChevronDown className="mr-3 text-primary" /> 
                    Department Highlights
                  </h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {department.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                        <span className="text-primary font-bold mr-3 mt-1">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Faculty */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up animation-delay-900">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-dark flex items-center">
                    <FaChalkboardTeacher className="mr-3 text-primary" /> 
                    Our Faculty
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Our department has {department.facultyCount} highly qualified faculty members with expertise in various specializations within {department.name}. They are actively engaged in research, teaching, and industry collaborations.
                  </p>
                  <div className="flex justify-center">
                    <Link to="/our-team" className="btn btn-outline">
                      View Faculty Profiles
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Career Opportunities */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up animation-delay-300">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-dark">Career Opportunities</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {department.careers.map((career, index) => (
                      <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <FaArrowRight className="text-primary mr-3 text-sm" />
                        <span className="text-gray-700">{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Placement Statistics */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up animation-delay-600">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-dark">Placement Statistics</h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Placement Rate</span>
                      <span className="text-primary font-semibold">{department.placementRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${department.placementRate}%` }}></div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our {department.name} graduates are highly sought after by top companies in the industry. The department has consistently achieved excellent placement records over the years.
                  </p>
                </div>
              </div>

              {/* Research Areas */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up animation-delay-900">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-dark">Research Areas</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {[
                      `Advanced ${department.shortName} Technologies`,
                      'Emerging Research Domains',
                      'Industry-Relevant Projects',
                      'Interdisciplinary Research',
                      'Innovation & Development'
                    ].map((area, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                        <span className="text-gray-700">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact & Enquiry */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 animate-fade-in-up animation-delay-1200">
                <h2 className="text-xl font-bold text-primary mb-4">Interested in this Program?</h2>
                <p className="text-gray-600 mb-6">Want to learn more about our {department.name} program or have specific questions?</p>
                <Link to="/contact-us" className="btn btn-primary w-full flex justify-center items-center">
                  Contact Department
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Departments */}
      <div className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark mb-8">Explore Other Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments
              .filter(dept => dept.id !== id)
              .slice(0, 3)
              .map(dept => (
                <Link 
                  key={dept.id}
                  to={`/academics/${dept.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${dept.bgColor} p-4 flex items-center`}>
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg mr-3">
                      {dept.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-3 line-clamp-2">{dept.description}</p>
                    <span className="text-sm font-medium text-primary flex items-center group-hover:text-accent transition-colors">
                      View Department
                      <FaArrowRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentDetail