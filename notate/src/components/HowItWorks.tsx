
import { motion } from 'framer-motion';
import { GitFork, Terminal, Key, Pin, BookOpen, Github, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <GitFork className="w-6 h-6 text-gray-900" />,
    title: "Clone Repository",
    description: "Start by cloning the Notate extension repository from GitHub to your local machine."
  },
  {
    icon: <Terminal className="w-6 h-6 text-gray-900" />,
    title: "Build Extension",
    description: "Install dependencies and build the extension using npm install && npm run build."
  },
  {
    icon: <Key className="w-6 h-6 text-gray-900" />,
    title: "Configure API Keys",
    description: "Add your API keys in the extension options page for full functionality."
  },
  {
    icon: <Pin className="w-6 h-6 text-gray-900" />,
    title: "Pin Extension",
    description: "Load the unpacked extension in Chrome and pin it to your toolbar for easy access."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-gray-900" />,
    title: "Take Notes",
    description: "Browse any website and click the extension to start taking smart notes."
  },
  {
    icon: <Github className="w-6 h-6 text-gray-900" />,
    title: "Sync to GitHub",
    description: "Save and sync your notes to your personal GitHub repository."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">How it Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Get started with Notate in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass p-6 rounded-2xl h-full">
                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Coming Soon</span>
            </div>
            <p className="text-gray-600">Access and manage all your notes directly in the extension</p>
            <a
              href="https://github.com/marcdhi/notate-extension#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              View Documentation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;