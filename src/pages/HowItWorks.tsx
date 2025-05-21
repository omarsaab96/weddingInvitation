import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PaletteIcon, Pencil, Share2, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            How It Works
          </motion.h1>
          <motion.p 
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Creating your perfect wedding invitation is simple and quick
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-elegant aspect-[4/3]">
                <img 
                  src="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Select a template" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <div className="text-xl font-medium">1</div>
              </div>
              <h2 className="text-2xl font-serif text-neutral-900 mb-4">Choose a Template</h2>
              <p className="text-neutral-600 mb-6">
                Browse our collection of beautifully designed templates. Each one has been crafted with care to set the perfect tone for your special day. Whether you prefer elegant, minimalist, rustic, or romantic styles, you'll find a template that matches your wedding aesthetic.
              </p>
              <Link to="/templates" className="text-primary-600 font-medium hover:underline flex items-center">
                Browse Templates <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center md:order-1 md:order-2"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <div className="text-xl font-medium">2</div>
              </div>
              <h2 className="text-2xl font-serif text-neutral-900 mb-4">Customize Your Invitation</h2>
              <p className="text-neutral-600 mb-6">
                Add your personal details to make the invitation uniquely yours. Enter your names, wedding date, venue information, and a personalized message for your guests. You can also include additional details like dress code, RSVP information, and more.
              </p>
              <Link to="/create" className="text-primary-600 font-medium hover:underline flex items-center">
                Start Customizing <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative md:order-2 md:order-1"
            >
              <div className="rounded-lg overflow-hidden shadow-elegant aspect-[4/3]">
                <img 
                  src="https://images.pexels.com/photos/6065007/pexels-photo-6065007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Customize invitation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-elegant aspect-[4/3]">
                <img 
                  src="https://images.pexels.com/photos/6175267/pexels-photo-6175267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Share invitation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <div className="text-xl font-medium">3</div>
              </div>
              <h2 className="text-2xl font-serif text-neutral-900 mb-4">Share with Your Guests</h2>
              <p className="text-neutral-600 mb-6">
                When you're happy with your invitation, you'll receive a unique link that you can share with your guests. Send it via email, messaging apps, or social media. Your guests will be able to view your beautiful digital invitation from any device.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-24">
          <h2 className="text-2xl font-serif text-neutral-900 text-center mb-10">Why Choose Digital Invitations?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Benefit 
              icon={<PaletteIcon className="h-6 w-6 text-primary-500" />}
              title="Beautiful & Customizable" 
              description="Choose from stunning designs and customize every detail to match your wedding style perfectly."
            />
            
            <Benefit 
              icon={<Share2 className="h-6 w-6 text-primary-500" />}
              title="Easy to Share" 
              description="Share your invitation with guests around the world instantly via email, social media, or messaging apps."
            />
            
            <Benefit 
              icon={<CheckCircle className="h-6 w-6 text-primary-500" />}
              title="Eco-Friendly" 
              description="Save paper and reduce your environmental footprint with beautiful digital invitations."
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h2 className="text-2xl font-serif text-neutral-900 mb-6">Ready to Create Your Invitation?</h2>
          <Link to="/templates" className="btn-primary inline-block">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-elegant"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="font-serif text-lg text-neutral-800 ml-2">{title}</h3>
      </div>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default HowItWorks;