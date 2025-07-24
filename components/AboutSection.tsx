'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: 'ri-user-line' },
    { id: 'experience', label: 'Experience', icon: 'ri-briefcase-line' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex space-x-1 mb-8 bg-gray-100 dark:bg-gray-800 rounded-full p-1 max-w-max mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={tab.icon}></i>
                    </div>
                    <span>{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              {activeTab === 'story' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Creating Digital Magic
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    With over 5 years of experience in development, I specialize in creating beautiful, 
                    functional, and user-centered digital experiences. My journey began with a curiosity about 
                    how things work, which led me to explore the intersection of technology and design.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I believe that great design is not just about aesthetics—it's about solving problems and 
                    creating meaningful connections between people and technology. Every project I work on is 
                    an opportunity to make someone's life a little bit better.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-code-line"></i>
                      </div>
                      <span>Clean Code</span>
                    </div>
                    <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-palette-line"></i>
                      </div>
                      <span>Creative Design</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-rocket-line"></i>
                      </div>
                      <span>Innovation</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="animate-fade-in space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rust and Web Developer</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">High school student - TechC • 2022 - Present</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Learned more about language processing and created a number of compilers,
                      And the Rust language and created many TUI tools.
                      Also studied self-made OS and developed OS with Rust.
                      Was involved in the development of in-house tools at TENTO Corporation, where I actively committed himself to the project.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-teal-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Low layer Developer</h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">Junior high school - High school • 2021 - 2022</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Started writing programs in Python in earnest. Ex. Text editor, Web Scraper, Chat bot, etc.
                      And also started studying machine learning and llm.
                      Developed responsive websites and web applications using HTML, CSS, JavaScript, and Typescript.
                      Started learning about low-level programming and operating systems, including C/C++.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Junior Developer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Junior high school • 2019 - 2021</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Bought a raspberry pi and started programming, modifying a Tetris program written in Python and creating a bullet shooter.
                      Also created static websites using HTML and CSS. Learned the basic skills of renting a server and deploying it.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://github.com/user-attachments/assets/bf887d92-a68f-4181-830a-32a20e7eaefe"
                  
                  alt="Yusei Yomota"
                  className="w-full h-full object-cover object-top rounded-full"
                  width={500} height={500}
                />
                </div>
                {/* 任意の画像を追加 
                
                <div className="mt-4">
                  <Image
                    src="https://github.com/user-attachments/assets/bf887d92-a68f-4181-830a-32a20e7eaefe"
                    alt="だんごむしアイコン"
                    width={120}
                    height={120}
                  />
                </div>
                */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}