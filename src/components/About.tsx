
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate software engineer who loves building scalable systems and 
                turning thoughtful ideas into impactful digital experiences.
              </p>
              
              <p>
                I've worked on meaningful engineering challenges, including helping localize 
                over 70% of TurboTax's web pages into Spanish during my time at Intuit—making 
                the product more accessible to millions of Spanish-speaking users in the U.S. 
                My focus lies in backend development, and I enjoy learning new technologies to 
                solve complex, real-world problems.
              </p>
              
              <p>
                When I'm not coding, you can find me playing volleyball or table tennis with 
                friends, or binge-watching great TV shows. I thrive in collaborative teams, and 
                I'm always looking for opportunities to grow, contribute, and connect with others
                in the developer community.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/e9a10b42-5499-4855-8353-cabd3cacbc96.png"
                alt="Oladapo David Ladeji"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-70 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
