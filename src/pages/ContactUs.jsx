import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: 'student'
  })

  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = 'Invalid email address'
    }
    
    if (formData.phone && !/^[0-9]{10}$/i.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = 'Invalid phone number'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters'
    }
    
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        userType: 'student'
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Get in touch with our Training & Placement Cell for any queries or assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Your message has been sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="userType" className="block text-gray-700 font-medium mb-2">I am a*</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="student" 
                        checked={formData.userType === 'student'} 
                        onChange={handleChange}
                        className="form-radio text-primary"
                      />
                      <span className="ml-2 text-gray-700">Student</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="recruiter" 
                        checked={formData.userType === 'recruiter'} 
                        onChange={handleChange}
                        className="form-radio text-primary"
                      />
                      <span className="ml-2 text-gray-700">Recruiter</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="other" 
                        checked={formData.userType === 'other'} 
                        onChange={handleChange}
                        className="form-radio text-primary"
                      />
                      <span className="ml-2 text-gray-700">Other</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name*</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Email"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Phone Number"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject*</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      formErrors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Subject of your message"
                  />
                  {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows="5" 
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Message"
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-dark">Address</h3>
                      <p className="text-gray-600">
                        Training & Placement Cell<br />
                        University Campus, Main Road<br />
                        City - 123456
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaPhone className="text-primary text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-dark">Phone</h3>
                      <p className="text-gray-600">
                        +91 98765 43210<br />
                        +91 98765 43211
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaEnvelope className="text-primary text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-dark">Email</h3>
                      <p className="text-gray-600">
                        tnp@university.edu<br />
                        director.tnp@university.edu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaClock className="text-primary text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-dark">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-dark mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-light p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-light p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-light p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-light p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office for in-person assistance or to discuss collaboration opportunities.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.03764937576707!3d28.50992537583479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1226b575f9e9%3A0x71f9fb0acdce13ba!2sIIIT%20Delhi!5e0!3m2!1sen!2sin!4v1695500558319!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about contacting and working with the Training & Placement Cell.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-light rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>How can I schedule a meeting with the T&P Cell?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  You can schedule a meeting by filling out the contact form on this page, calling our office during working hours, or sending an email with your preferred date and time. Our team will confirm the appointment based on availability.
                </div>
              </details>
            </div>

            <div className="bg-light rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>What information should companies provide when contacting for recruitment?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  Companies should provide details about their organization, job profiles, eligibility criteria, compensation packages, and preferred recruitment timeline. This helps us match your requirements with suitable candidates and plan the recruitment process effectively.
                </div>
              </details>
            </div>

            <div className="bg-light rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>How long does it take to get a response after submitting the contact form?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  We typically respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our office directly during working hours.
                </div>
              </details>
            </div>

            <div className="bg-light rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>Can alumni access the services of the T&P Cell?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  Yes, we offer career guidance and job placement assistance to our alumni as well. Alumni can contact us through the same channels as current students and specify their alumni status in the communication.
                </div>
              </details>
            </div>

            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 font-medium cursor-pointer">
                  <span>How can I provide feedback about the T&P Cell's services?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-600">
                  We welcome feedback to improve our services. You can provide feedback through the contact form on this page, send an email to feedback.tnp@university.edu, or fill out the feedback form available at our office.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs