'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'tui', label: 'TUI' },
    { id: 'lowlayer', label: 'Low Layer' },
    { id: 'web', label: 'Web' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Rsh',
      description: 'A shell built with Rust, implements basic shell mechanisms and interprets shell scripts. By default, it features directory listing, and color themes and detailed settings can be changed via external files.',
      category: 'tui',
      image: 'https://github.com/user-attachments/assets/eb6b8b99-3520-4779-9dcc-71bae57ee760',
      technologies: ['Rust', 'Parser', 'Shell Script'],
      github: 'https://github.com/Dangornushi/rsh',
    },
    {
      id: 2,
      title: 'Vim clone',
      description: 'A Vim-inspired text editor built with Rust, featuring modal editing and extensibility. It also supports code snippets (variables, functions, numbers, symbols, reserved words, etc.) and can be configured through its own settings file.',
      category: 'tui',
      image: 'https://github.com/user-attachments/assets/4dc564bd-1f93-4168-9ce1-9566834de66d',
      technologies: ['Rust', 'Vim', 'Text Editor'],
      github: 'https://github.com/Dangornushi/vim-clone',
    },
    {
      id: 3,
      title: 'Contui',
      description: 'An AI agent developed for Google Gemini. Equipped with features such as file creation and browsing. Of course, written in Rust.',
      category: 'tui',
      image: 'https://github.com/user-attachments/assets/441d3463-7685-40fb-ba09-2ee7b332dfc4',
      technologies: ['Rust', 'AI', 'Google Gemini'],
      github: 'https://github.com/Dangornushi/contui',
    },

    {
      id: 4,
      title: 'Portfolio site',
      description: 'This portfolio site, showcasing my work and skills, is built with Next.js and TypeScript. It features a modern design, responsive layout, and smooth animations.',
      category: 'web',
      image: 'https://github.com/user-attachments/assets/3b20a54f-c75a-4c18-b3aa-a37b0adb6706',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Dangornushi/portfolio',
      demo: 'https://dangornushi.github.io/portfolio',
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="aspect-video overflow-hidden cursor-pointer"
                onClick={() => window.open(project.demo ? project.demo : project.github, '_blank')}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div 
                className="p-6 cursor-pointer"
                onClick={() => window.open(project.github, '_blank')}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <div
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-github-line"></i>
                    </div>
                    <span>Code</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
