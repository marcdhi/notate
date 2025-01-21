import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] pt-32 pb-16 px-6 gradient-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium bg-gray-100 px-4 py-2 rounded-full inline-block mb-6">
            Your Personal Note-Taking Agent
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-balance leading-tight">
            Your notes, your agent, your privacy
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto text-balance">
            Take notes that live on your machine first, sync when you want. Full control over your data with local-first architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="https://github.com/marcdhi/notate-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              View on GitHub
              <ArrowRight size={16} />
            </a>
            <a 
              href="#learn-more"
              className="w-full sm:w-auto text-gray-600 hover:text-gray-900 transition-colors px-6 py-3"
            >
              Learn more
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-4 sm:p-6">
            <img
              src="/screenshot.png"
              alt="Notate Extension Interface"
              className="rounded-xl w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;