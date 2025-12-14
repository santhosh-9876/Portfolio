import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Blog
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12"
        >
          <div className="text-6xl mb-6">📝</div>
          <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm currently working on my blog where I'll share insights about web development, best
            practices, and tutorials. Stay tuned!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Follow on Twitter
            </a>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Read on Dev.to
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
