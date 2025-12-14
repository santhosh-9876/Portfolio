import { motion as Motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = ({ setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="group relative px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition-all duration-200"
          >
            <div className="relative">
              {/* Main SK text */}
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 sm:from-cyan-400 sm:via-blue-400 sm:to-purple-400 md:from-cyan-500 md:via-blue-500 md:to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-blue-200 group-hover:to-purple-200 sm:group-hover:from-cyan-300 sm:group-hover:via-blue-300 sm:group-hover:to-purple-300 md:group-hover:from-cyan-400 md:group-hover:via-blue-400 md:group-hover:to-purple-400 transition-all duration-200 select-none tracking-tighter">
                SK
              </span>
              
              {/* Animated accent */}
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group relative text-base font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-2 ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Simple underline effect */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 rounded-full ${
                  activeSection === link.id 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`} />
                

              </button>
            ))}
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
