import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

const OurTeam = () => {
  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        position: 'Director, Training & Placement Cell',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        bio: 'Dr. Rajesh Kumar has over 20 years of experience in academia and industry. He leads the Training & Placement Cell with a vision to bridge the gap between academia and industry.',
        contact: {
          email: 'director.tnp@university.edu',
          phone: '+91 98765 43210',
          linkedin: 'https://linkedin.com/in/rajeshkumar'
        }
      },
      {
        id: 2,
        name: 'Prof. Ananya Singh',
        position: 'Deputy Director, Training & Placement Cell',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        bio: 'Prof. Ananya Singh specializes in career counseling and industry relations. She has been instrumental in establishing partnerships with leading companies.',
        contact: {
          email: 'deputy.tnp@university.edu',
          phone: '+91 98765 43211',
          linkedin: 'https://linkedin.com/in/ananyasingh'
        }
      }
    ],
    placementOfficers: [
      {
        id: 1,
        name: 'Mr. Vikram Sharma',
        position: 'Placement Officer (Technical)',
        image: 'https://randomuser.me/api/portraits/men/67.jpg',
        bio: 'Mr. Vikram Sharma handles placements for engineering and technical departments. He has a strong network in the IT and manufacturing sectors.',
        contact: {
          email: 'technical.tnp@university.edu',
          phone: '+91 98765 43212',
          linkedin: 'https://linkedin.com/in/vikramsharma'
        }
      },
      {
        id: 2,
        name: 'Ms. Priya Patel',
        position: 'Placement Officer (Management)',
        image: 'https://randomuser.me/api/portraits/women/63.jpg',
        bio: 'Ms. Priya Patel manages placements for management and commerce students. She has extensive experience in corporate relations.',
        contact: {
          email: 'management.tnp@university.edu',
          phone: '+91 98765 43213',
          linkedin: 'https://linkedin.com/in/priyapatel'
        }
      },
      {
        id: 3,
        name: 'Mr. Arjun Mehta',
        position: 'Placement Officer (Research)',
        image: 'https://randomuser.me/api/portraits/men/42.jpg',
        bio: 'Mr. Arjun Mehta focuses on research and development opportunities for postgraduate and doctoral students.',
        contact: {
          email: 'research.tnp@university.edu',
          phone: '+91 98765 43214',
          linkedin: 'https://linkedin.com/in/arjunmehta'
        }
      }
    ],
    trainingTeam: [
      {
        id: 1,
        name: 'Dr. Neha Gupta',
        position: 'Training Coordinator (Technical Skills)',
        image: 'https://randomuser.me/api/portraits/women/28.jpg',
        bio: 'Dr. Neha Gupta designs and implements technical training programs to enhance students\' technical skills and knowledge.',
        contact: {
          email: 'technical.training@university.edu',
          phone: '+91 98765 43215',
          linkedin: 'https://linkedin.com/in/nehagupta'
        }
      },
      {
        id: 2,
        name: 'Mr. Rahul Verma',
        position: 'Training Coordinator (Soft Skills)',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        bio: 'Mr. Rahul Verma specializes in soft skills training, including communication, leadership, and interpersonal skills.',
        contact: {
          email: 'softskills.training@university.edu',
          phone: '+91 98765 43216',
          linkedin: 'https://linkedin.com/in/rahulverma'
        }
      }
    ],
    supportStaff: [
      {
        id: 1,
        name: 'Ms. Kavita Sharma',
        position: 'Administrative Assistant',
        image: 'https://randomuser.me/api/portraits/women/56.jpg',
        bio: 'Ms. Kavita Sharma manages administrative tasks, documentation, and coordination with various departments.',
        contact: {
          email: 'admin.tnp@university.edu',
          phone: '+91 98765 43217',
          linkedin: 'https://linkedin.com/in/kavitasharma'
        }
      },
      {
        id: 2,
        name: 'Mr. Suresh Kumar',
        position: 'Technical Support Specialist',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        bio: 'Mr. Suresh Kumar provides technical support for the placement portal, online assessments, and virtual interviews.',
        contact: {
          email: 'tech.support@university.edu',
          phone: '+91 98765 43218',
          linkedin: 'https://linkedin.com/in/sureshkumar'
        }
      }
    ]
  }

  const TeamMemberCard = ({ member }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-24 h-24 rounded-full object-cover border-4 border-light"
          />
          <div>
            <h3 className="text-xl font-bold text-dark">{member.name}</h3>
            <p className="text-primary font-medium mb-2">{member.position}</p>
            <p className="text-gray-600 mb-4">{member.bio}</p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${member.contact.email}`} className="flex items-center text-gray-600 hover:text-primary">
                <FaEnvelope className="mr-1" />
                <span>{member.contact.email}</span>
              </a>
              <a href={`tel:${member.contact.phone}`} className="flex items-center text-gray-600 hover:text-primary">
                <FaPhone className="mr-1" />
                <span>{member.contact.phone}</span>
              </a>
              <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary">
                <FaLinkedin className="mr-1" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-gray-100 mb-8">
              Meet the dedicated professionals behind the Training & Placement Cell who work tirelessly to connect students with the right career opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings together expertise from academia and industry to guide the Training & Placement Cell.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {teamMembers.leadership.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Placement Officers Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Placement Officers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our placement officers work directly with students and companies to facilitate successful placements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.placementOfficers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      

      {/* Support Staff Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Support Staff</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our support staff ensures smooth functioning of the Training & Placement Cell's operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.supportStaff.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Student Coordinators Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Student Coordinators</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our student coordinators play a vital role in bridging the gap between the T&P Cell and the student community.
            </p>
          </div>

          <div className="bg-light p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-dark mb-2">Join Our Team as a Student Coordinator</h3>
              <p className="text-gray-600">
                We invite enthusiastic students to join the T&P Cell as student coordinators. This is an excellent opportunity to develop leadership skills and contribute to the placement process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Responsibilities:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Assist in organizing placement drives and pre-placement talks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Coordinate between students, faculty, and companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Help in documentation and data management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Promote T&P activities among students</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Leadership and organizational skill development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Direct interaction with company representatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Certificate of appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Letter of recommendation for outstanding performers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6">
              <a href="#" className="btn btn-primary">
                Apply as Student Coordinator
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default OurTeam