
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
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
