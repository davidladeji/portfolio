
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
                A passionate developer that works to create amazing digital experiences 
                and bring innovative ideas to life.
              </p>
              
              <p>
                I have explored software development and web development throughout my career. 
                I enjoy building scalable applications and learning new technologies to solve 
                complex problems.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new frameworks, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <div className="text-8xl opacity-50">👨‍💻</div>
              </div>
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
