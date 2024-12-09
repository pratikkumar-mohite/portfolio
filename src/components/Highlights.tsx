import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Link as LinkIcon, Award, ArrowRight } from 'lucide-react';
import { highlights } from '../data/content';

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Recent Highlights
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing recent achievements in cloud architecture, technical writing, and industry insights through projects and publications.
          </p>
          </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Recent Projects */}
          <div className="bg-indigo-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Award className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Projects</h3>
              </div>
            </div>
            <div className="space-y-4">
              {highlights.projects.slice(0, 2).map((project, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline block"
                  >
                    {project.title}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
                </div>
              ))}
              {/* <Link
                to="/projects"
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-4"
              >
                <span>View More</span>
                <ArrowRight size={16} />
              </Link> */}
            </div>
          </div>

          {/* Recent Articles */}
          <div className="bg-indigo-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <FileText className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Blogs</h3>
            </div>
            <div className="space-y-4">
              {highlights.articles.slice(0, 2).map((article, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline block"
                  >
                    {article.title}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{article.date}</p>
                </div>
              ))}
              {/* <Link
                to="/articles"
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-4"
              >
                <span>View More</span>
                <ArrowRight size={16} />
              </Link> */}
            </div>
          </div>

          {/* LinkedIn Posts */}
          <div className="bg-indigo-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <LinkIcon className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Posts</h3>
            </div>
            <div className="space-y-4">
              {highlights.linkedInPosts.slice(0, 2).map((post, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline block"
                  >
                    {post.title}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
                </div>
              ))}
              {/* <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-4"
              >
                <span>View More</span>
                <ArrowRight size={16} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;