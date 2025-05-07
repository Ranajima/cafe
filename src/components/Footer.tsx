import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif font-bold mb-6">Artisan Brew</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting exceptional coffee experiences in a space that feels like home. Join us for a cup and become part of our story.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'instagram', 'twitter', 'pinterest'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="social-icon"
                  aria-label={`Follow us on ${social}`}
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in delay-100">
            <h3 className="text-xl font-medium mb-6">Contact & Hours</h3>
            <ul className="space-y-4">
              <li className="contact-item">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span>123 Coffee Street, Brewville, CA 90210</span>
              </li>
              <li className="contact-item">
                <i className="fas fa-phone-alt contact-icon"></i>
                <span>(555) 123-4567</span>
              </li>
              <li className="contact-item">
                <i className="fas fa-envelope contact-icon"></i>
                <span>hello@artisanbrew.com</span>
              </li>
              <li className="contact-item">
                <i className="fas fa-clock contact-icon"></i>
                <div>
                  <p>Monday - Friday: 7am - 8pm</p>
                  <p>Saturday - Sunday: 8am - 9pm</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in delay-200">
            <h3 className="text-xl font-medium mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="mb-6">
              <div className="flex mb-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-l-full focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-amber-700 px-4 py-2 rounded-r-full hover:bg-amber-800 transition-colors duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            </form>
            
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'Menu', 'Reservations', 'Gallery', 'Contact', 'Careers'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Artisan Brew. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((link) => (
              <a 
                key={link} 
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;