
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="font-bold text-lg text-white">OL</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-3">
            {/* Github */}
            <a
              href="https://github.com/davidladeji"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full transition-colors inline-flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <Github className="h-5 w-5" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/david-ladeji"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full hover:text-blue-700 transition-colors inline-flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
