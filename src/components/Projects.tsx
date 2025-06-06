
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Spring Store",
      description: "A full featured RESTful API for an e-commerce platform built with Springboot, Java, and MySQL featuring user registration & authentication, role-based access control, product management, and Stripe payment integration.",
      technologies: ["Java", "Springboot", "MySQL", "Stripe"],
      liveLink: "#",
      githubLink: "https://github.com/davidladeji/spring-api-starter"
    },
    {
      title: "Multi-Room Chat App",
      description: "A real-time web application that supports multiple chatrooms, allowing users to exchange messages within dedicated rooms. Built using Python, Flask, JavaScript, and HTML/CSS.",
      technologies: ["Python", "Flask", "Javascript", "AJAX"],
      liveLink: "#",
      githubLink: "https://github.com/davidladeji/Multi-room-chat-app"
    },
    {
      title: "Pitt Jungle",
      description: "A collaboratively developed web application inspired by blogging, built with Flask, Python, HTML, and CSS. It allows users to discover and share insights about local sights, restaurants, and events in the greater Pittsburgh",
      technologies: ["Python", "Flask", "HTML/CSS"],
      liveLink: "#",
      githubLink: "https://github.com/davidladeji/PittJungle"
    },
    {
      title: "Flask Blog",
      description: "Single-server blogging web application that allows users to share posts with the entire community. Built with Python, Flask, HTML & CSS",
      technologies: ["Python", "Flask", "HTML/CSS", "SQLAlchemy"],
      liveLink: "#",
      githubLink: "https://github.com/davidladeji/Flask-blog"
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
