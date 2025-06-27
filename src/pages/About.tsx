import React from 'react';
import { Code2, Globe, Heart, Coffee, MapPin, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A peek into my journey from Computer Science student to aspiring full-stack developer, 
              with detours through art galleries and remote destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 text-warm-500 mr-2" />
                My Story
              </h2>
              <p className="text-gray-700 mb-6">
                Hey there! I'm Thota Madhulika, and I believe the best code is written by people who understand 
                both logic and creativity. With a diploma in Computer Science, I've spent the last few years 
                diving deep into the world of full-stack development, where every problem is a puzzle waiting 
                to be solved.
              </p>
              <p className="text-gray-700 mb-6">
                But here's the thing - I'm not your typical developer. When I'm not crafting elegant solutions 
                in React or debugging backend APIs, you'll find me planning my next solo adventure or sketching 
                ideas that bridge the gap between technology and art. 
                <span className="text-primary-600 font-medium"> 
                  Because the best innovations happen when you step outside your comfort zone.
                </span>
              </p>
              <p className="text-gray-700">
                Currently, I'm on the hunt for opportunities where I can contribute to meaningful projects, 
                learn from amazing teams, and maybe share a few travel stories along the way. 
                <span className="text-warm-600 font-medium">
                  (Did I mention I have some pretty good stories?)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            What I Bring to the Table
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Code2 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Frontend: React, TypeScript, Tailwind CSS</li>
                <li>• Backend: Node.js, Python, Express</li>
                <li>• Database: MongoDB, PostgreSQL</li>
                <li>• Tools: Git, Docker, VS Code</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel & Culture</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Solo traveled to 50+ places</li>
                <li>• Cultural adaptability & global perspective</li>
                <li>• Photography & storytelling</li>
                <li>• Problem-solving in unfamiliar environments</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-warm-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-warm-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Creative Side</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• UI/UX design thinking</li>
                <li>• Visual arts & sketching</li>
                <li>• Creative problem-solving</li>
                <li>• Bridging tech and aesthetics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Fun Facts About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-lg font-semibold">Coffee Enthusiast</h3>
              </div>
              <p className="text-gray-700">
                I love to start my day with a good cup of coffee. 
                It fuels my coding sessions and inspires my creativity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-warm-600 mr-3" />
                <h3 className="text-lg font-semibold">Remote Work Pro</h3>
              </div>
              <p className="text-gray-700">
                I've coded from dusk till dawn, embracing the beauty of different time zones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-warm-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎨</span>
                <h3 className="text-lg font-semibold">Artistic Coder</h3>
              </div>
              <p className="text-gray-700">
                I believe code is art. Every function should be elegant, 
                every interface should tell a story.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🚀</span>
                <h3 className="text-lg font-semibold">Future Goals</h3>
              </div>
              <p className="text-gray-700">
                Working on my next big project: always keep pushing boundaries and exploring. Aiming for MNC collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}