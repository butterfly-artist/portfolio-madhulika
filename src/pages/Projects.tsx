import React from 'react';
import { ExternalLink, Github, Code, Palette, Globe } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Travel Blog Website",
      description: "A responsive travel blog with CMS functionality, photo galleries, and interactive maps. Built with modern web technologies and optimized for performance.",
      image: "https://images.pexels.com/photos/1591047/pexels-photo-1591047.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Sanity CMS"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for task management with user authentication, real-time updates, and comprehensive documentation. Includes automated testing and CI/CD pipeline.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "pytest"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Backend"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with geolocation, forecasts, and beautiful data visualizations. Features dark/light themes and responsive design.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This very website! A modern, responsive portfolio built with React and TypeScript, featuring smooth animations and thoughtful UX design.",
      image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Real-time Chat App",
      description: "Full-stack chat application with real-time messaging, file sharing, and user presence indicators. Supports group chats and emoji reactions.",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Full-Stack"
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects that showcase my journey in full-stack development, 
              from creative experiments to production-ready applications.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.category === 'Full-Stack' ? 'bg-primary-100 text-primary-700' :
                      project.category === 'Frontend' ? 'bg-accent-100 text-accent-700' :
                      'bg-warm-100 text-warm-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-xl text-gray-600">
              My toolkit for bringing ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2">
                {["React", "TypeScript", "Vue.js", "Tailwind CSS", "SASS", "JavaScript"].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-accent-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-2">
                {["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-warm-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Palette className="h-6 w-6 text-warm-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Design</h3>
              <div className="space-y-2">
                {["Git", "Docker", "Figma", "Adobe Creative Suite", "AWS", "Vercel"].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-warm-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}