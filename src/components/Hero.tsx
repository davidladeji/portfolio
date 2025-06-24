
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-50 animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center space-x-4">
            <div>
              <span className="text-2xl">👋</span>
              <span className="font-bold text-gray-400 text-xl">  Hello Stranger, I'm </span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Oladapo David Ladeji</span>
              <br />
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Engineer with a backend focus, a love for learning, and a drive to solve meaningful technical challenges
            </p>
          </div>

          <Button 
            onClick={() => window.open('https://drive.google.com/file/d/1M47SrSAkkIm-pVoy5kkBeve8n77j8dR_/view?usp=sharing', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            VIEW RESUME
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            {/* 3D Character Inspired Illustration */}
            <div className="w-80 h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/491/062/non_2x/programmer-working-concept-for-web-banner-man-work-with-code-and-programming-at-computer-creates-software-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg"
                  alt="3D Character"
                  className="w-72 h-72 md:w-96 md:h-32 object-contain"
                />
              </div>
              
              {/* Floating Tech Icons - Only 2 bouncing for less distraction */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold">JS</span>
              </div>
              {/* JAVA LOGO */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg animate-bounce delay-300">
                <span className="text-cyan-100 font-bold">
                  <img width="36" height="36" src="https://img.icons8.com/dusk/64/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
                </span>
              </div>
              {/* REACT LOGO */}
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-pink-200 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-red-800 font-bold">
                  <img width="36" height="36" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>
                </span>
              </div>
              {/* MYSQL LOGO */}
              <div className="absolute top-1/4 -right-8 w-10 h-10 bg-white-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-blue-400 font-bold">
                  <img width="36" height="36" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-MySQL-programming-and-development-those-icons-lineal-color-those-icons.png" alt="external-MySQL-programming-and-development-those-icons-lineal-color-those-icons"/>
                </span>
              </div>
              {/* FIX PYTHON LOGO */}
              <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-green-300 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-yellow-400 font-bold text-xs">
                  <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <button onClick={scrollToAbout} className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
          <ChevronDown className="h-6 w-6" />
          <span className="text-sm mt-1">Scroll Down</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
