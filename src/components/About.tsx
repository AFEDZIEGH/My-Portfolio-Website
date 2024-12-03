import React from 'react';
import { BookOpen, Code, Coffee } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer</h3>
            <p className="text-gray-600">
              Passionate about creating clean, efficient code and building user-friendly applications.
              Always eager to learn new technologies and best practices.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student</h3>
            <p className="text-gray-600">
              Currently pursuing a BSc in Computer Science, focusing on software development,
              algorithms, and artificial intelligence.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <Coffee className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600">
              Love tackling complex problems and finding elegant solutions.
              Experienced in both individual and team-based projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}