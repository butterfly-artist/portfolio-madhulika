import React from 'react';
import { ExternalLink, Github, Code, Palette, Globe } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "NexusFlow Management",
      description: "A full-stack estate management solution with React frontend, Node.js backend, and supabase database. Features include user authentication, input integration, and admin dashboard. With integrated maps and detail view for properties as well as brief info of the property.",
      image: "https://static.vecteezy.com/system/resources/previews/010/136/965/non_2x/real-estate-agents-or-brokers-use-smartphones-login-online-to-compare-internet-home-buying-and-selling-information-business-investment-through-residential-website-real-estate-choose-house-to-buy-free-photo.jpg",
      technologies: ["React", "Node.js", "Supabase", "tailwind", "JWT"],
      github: "https://github.com/butterfly-artist/Nexus-flow-hackthonProject.git",
      live: "https://nexus-flow-hackthon-project.vercel.app/",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "NEO Tracker",
      description: "NEO-Near Earth Object made with NASA API, featured in beautiful data visualizations and a bit of agent magic. Virtual presentation of objects around the earth. Learned how to use NASA API to fetch data and display it in a user-friendly way.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Chart.js", "HTML5", "NASA API", "CSS3", "JavaScript"],
      github: "https://github.com/butterfly-artist/NEO-tracker.git",
      category: "NASA API"
    },
    {
      id: 3,
      title: "Smart Safety Helmet for Coal Miners",
      description: "A smart safety helmet designed for coal miners, featuring real-time monitoring, communication tools, and safety alerts. IoT Based Project with 7 integrated sensors and a web application for data visualization.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Flask", "MongoDB", "IoT", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/butterfly-artist/iotproject-smart-safety-helmet.git",
      category: "IoT"
    },
    {
      id: 4,
      title: "Python code analysis tool",
      description: "A tool for analyzing Python code, providing insights into code quality, complexity, and potential improvements. Explaining code structure logic and types of analysis.",
      image: "https://ozgurozkok.com/wp-content/uploads/2023/01/python6-e1673648673211.jpg",
      technologies: ["Python", "AST", "Flask", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/butterfly-artist/python-code-analyzer-basic-.git",
      live: "https://python-basic-code-analysis.netlify.app/",
      category: "Full-Stack"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This very website! A modern, responsive portfolio built with React and TypeScript, featuring smooth animations and thoughtful UX design.",
      image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      github: "https://github.com/butterfly-artist/portfolio-madhulika.git",
      live: "https://portfolio-thotamadhulika.netlify.app/",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Quiz web application",
      description: "Full-stack quiz application with real-time question updates, without any API integration, user friendly interface, and a responsive design.",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "NLTK", "Node.js", "HTML5", "MongoDB", "CSS3", "Express"],
      github: "https://github.com/butterfly-artist/Myquiz-web-application.git",
      category: "Backend"
    },
    {
      id: 7,
      title: "Coffee shop Website",
      description: "A responsive coffee shop website with CMS functionality, photo galleries, and interactive maps. Built with modern web technologies and optimized for performance.",
      image: "data:image/webp;base64,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",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Mapbox"],
      github: "https://github.com/butterfly-artist/Basic-coffee-shop-website-using-HTML-CSS.git",
      live: "https://butterfly-artist.github.io/Basic-coffee-shop-website-using-HTML-CSS/",
      category: "Frontend"
    },
    {
      id: 8,
      title: "(Coming Up Soon)",
      description: " Stay tuned!",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "AI", "TypeScript"],
      github: "#",
      live: "#",
      category: "AI"
    },
    {
      id: 9,
      title: "Personal Finance Tracker (Coming Up Soon)",
      description: "A web app to track expenses, visualize spending, and set savings goals. Launching soon with modern UI and analytics!",
      image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
      category: "Finance"
    }
  ];

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

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const isComingSoon = project.title?.toLowerCase().includes('coming up soon');
              return (
                <div
                  key={project.id}
                  className={
                    `bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative` +
                    (isComingSoon ? ' pointer-events-none' : '')
                  }
                >
                  {isComingSoon && (
                    <div className="absolute inset-0 z-10 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-400">Coming Soon</span>
                    </div>
                  )}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={
                        'w-full h-full object-cover transition-transform duration-300' +
                        (isComingSoon ? ' blur-sm scale-105' : ' hover:scale-105')
                      }
                    />
                  </div>
                  <div className={isComingSoon ? 'p-6 opacity-60 blur-[1px] select-none' : 'p-6'}>
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
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            <span className="text-sm">Live</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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