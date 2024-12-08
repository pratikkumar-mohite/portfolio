import React from 'react';
import { FileText, Link as LinkIcon, Award } from 'lucide-react';

const Highlights = () => {
  const highlights = {
    projects: [
      {
        title: 'Kubernetes Auto-scaling Solution',
        date: 'March 2024',
        description: 'Implemented an intelligent auto-scaling solution for microservices'
      },
      {
        title: 'Zero-Trust Security Framework',
        date: 'February 2024',
        description: 'Designed and implemented company-wide zero-trust architecture'
      }
    ],
    articles: [
      {
        title: 'Modern DevOps Practices in 2024',
        date: 'March 2024',
        link: 'https://example.com/article1'
      },
      {
        title: 'Securing Your Cloud Infrastructure',
        date: 'February 2024',
        link: 'https://example.com/article2'
      }
    ],
    linkedInPosts: [
      {
        title: 'The Future of Cloud Native Applications',
        date: 'March 2024',
        link: 'https://linkedin.com/post1'
      },
      {
        title: 'DevOps Culture: Beyond the Tools',
        date: 'February 2024',
        link: 'https://linkedin.com/post2'
      }
    ]
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Recent Highlights</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Recent Projects */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Award className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Projects</h3>
            </div>
            <div className="space-y-4">
              {highlights.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Articles */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <FileText className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Articles</h3>
            </div>
            <div className="space-y-4">
              {highlights.articles.map((article, index) => (
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
            </div>
          </div>

          {/* LinkedIn Posts */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <LinkIcon className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">LinkedIn Posts</h3>
            </div>
            <div className="space-y-4">
              {highlights.linkedInPosts.map((post, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;