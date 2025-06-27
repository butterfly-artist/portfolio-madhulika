import React from 'react';

export function Experience() {
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
            {/* Experience items will be mapped here */}
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
            {/* Certification items will be mapped here */}
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
              {/* Programming languages skills will be mapped here */}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Frameworks & Tools</h3>
              {/* Frameworks and tools skills will be mapped here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}