import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 md:justify-start justify-center">
              <span className="text-xl font-bold">SA Blogs</span>
            </div>
            <p className="text-gray-400">
              Inspiring stories and insights for the modern world.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#style" className="hover:text-white transition-colors">
                  Style
                </a>
              </li>
              <li>
                <a
                  href="#people"
                  className="hover:text-white transition-colors"
                >
                  People
                </a>
              </li>
              <li>
                <a
                  href="#design"
                  className="hover:text-white transition-colors"
                >
                  Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Travel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Photography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SA Blogs Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
