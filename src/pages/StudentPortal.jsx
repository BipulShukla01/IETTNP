import { Link } from 'react-router-dom'
import { FaGraduationCap, FaFileAlt, FaLaptopCode, FaUserTie, FaCalendarAlt, FaChartLine } from 'react-icons/fa'

const StudentPortal = () => {
  const services = [
    {
      id: 1,
      icon: <FaFileAlt className="text-4xl text-primary" />,
      title: 'Resume Building',
      description: 'Get expert guidance on creating an impressive resume that highlights your skills and achievements effectively.'
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      title: 'Technical Training',
      description: 'Enhance your technical skills through specialized training programs designed to meet industry requirements.'
    },
    {
      id: 3,
      icon: <FaUserTie className="text-4xl text-primary" />,
      title: 'Mock Interviews',
      description: 'Practice with simulated interview sessions conducted by industry professionals to improve your performance.'
    },
    {
      id: 4,
      icon: <FaCalendarAlt className="text-4xl text-primary" />,
      title: 'Placement Updates',
      description: 'Stay updated with the latest placement drives, company visits, and recruitment opportunities.'
    },
    {
      id: 5,
      icon: <FaGraduationCap className="text-4xl text-primary" />,
      title: 'Career Counseling',
      description: 'Get personalized career guidance to help you make informed decisions about your professional path.'
    },
    {
      id: 6,
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: 'Skill Assessment',
      description: 'Evaluate your strengths and areas for improvement through comprehensive skill assessment tests.'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Resume Building Workshop',
      date: 'September 25, 2023',
      time: '10:00 AM - 12:00 PM',
      location: 'Seminar Hall A',
      description: 'Learn how to create an impressive resume that stands out to recruiters.'
    },
    {
      id: 2,
      title: 'Mock Interview Session',
      date: 'October 5, 2023',
      time: '2:00 PM - 5:00 PM',
      location: 'Training Center',
      description: 'Practice your interview skills with HR professionals from leading companies.'
    },
    {
      id: 3,
      title: 'Technical Aptitude Test',
      date: 'October 10, 2023',
      time: '9:00 AM - 11:00 AM',
      location: 'Computer Lab',
      description: 'Test your technical knowledge and problem-solving abilities.'
    }
  ]

  const resources = [
    {
      id: 1,
      title: 'Resume Templates',
      description: 'Download professionally designed resume templates for different roles and industries.',
      link: '#'
    },
    {
      id: 2,
      title: 'Interview Preparation Guide',
      description: 'Comprehensive guide covering common interview questions and effective answering strategies.',
      link: '#'
    },
    {
      id: 3,
      title: 'Technical Assessment Practice',
      description: 'Practice questions and sample tests to prepare for technical assessments.',
      link: '#'
    },
    {
      id: 4,
      title: 'Placement Statistics',
      description: 'Detailed statistics of past placements, including company-wise and branch-wise data.',
      link: '#'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Portal</h1>
            <p className="text-xl text-gray-100 mb-8">
              Your gateway to career opportunities, training resources, and placement support to help you achieve your professional goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="btn bg-white text-primary hover:bg-gray-100">
                Login to Portal
              </Link>
              <Link to="/register" className="btn bg-accent text-white hover:bg-accent/90">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Services for Students</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of services to help you prepare for and succeed in your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest events and activities organized by the Training & Placement Cell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary font-medium mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start text-gray-600 mb-4">
                  <FaGraduationCap className="mr-2 mt-1" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <a href="#" className="text-primary font-medium hover:underline">Register for Event</a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/events" className="btn btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access valuable resources to help you prepare for placements and enhance your skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-dark mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a href={resource.link} className="text-primary font-medium hover:underline">Access Resource</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about placements and the services offered by the T&P Cell.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>How can I register for campus placements?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  To register for campus placements, you need to create an account on the Student Portal and complete your profile with all the required information, including academic details, skills, and resume.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>What is the eligibility criteria for placements?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  The eligibility criteria vary depending on the company and the role. Generally, most companies require a minimum CGPA of 6.5 or 60% throughout academics with no active backlogs. Specific criteria will be mentioned in the job description for each placement drive.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>How can I prepare for placement interviews?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  The T&P Cell organizes various training programs, including mock interviews, group discussions, and technical workshops to help you prepare for placement interviews. Additionally, you can access resources like interview preparation guides and practice tests on the Student Portal.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>Can I apply for multiple companies?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  Yes, you can apply for multiple companies until you receive a job offer. Once you accept an offer, you will not be eligible to participate in further placement drives as per the placement policy.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>How do I get notified about upcoming placement drives?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  All placement-related announcements are made through the Student Portal. You will receive notifications via email and SMS for upcoming placement drives, pre-placement talks, and other important events.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-gray-100 max-w-2xl mx-auto mb-8">
            Register on the Student Portal to access exclusive job opportunities, training resources, and placement support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn bg-white text-primary hover:bg-gray-100">
              Register Now
            </Link>
            <Link to="/contact-us" className="btn bg-transparent border border-white text-white hover:bg-white/10">
              Contact T&P Cell
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentPortal