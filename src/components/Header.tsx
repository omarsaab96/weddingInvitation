import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="h-6 w-6 text-primary-500" fill="#a6828d" />
          </motion.div>
          <h1 className="text-2xl font-serif text-primary-800 font-semibold">Forever Wed</h1>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" active={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/templates" active={location.pathname === '/templates'}>
            Templates
          </NavLink>
          <NavLink to="/how-it-works" active={location.pathname === '/how-it-works'}>
            How It Works
          </NavLink>
        </nav>
        
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/create" className="btn-primary text-sm">
              Create Invitation
            </Link>
          </motion.div>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`relative py-1 font-medium transition-colors ${
        active ? 'text-primary-700' : 'text-neutral-600 hover:text-primary-600'
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 top-full h-0.5 w-full bg-primary-500"
          initial={false}
        />
      )}
    </Link>
  );
};

export default Header;