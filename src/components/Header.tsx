
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Atom, User, Home } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Atom className="h-6 w-6 text-lava-600" />
            <span className="font-bold text-xl lava-gradient-text">Physics Test</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`flex items-center gap-1 transition-all duration-300 hover:text-lava-700
                ${location.pathname === '/' ? 'text-lava-600 font-medium' : 'text-ash-600'}`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/quiz" 
              className={`flex items-center gap-1 transition-all duration-300 hover:text-lava-700
                ${location.pathname === '/quiz' ? 'text-lava-600 font-medium' : 'text-ash-600'}`}
            >
              <Atom className="h-4 w-4" />
              <span>Quiz</span>
            </Link>
            
            <Link 
              to="/about" 
              className={`flex items-center gap-1 transition-all duration-300 hover:text-lava-700
                ${location.pathname === '/about' ? 'text-lava-600 font-medium' : 'text-ash-600'}`}
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
