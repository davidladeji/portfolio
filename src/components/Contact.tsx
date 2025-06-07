import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-20 w-30 h-30 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/3 left-12 w-22 h-22 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-18 h-18 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-3/4 right-12 w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full opacity-22 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/5 w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-18 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Email</p>
                    <a 
                      href="mailto:dladeji2@gmail.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      dladeji2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/david-ladeji" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      linkedin.com/in/david-ladeji
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  <a href="mailto:dladeji2@gmail.com">
                    Send me a message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
