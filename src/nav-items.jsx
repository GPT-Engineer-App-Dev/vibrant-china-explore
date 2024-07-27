import { Landmark, Book, Plane } from "lucide-react";
import Index from "./pages/Index";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Landmark className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "History",
    to: "/history",
    icon: <Book className="h-4 w-4" />,
    page: <div>History Page</div>, // Placeholder
  },
  {
    title: "Culture",
    to: "/culture",
    icon: <Book className="h-4 w-4" />, // Changed from PaintBrush to Book
    page: <div>Culture Page</div>, // Placeholder
  },
  {
    title: "Plan Your Trip",
    to: "/plan",
    icon: <Plane className="h-4 w-4" />,
    page: <div>Trip Planning Page</div>, // Placeholder
  },
];
