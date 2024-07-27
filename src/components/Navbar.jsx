import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-red-600">China Explorer</NavLink>
        <div className="space-x-4">
          <NavLink to="/" className="text-gray-700 hover:text-red-600">Home</NavLink>
          <NavLink to="/history" className="text-gray-700 hover:text-red-600">History</NavLink>
          <NavLink to="/culture" className="text-gray-700 hover:text-red-600">Culture</NavLink>
          <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
            Plan Your Trip
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
