import React from 'react';
import { Calendar, Award, ExternalLink, Download } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Startup Inc.",
      duration: "Jun 2024 - Aug 2024",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components and improved user experience.",
      achievements: [
        "Built 5+ reusable React components used across multiple projects",
        "Improved website performance by 30% through code optimization",
        "Implemented responsive design for mobile and tablet devices"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"]
    },
    {
      title: "Full-Stack Development Bootcamp",
      company: "CodePath Academy",
      duration: "Jan 2024 - May 2024",
      description: "Intensive full-stack development program covering modern web technologies, database design, and software engineering best practices.",
      achievements: [
        "Completed 40+ hands-on projects and coding challenges",
        "Built and deployed 3 full-stack applications",
        "Collaborated on team projects using Agile methodology"
      ],
      technologies: ["JavaScript", "Python", "Node.js", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Computer Science Student",
      company: "ABC Technical Institute",
      duration: "2022 - 2024",
      description: "Diploma in Computer Science with focus on software development, data structures, algorithms, and system design.",
      achievements: [
        "Graduated with 85% aggregate score",
        "Led university coding club with 50+ members",
        "Organized 3 technical workshops on web development"
      ],
      technologies: ["Java", "Python", "C++", "MySQL", "HTML/CSS"]
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Oct 2024",
      credential: "ABC123XYZ",
      link: "https://aws.amazon.com/certification/"
    },
    {
      title: "React Developer Certificate",
      issuer: "Meta",
      date: "Sep 2024",
      credential: "DEF456ABC",
      link: "https://developers.facebook.com/certifications/"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Aug 2024",
      credential: "GHI789DEF",
      link: "https://freecodecamp.org"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Jul 2024",
      credential: "JKL012GHI",
      link: "https://freecodecamp.org"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-50 to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience & Certifications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              My professional journey, educational background, and continuous learning achievements 
              in the world of technology and software development.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600">
              My journey through the tech industry
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-32 bg-gray-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  
                  <div className="ml-8 flex-grow">
                    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                          <p className="text-primary-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.duration}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-accent-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent-600" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{cert.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-primary-600 font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-600 mb-4">Credential ID: {cert.credential}</p>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Verify Certificate
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skills Summary
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive overview of my technical capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
              {[
                { skill: "JavaScript", level: 90 },
                { skill: "TypeScript", level: 85 },
                { skill: "Python", level: 80 },
                { skill: "Java", level: 75 }
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{item.skill}</span>
                    <span className="text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Frameworks & Tools</h3>
              {[
                { skill: "React", level: 90 },
                { skill: "Node.js", level: 85 },
                { skill: "Express", level: 80 },
                { skill: "MongoDB", level: 75 }
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{item.skill}</span>
                    <span className="text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-accent-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}