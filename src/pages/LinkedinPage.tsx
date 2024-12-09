import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon } from 'lucide-react';
import { highlights } from '../data/content';

const LinkedInPostsPage = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Posts
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts and insights about DevOps, cloud infrastructure, and technology trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.linkedInPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <LinkIcon className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                  {post.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInPostsPage;