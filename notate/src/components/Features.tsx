import { motion } from 'framer-motion';
import { BookMarked, FileText } from 'lucide-react';

const features = [
  {
    icon: <BookMarked className="w-6 h-6 text-primary" />,
    title: 'Save on GitHub',
    description: 'Securely store and version control all your notes on GitHub.'
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'Take Notes Anywhere',
    description: 'Capture and organize notes from any webpage while browsing.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Everything you need to manage your browser notes effectively</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass p-8 rounded-xl h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;