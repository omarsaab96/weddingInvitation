import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-5 w-5 text-primary-500" fill="#a6828d" />
              <h3 className="text-xl font-serif text-primary-800 font-semibold">Forever Wed</h3>
            </div>
            <p className="text-neutral-600 text-sm mb-4">
              Create beautiful digital wedding invitations that capture the essence of your special day.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:hello@foreverwed.com" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-medium text-neutral-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Create Invitation
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-medium text-neutral-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-medium text-neutral-800 mb-4">Newsletter</h4>
            <p className="text-neutral-600 text-sm mb-3">
              Subscribe to get updates on new features and templates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm bg-white border border-neutral-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-300 flex-grow"
              />
              <button type="submit" className="bg-primary-500 text-white px-3 py-2 text-sm rounded-r-md hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Forever Wed. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-neutral-500 hover:text-primary-600 text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-neutral-500 hover:text-primary-600 text-xs">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-neutral-500 hover:text-primary-600 text-xs">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;