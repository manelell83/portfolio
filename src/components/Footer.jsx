import { Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Name section */}
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-xl font-bold">Manal Chemlali</span>
          </div>
          {/* Social links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/manelell83"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manal-c-b1a6a8333"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/manalchemlali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Copyright and location info */}
        <div className="mt-8 text-center text-gray-400">
          <p>Based in Morocco | INPT Student</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Manal Chemlali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 