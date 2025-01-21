
import { Github } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 py-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass px-6 py-3 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="font-medium tracking-tight">Notate</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/marcdhi/notate-extension" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              Install
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 