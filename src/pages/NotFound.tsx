import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6 
          }}
        >
          <Heart className="h-20 w-20 text-primary-300" fill="#d9c3c8" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-4xl md:text-5xl font-serif text-neutral-800"
        >
          Page Not Found
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-lg text-neutral-600 max-w-xl"
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to creating beautiful wedding invitations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 space-x-4"
        >
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
          <Link to="/templates" className="btn-secondary">
            Browse Templates
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;