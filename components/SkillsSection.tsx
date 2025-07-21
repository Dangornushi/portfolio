'use client';

import { useState } from 'react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: 'ri-code-s-slash-line' },
    { id: 'backend', label: 'Backend', icon: 'ri-server-line' },
    { id: 'languages', label: 'Languages', icon: 'ri-save-3-line' },
    { id: 'tools', label: 'Tools', icon: 'ri-tools-line' }
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 95, color: 'bg-blue-500' },
      { name: 'Shadcn/ui', level: 90, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
      { name: 'HTML5/CSS3', level: 80, color: 'bg-green-500' },
    ],
    backend: [
      { name: 'Node.js', level: 85, color: 'bg-green-600' },
      { name: 'Python', level: 80, color: 'bg-blue-500' },
      { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
      { name: 'MongoDB', level: 80, color: 'bg-green-500' },
    ],
    languages: [
      { name: 'Rust', level: 95, color: 'bg-orange-500' },
      { name: 'C/C++', level: 80, color: 'bg-blue-500' },
      { name: 'Python', level: 90, color: 'bg-yellow-500' },
      { name: 'Typescript', level: 90, color: 'bg-blue-400' },
      { name: 'PHP', level: 85, color: 'bg-red-500' }
    ],
    tools: [
      { name: 'Git', level: 90, color: 'bg-orange-500' },
      { name: 'Docker', level: 75, color: 'bg-blue-600' },
      { name: 'RooCode', level: 95, color: 'bg-yellow-600' },
      { name: 'Gemini CLI', level: 80, color: 'bg-blue-500' },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 text-left cursor-pointer ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={category.icon}></i>
                  </div>
                  <span className="font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {categories.find(cat => cat.id === activeCategory)?.label} Skills
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-trophy-line text-blue-600 dark:text-blue-400 text-2xl"></i>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">50+ Projects</h4>
            <p className="text-gray-600 dark:text-gray-300">Successfully completed projects across various domains</p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-team-line text-teal-600 dark:text-teal-400 text-2xl"></i>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Happy Clients</h4>
            <p className="text-gray-600 dark:text-gray-300">Building long-term relationships with satisfied clients</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-lightbulb-line text-purple-600 dark:text-purple-400 text-2xl"></i>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h4>
            <p className="text-gray-600 dark:text-gray-300">Always exploring new technologies and creative solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}