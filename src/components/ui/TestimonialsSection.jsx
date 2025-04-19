import { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      position: 'Software Engineer at Google',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'The Training and Placement Cell provided me with the perfect platform to showcase my skills to top companies. Their guidance throughout the placement process was invaluable.'
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'Data Scientist at Amazon',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'I am grateful to the T&P Cell for their continuous support and mentorship. The mock interviews and resume building workshops significantly improved my chances of getting placed.'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      position: 'Product Manager at Microsoft',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      quote: 'The industry exposure provided by the T&P Cell through various workshops and seminars helped me understand what companies look for in candidates. This insight was crucial for my placement.'
    },
    {
      id: 4,
      name: 'Neha Singh',
      position: 'UX Designer at Adobe',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      quote: 'The placement team went above and beyond to ensure we were well-prepared for the recruitment process. Their dedication and personalized guidance made all the difference.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-white py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni about their placement experiences and how our Training & Placement Cell helped them achieve their career goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-primary text-xl" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-primary text-xl" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-light p-8 md:p-12 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div>
                <FaQuoteLeft className="text-primary text-3xl mb-4 opacity-30" />
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-dark">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection