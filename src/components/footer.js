import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="text-center">
        <h2 className="text-white text-lg font-semibold">Rahul Bhatia</h2>
        <p className="text-sm mt-1">
          Passionate AI/ML Developer | Web Development Enthusiast
        </p>
        <p className="text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>

        <div className="flex justify-center mt-4 space-x-14 py-10">
          {/* GitHub */}
          
          <a
            href="https://github.com/rahulbhatia775"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-github text-xl"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rahul-bhatia-9782802b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/rahulbhatia775"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-x-twitter text-xl"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:rahulbhatia775@gmail.com"
            className="hover:text-white"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
