import React from 'react';

export default function Certificates() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Certificates</h1>
      <div className="space-y-6">
        {/* Example certificates, replace with your own */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Full Stack Web Development</h2>
            <p className="text-gray-600">Coursera | Issued Jan 2024</p>
          </div>
          <a href="#" className="text-primary-600 hover:underline mt-4 md:mt-0">View Certificate</a>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">UI/UX Design Specialization</h2>
            <p className="text-gray-600">Google | Issued Aug 2023</p>
          </div>
          <a href="#" className="text-primary-600 hover:underline mt-4 md:mt-0">View Certificate</a>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">React Advanced Concepts</h2>
            <p className="text-gray-600">Udemy | Issued May 2022</p>
          </div>
          <a href="#" className="text-primary-600 hover:underline mt-4 md:mt-0">View Certificate</a>
        </div>
      </div>
    </div>
  );
}
