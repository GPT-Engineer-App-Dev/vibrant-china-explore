import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">China Explorer</h3>
            <p className="text-gray-400">Discover the wonders of China with us.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
              <li><NavLink to="/history" className="text-gray-400 hover:text-white">History</NavLink></li>
              <li><NavLink to="/culture" className="text-gray-400 hover:text-white">Culture</NavLink></li>
              <li><NavLink to="/plan" className="text-gray-400 hover:text-white">Plan Your Trip</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: info@chinaexplorer.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          © 2024 China Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
