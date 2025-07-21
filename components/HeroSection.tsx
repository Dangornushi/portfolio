'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Low layer Developer', 'Rustasian', 'Creative Problem Solver'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20digital%20art%20landscape%20with%20flowing%20organic%20shapes%20in%20deep%20purple%20and%20teal%20colors%2C%20minimalist%20modern%20aesthetic%2C%20kanagawa%20wave%20inspired%20flowing%20patterns%2C%20ethereal%20atmosphere%2C%20subtle%20gradients%2C%20contemporary%20digital%20art%20style%2C%20serene%20and%20meditative%20mood%2C%20flowing%20lines%20and%20curves%2C%20deep%20ocean%20colors%20with%20mountain%20silhouettes&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Yusei Yomota</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light">
              I'm a <span className="text-teal-400 font-medium">{currentText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with modern technologies and innovative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              View My Work
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-arrow-down-line text-white text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
}