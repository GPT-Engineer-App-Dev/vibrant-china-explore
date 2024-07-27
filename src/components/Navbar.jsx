import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className={`text-2xl font-bold transition-colors duration-300 ${
          isScrolled ? 'text-red-600' : 'text-white'
        }`}>China Explorer</NavLink>
        <div className="space-x-4">
          <NavLink to="/" className={`transition-colors duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-100'
          }`}>Home</NavLink>
          <NavLink to="/history" className={`transition-colors duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-100'
          }`}>History</NavLink>
          <NavLink to="/culture" className={`transition-colors duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-100'
          }`}>Culture</NavLink>
          <Button variant={isScrolled ? "outline" : "secondary"} className={`transition-colors duration-300 ${
            isScrolled 
              ? 'text-red-600 border-red-600 hover:bg-red-600 hover:text-white' 
              : 'text-red-600 bg-white hover:bg-red-100'
          }`}>
            Plan Your Trip
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
