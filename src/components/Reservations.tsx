import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation details:', formData);
  };

  const { ref: titleRef, inView: titleVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: formRef, inView: formVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="reservations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Book A Table
          </h2>
          <p className="section-subtitle max-w-xl mx-auto text-gray-600">
            Reserve your seat and enjoy a curated dining experience with us.
          </p>
        </div>

        {/* Form */}
        <div
          ref={formRef}
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            formVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date and Time */}
              {[
                { icon: Calendar, name: 'date', type: 'date' },
                { icon: Clock, name: 'time', type: 'time' }
              ].map(({ icon: Icon, name, type }) => (
                <div key={name} className="relative group">
                  <div className="flex items-center absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <input
                    type={type}
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                    required
                  />
                </div>
              ))}

              {/* Guests */}
              <div className="relative group">
                <div className="flex items-center absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Users className="w-5 h-5" />
                </div>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div className="relative group">
                <div className="flex items-center absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="flex items-center absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative group md:col-span-2">
                <div className="flex items-center absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-10 w-full btn-primary text-white text-lg py-3 rounded-xl"
            >
              Book Now
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
