import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Education & Achievements
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex items-start">
              <GraduationCap className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">BSc Computer Science</h3>
                <p className="text-gray-600">University of Technology</p>
                <p className="text-gray-500">2021 - Present</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Coursework:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="text-gray-600">• Data Structures</li>
                    <li className="text-gray-600">• Algorithms</li>
                    <li className="text-gray-600">• Operating Systems</li>
                    <li className="text-gray-600">• Database Systems</li>
                    <li className="text-gray-600">• Web Development</li>
                    <li className="text-gray-600">• Machine Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <Award className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Certifications & Awards</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <h4 className="font-semibold">AWS Certified Cloud Practitioner</h4>
                    <p className="text-gray-600">Amazon Web Services</p>
                    <p className="text-gray-500">2023</p>
                  </li>
                  <li>
                    <h4 className="font-semibold">First Place - University Hackathon</h4>
                    <p className="text-gray-600">Built an AI-powered sustainability app</p>
                    <p className="text-gray-500">2022</p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Dean's List</h4>
                    <p className="text-gray-600">Academic Excellence</p>
                    <p className="text-gray-500">2021 - 2023</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}