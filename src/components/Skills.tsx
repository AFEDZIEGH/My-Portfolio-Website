import React from 'react';

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  frameworks: ['React', 'Node.js', 'Express', 'Django', 'Flask'],
  tools: ['Git', 'Docker', 'VS Code', 'PostgreSQL', 'MongoDB'],
  concepts: ['Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'System Design']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory title="Frameworks" items={skills.frameworks} />
          <SkillCategory title="Tools" items={skills.tools} />
          <SkillCategory title="Concepts" items={skills.concepts} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center text-gray-700 bg-gray-50 px-3 py-2 rounded"
          >
            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}