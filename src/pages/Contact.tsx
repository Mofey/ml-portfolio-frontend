import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const FloatingCircles = () => (
  <>
    <motion.div
      className="absolute rounded-full bg-white dark:bg-gray-700 z-0"
      style={{ width: 100, height: 100, top: "10%", left: "5%" }}
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute rounded-full bg-white dark:bg-gray-700 z-0"
      style={{ width: 150, height: 150, bottom: "10%", right: "5%" }}
      animate={{ y: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute rounded-full bg-white dark:bg-gray-700 z-0"
      style={{ width: 80, height: 80, top: "50%", right: "20%" }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </>
);

const Contact = () => {
  const BACKEND_URL = 
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api/contact'
    : 'https://ml-portfolio-backend.vercel.app/api/contact';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    setValidationErrors(prevState => ({
      ...prevState,
      [id]: ''
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate form fields
    const errors = {
      name: formData.name ? '' : 'Name is required',
      email: formData.email ? (validateEmail(formData.email) ? '' : 'Invalid email address') : 'Email is required',
      message: formData.message ? '' : 'Message is required'
    };

    setValidationErrors(errors);

    // Check if there are any validation errors
    if (errors.name || errors.email || errors.message) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log('SUCCESS!', result);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (err: any) {
      console.error('FAILED...', err);
      setIsSubmitting(false);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="relative min-h-screen  bg-gradient-to-br bg-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden transition-colors duration-500 pt-24 pb-12">
      <FloatingCircles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 relative z-20">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                  <div>
                    <h4 className="text-lg font-medium dark:text-white">Email</h4>
                    <a href="mailto:mofetoluwa@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      mohfey@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                  <div>
                    <h4 className="text-lg font-medium dark:text-white">Phone</h4>
                    <a href="tel:+2348037326512" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      +234 (803) 732-6512
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                  <div>
                    <h4 className="text-lg font-medium dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 relative z-20">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                  />
                  {validationErrors.name && <p className="text-red-500 mt-1">{validationErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                  />
                  {validationErrors.email && <p className="text-red-500 mt-1">{validationErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                  ></textarea>
                  {validationErrors.message && <p className="text-red-500 mt-1">{validationErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-yellow-300 dark:hover:text-blue-800 transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {isSubmitted && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;