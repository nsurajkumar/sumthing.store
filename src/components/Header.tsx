
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-orange-500">Sum</span>thing
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
              Pre-Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 w-full">
                Pre-Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
