import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Globe, Palette } from 'lucide-react';

export function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-primary-600">Thota Madhulika</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Computer Science graduate, aspiring full-stack developer, and passionate solo traveler with an artistic soul.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                I craft digital experiences with clean code and creative flair. 
                Currently seeking opportunities to make an impact in tech 
                <span className="text-warm-600"> (and maybe visit a few more countries along the way)</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-lg"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 animate-float">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Full-Stack Dev</h3>
                    <p className="text-sm text-gray-600">React, Node.js, Python</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-accent-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Solo Traveler</h3>
                    <p className="text-sm text-gray-600">15+ countries explored</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-warm-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Palette className="h-8 w-8 text-warm-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Creative Soul</h3>
                    <p className="text-sm text-gray-600">Design & Art</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Goal-Oriented</h3>
                    <p className="text-sm text-gray-600">Always learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of projects that showcase my technical skills and creative problem-solving approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project {i}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of what this project does and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-warm-100 text-warm-700 text-sm rounded-full">Tailwind</span>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I'm actively seeking opportunities to contribute to innovative projects and teams. 
            Whether you're looking for a developer, collaborator, or just want to chat about tech and travel, I'd love to connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-lg"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}