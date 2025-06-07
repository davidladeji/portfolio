
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer I & II",
      company: "Intuit",
      location: "Mountain View, CA",
      duration: "Aug 2022 - Aug 2024",
      highlights: [
        "Successfully delivered over 75% of Spanish-translated web pages for a major TurboTax localization project, leveraging Java, JavaScript, and Git.",
        "Utilized Java's JUnit for automated testing and performed manual validation to ensure language accuracy, identify bugs, and enhance localization quality.",
        "Developed a Redis cache to store and deliver dynamic translations at runtime using Springboot framework.",
        "Took on extra localization work to free up 25% of my team to focus on other priority projects.",
        "Engaged in Agile/Scrum methodologies through daily stand-ups, sprint planning, and retrospectives. This greatly optimized the workflow to deliver sprint work on schedule."
      ]
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Intuit",
      location: "Mountain View, CA",
      duration: "May 2021 - Aug 2021",
      highlights: [
        "Constructed and implemented a user interface to upload coupon data for database storage using React and SQL.",
        "Designed RESTful API endpoints with the SpringBoot framework to support client-server communication when uploading files to the server.",
        "Leveraged Java's JUnit, Jest & Cypress to create tests to ensure functionality and quality of the built feature."
      ]
    },
    {
      title: "Computer Science TA & Tutor",
      company: "University of Pittsburgh",
      location: "Pittsburgh, PA",
      duration: "Jan 2021 - May 2022",
      highlights: [
        "Led weekly recitation sessions to guide students through assigned projects and provide detailed walkthroughs.",
        "Offered one-on-one meetings to clarify challenging course concepts.",
        "Supported students with code development and debugging across multiple classes."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in software engineering and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {experience.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
