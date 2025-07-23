'use client';

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Let's Work Together
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether you need a just want to discuss an idea, 
              I'd love to hear from you.
            </p>

            <div className="flex justify-center space-x-12">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-mail-line text-blue-600 dark:text-blue-400"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">dangomushi150@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 dark:bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-phone-line text-teal-600 dark:text-teal-400"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-map-pin-line text-purple-600 dark:text-purple-400"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Saitama, Japan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-center">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-github-line"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
