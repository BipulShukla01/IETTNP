import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/ui/Hero'
import StatsSection from '../components/ui/StatsSection'
import CompaniesSection from '../components/ui/CompaniesSection'
import electronicsHodImage from '../assets/electronics hod.jpg'
import mechanicalHodImage from '../assets/mechanical hod.png'
import { 
  FaGraduationCap, 
  FaBuilding, 
  FaChalkboardTeacher, 
  FaUsers, 
  FaUserShield, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaUniversity,
  FaUserTie,
  FaChevronRight
} from 'react-icons/fa'

// Import leadership images
import vcImage from '../assets/VC.jpeg'
import deanImage from '../assets/Dean.png'
import directorImage from '../assets/Director.jpg'

const Home = () => {
  // Leadership messages state
  const [activeMessage, setActiveMessage] = useState('vc');
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  
  // Developer slider state
  const [currentDevSlide, setCurrentDevSlide] = useState(0);
  const totalDevs = 8; // Total number of developer cards
  
  // Get slides per view based on screen width
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3; // Default for SSR
  };
  
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  // Ensure we can scroll to see all developers by calculating the correct number of slides
  const maxDevSlide = Math.max(0, Math.ceil(totalDevs / slidesPerView) - 1);
  
  // Function to go to a specific slide in the developer slider
  const goToDevSlide = (slideIndex) => {
    if (slideIndex < 0) slideIndex = 0;
    if (slideIndex > maxDevSlide) slideIndex = maxDevSlide;
    setCurrentDevSlide(slideIndex);
  };
  
  // Handle window resize for developer slider
  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
      if (newSlidesPerView !== slidesPerView) {
        setSlidesPerView(newSlidesPerView);
        setCurrentDevSlide(0);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [slidesPerView]);
  
  // Function to rotate through leadership messages
  const rotateMessages = () => {
    setActiveMessage(current => {
      if (current === 'vc') return 'dean';
      if (current === 'dean') return 'director';
      return 'vc';
    });
  };
  
  // Set up automatic rotation with interval for leadership messages
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(rotateMessages, 5000); // Change message every 5 seconds
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);
  
  // Pause rotation when user manually changes the message
  const handleMessageChange = (message) => {
    setActiveMessage(message);
    setIsPaused(true);
    
    // Resume automatic rotation after 15 seconds of inactivity
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const resumeTimer = setTimeout(() => {
      setIsPaused(false);
    }, 15000);
    
    return () => clearTimeout(resumeTimer);
  };
  
  const leadershipMessages = {
    vc: {
      name: 'Prof. Mukesh Pandey',
      title: 'Vice Chancellor, Bundelkhand University',
      image: vcImage,
      message: 'I am delighted to welcome you to our Training and Placement Portal. Our institution is committed to providing world-class education and ensuring that our students are well-prepared for the challenges of the professional world. Through our dedicated Training and Placement Cell, we strive to bridge the gap between academia and industry, fostering meaningful collaborations that benefit our students and contribute to the growth of the industry. I encourage all students to take full advantage of the resources and opportunities available through this portal to shape their careers and achieve their professional goals.',
      signature: null // Using text signature instead
    },
    dean: {
      name: 'Prof. M.M Singh',
      title: 'Dean, Institute of Engineering & Technology',
      image: deanImage,
      message: 'The academic programs at our institution are designed to equip students with both theoretical knowledge and practical skills required in today\'s competitive job market. Our faculty members work tirelessly to ensure that the curriculum remains relevant and up-to-date with industry trends. The Training and Placement Cell plays a crucial role in complementing classroom learning with industry exposure, skill development workshops, and placement opportunities. I urge all students to engage actively with the T&P Cell activities to enhance their employability and realize their career aspirations.',
      signature: null // Using text signature instead
    },
    director: {
      name: 'Dr. D.K Bhatt',
      title: 'Director, Institute of Engineering & Technology',
      image: directorImage,
      message: 'The Training and Placement Cell serves as a vital interface between our institution and the corporate world. Our mission is to prepare students for successful careers by providing comprehensive training programs, facilitating industry interactions, and creating placement opportunities. We have established strong relationships with leading companies across various sectors, resulting in excellent placement records year after year. This portal is designed to streamline the placement process and provide valuable resources to both students and recruiters. I invite all stakeholders to utilize this platform effectively and contribute to our shared goal of nurturing industry-ready professionals.',
      signature: null // Using text signature instead
    }
  };
  const services = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-4xl text-primary" />,
      title: 'For Students',
      description: 'Career guidance, skill development workshops, and placement opportunities to help students kickstart their careers.',
      link: '/student-portal'
    },
    {
      id: 2,
      icon: <FaBuilding className="text-4xl text-primary" />,
      title: 'For Recruiters',
      description: 'Access to a pool of talented students, campus recruitment drives, and industry-academia collaboration opportunities.',
      link: '/recruiters-portal'
    },
    {
      id: 3,
      icon: <FaUserShield className="text-4xl text-primary" />,
      title: 'For Faculty & Staff',
      description: 'Administrative tools to manage students, recruiters, and placement activities through our secure admin portal.',
      link: '/admin-portal'
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
      title: 'Training Programs',
      description: 'Specialized training programs designed to enhance technical and soft skills required in the professional world.',
      link: '/academics'
    }
  ]

  const announcements = [
    {
      id: 1,
      title: 'Campus Recruitment Drive by Tech Giants',
      date: 'October 15, 2023',
      description: 'Google, Microsoft, and Amazon will be visiting our campus for recruitment on October 15, 2023.'
    },
    {
      id: 2,
      title: 'Pre-Placement Talk by Industry Experts',
      date: 'September 30, 2023',
      description: 'Join us for an insightful session on industry trends and career opportunities.'
    },
    {
      id: 3,
      title: 'Resume Building Workshop',
      date: 'September 25, 2023',
      description: 'Learn how to create an impressive resume that stands out to recruiters.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Training & Placement Cell offers a wide range of services to students and recruiters to facilitate successful placements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <div className="text-center">
                  <Link to={service.link} className="text-primary font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Updates and Notices Section - Stylish & Animated */}
      <div className="py-16 bg-gradient-to-r from-blue-900 via-primary to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 -right-24 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Latest Updates & Announcements
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Stay informed with the latest news, events, and opportunities from the Training & Placement Cell
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Announcement Tabs */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-white/20 animate-fade-in-up animation-delay-600">
              <div className="flex border-b border-white/20">
                <button className="flex-1 py-4 px-6 text-white font-medium bg-white/10 hover:bg-white/20 transition-colors">
                  All Updates
                </button>
                <button className="flex-1 py-4 px-6 text-white font-medium hover:bg-white/10 transition-colors">
                  Placements
                </button>
                <button className="flex-1 py-4 px-6 text-white font-medium hover:bg-white/10 transition-colors">
                  Events
                </button>
              </div>
              
              <div className="divide-y divide-white/10">
                {/* Announcement 1 - High Priority */}
                <div className="p-6 hover:bg-white/5 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Campus Recruitment Drive: Microsoft</h3>
                        <span className="px-3 py-1 bg-red-500/20 text-red-200 text-xs rounded-full font-medium">Urgent</span>
                      </div>
                      <p className="text-gray-300 mb-3">Microsoft will be conducting a recruitment drive on November 15, 2023. Eligible students must register by November 10.</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Posted: October 25, 2023</span>
                        <button className="text-accent font-medium group-hover:text-white transition-colors flex items-center">
                          Read More 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Announcement 2 - Medium Priority */}
                <div className="p-6 hover:bg-white/5 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Resume Building Workshop</h3>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 text-xs rounded-full font-medium">Upcoming</span>
                      </div>
                      <p className="text-gray-300 mb-3">A resume building workshop will be conducted on November 5, 2023, at the Main Auditorium from 10:00 AM to 1:00 PM.</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Posted: October 22, 2023</span>
                        <button className="text-accent font-medium group-hover:text-white transition-colors flex items-center">
                          Read More 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Announcement 3 - Normal Priority */}
                <div className="p-6 hover:bg-white/5 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Internship Opportunity: TCS</h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-200 text-xs rounded-full font-medium">New</span>
                      </div>
                      <p className="text-gray-300 mb-3">TCS is offering summer internships for pre-final year students. Last date to apply is November 20, 2023.</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Posted: October 20, 2023</span>
                        <button className="text-accent font-medium group-hover:text-white transition-colors flex items-center">
                          Read More 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links & Newsletter */}
            <div className="space-y-6 animate-fade-in-up animation-delay-900">
              {/* Quick Links Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-white/20">
                <div className="p-5 border-b border-white/20">
                  <h3 className="text-xl font-bold">Quick Links</h3>
                </div>
                <div className="p-5 space-y-3">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <span>Placement Statistics</span>
                  </a>
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 group-hover:bg-purple-500/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>Upcoming Events</span>
                  </a>
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-3 group-hover:bg-pink-500/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span>Placement Brochure</span>
                  </a>
                </div>
              </div>
              
              {/* Newsletter Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-white/20">
                <div className="p-5 border-b border-white/20">
                  <h3 className="text-xl font-bold">Stay Updated</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-300 mb-4">Subscribe to receive notifications about new announcements and updates.</p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                    />
                    <button className="bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-r-lg font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages from Leadership Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Messages from Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights and vision from our institution's leaders guiding the Training & Placement initiatives.
            </p>
          </div>

          {/* Leadership Tabs */}
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex bg-gray-200 rounded-lg p-1 mb-2">
              <button 
                onClick={() => handleMessageChange('vc')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeMessage === 'vc' 
                    ? 'bg-white text-primary shadow-md' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Vice Chancellor
              </button>
              <button 
                onClick={() => handleMessageChange('dean')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeMessage === 'dean' 
                    ? 'bg-white text-primary shadow-md' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Dean
              </button>
              <button 
                onClick={() => handleMessageChange('director')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeMessage === 'director' 
                    ? 'bg-white text-primary shadow-md' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Director
              </button>
            </div>
            
            {/* Auto-rotation indicator */}
            <div className="flex items-center gap-2">
              <div className="flex space-x-1">
                {['vc', 'dean', 'director'].map((key) => (
                  <div 
                    key={key} 
                    className={`w-2 h-2 rounded-full ${
                      activeMessage === key 
                        ? 'bg-primary' 
                        : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="text-xs text-gray-500 ml-2">
                {isPaused ? 'Manual' : 'Auto'} • 
                <button 
                  onClick={() => setIsPaused(!isPaused)} 
                  className="ml-1 text-primary hover:underline"
                >
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="max-w-4xl mx-auto">
            {Object.keys(leadershipMessages).map((key) => {
              const leader = leadershipMessages[key];
              return (
                <div 
                  key={key}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                    activeMessage === key 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 absolute -z-10 transform translate-y-8'
                  }`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary to-indigo-800 p-6 flex flex-col justify-center items-center text-center text-white">
                      <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm p-1 mb-4">
                        <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">{leader.name}</h3>
                      <p className="text-white/80 text-sm">{leader.title}</p>
                      <div className="mt-4 pt-4 border-t border-white/20 w-full">
                        <FaUniversity className="text-2xl mx-auto text-white/60" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex mb-4">
                        <FaQuoteLeft className="text-3xl text-primary/20" />
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          {leader.message}
                        </p>
                      </div>
                      <div className="flex justify-end mt-6">
                        <FaQuoteRight className="text-3xl text-primary/20" />
                      </div>
                      <div className="mt-6 flex justify-between items-end">
                        <div>
                          <p className="font-serif italic text-gray-600">
                            {leader.name}
                          </p>
                        </div>
                        <Link to="/our-team" className="text-primary flex items-center hover:underline">
                          Learn more about our leadership
                          <FaChevronRight className="ml-1 text-xs" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Announcements Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest placement activities and events happening on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm text-primary font-medium mb-2">{announcement.date}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{announcement.title}</h3>
                <p className="text-gray-600 mb-4">{announcement.description}</p>
                <a href="#" className="text-primary font-medium hover:underline">Read More</a>
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



      {/* Our Team Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who work tirelessly to ensure successful placements and career development for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 - TPO */}
            <div className="bg-light rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6 text-center">
              <img
                  src={electronicsHodImage}
                  alt="Head of Electronics Department"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md" // Added object-cover and shadow
                />
                <h3 className="text-xl font-bold text-dark mb-1">Er. Shashikant Verma</h3>
                <p className="text-primary mb-3">Training & Placement Officer, IET</p>
                <p className="text-gray-600 mb-4">
                  Coordinating with companies and preparing students for successful placements. Leading the T&P Cell initiatives and industry collaborations.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="mailto:tpo@bujhansi.ac.in" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 - Faculty Coordinator */}
            <div className="bg-light rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6 text-center">
              <img
                  src={mechanicalHodImage}
                  alt="Head of Mechanical Department"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md" // Added object-cover and shadow
                />
                <h3 className="text-xl font-bold text-dark mb-1">Dr. Jitendra Verma</h3>
                <p className="text-primary mb-3">Role</p>
                <p className="text-gray-600 mb-4">
                  Providing academic guidance and industry connections to enhance placement opportunities. Mentoring students for career development.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="mailto:faculty@bujhansi.ac.in" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/our-team" className="btn bg-primary text-white hover:bg-primary/90">
              View All Team Members
            </Link>
          </div>
        </div>
      </div>

      {/* Developers Section with Manual Slider */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Portal Developers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented team who designed and developed this Training & Placement Portal.
            </p>
          </div>

          {/* Developer Slider */}
          <div className="relative max-w-5xl mx-auto">
            {/* Developer Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex flex-nowrap transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentDevSlide * (100 / slidesPerView)}%)` }}
              >
                {/* Developer 1 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Bipul Shukla</h3>
                          <p className="text-primary">Lead Developer</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Designed and developed the front-end interface and user experience of the portal.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com/abhishekshukla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com/in/abhishekshukla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Aman Singh</h3>
                          <p className="text-primary">Role</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Work.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Aanchal Pandey</h3>
                          <p className="text-primary">Role</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Work.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer 4 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Amit Singh</h3>
                          <p className="text-primary">Role</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Work.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer 5 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Saddam Ansari</h3>
                          <p className="text-primary">Role</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Work.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer 6 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Ram Pratap Mall</h3>
                          <p className="text-primary">Role</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Work.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer 7 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Vishal Mourya</h3>
                          <p className="text-primary">Role</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Work.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer 8 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Raj Singh Parihar</h3>
                          <p className="text-primary">Role</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Work.
                      </p>
                      <div className="flex space-x-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => goToDevSlide(currentDevSlide - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition-colors"
              aria-label="Previous developer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => goToDevSlide(currentDevSlide + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition-colors"
              aria-label="Next developer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(maxDevSlide + 1)].map((_, index) => (
              <button 
                key={index}
                onClick={() => goToDevSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentDevSlide ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <CompaniesSection />

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-gray-100 max-w-2xl mx-auto mb-8">
            Join our Training & Placement Cell to access exclusive job opportunities and career guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn bg-white text-primary hover:bg-gray-100">
              Register Now
            </Link>
            <Link to="/contact-us" className="btn bg-transparent border border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home