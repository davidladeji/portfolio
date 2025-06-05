
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive dashboard displaying weather data with charts, maps, and predictive analytics using machine learning algorithms.",
      technologies: ["Python", "Flask", "D3.js", "TensorFlow"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media App",
      description: "A modern social media platform with user profiles, real-time messaging, photo sharing, and social interactions.",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Redis"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing different technologies 
            and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end pt-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
