import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const BookMeeting = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Schedule a Meeting
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your project or potential collaboration opportunities.
          </p>
        </div>
          <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect for genuine insights!</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Video className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1:1</h3>
              <p className="text-gray-600 dark:text-gray-400">Personalized guidance, shared experience!</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Career Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">Shape your dream career!</p>
            </div>
          </div>
          
          <a
            href="https://topmate.io/pratikkumar_mohite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;