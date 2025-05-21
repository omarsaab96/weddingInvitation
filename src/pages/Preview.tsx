import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInvitation } from '../context/InvitationContext';
import ElegantFloralTemplate from '../templates/ElegantFloralTemplate';
import MinimalistTemplate from '../templates/MinimalistTemplate';
import RusticTemplate from '../templates/RusticTemplate';
import RomanticTemplate from '../templates/RomanticTemplate';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Preview: React.FC = () => {
  const { invitationDetails, selectedTemplateId, generateInvitationId } = useInvitation();
  const navigate = useNavigate();
  
  const renderSelectedTemplate = () => {
    switch (selectedTemplateId) {
      case 'elegant-floral':
        return <ElegantFloralTemplate details={invitationDetails} />;
      case 'minimalist':
        return <MinimalistTemplate details={invitationDetails} />;
      case 'rustic':
        return <RusticTemplate details={invitationDetails} />;
      case 'romantic':
        return <RomanticTemplate details={invitationDetails} />;
      default:
        return <ElegantFloralTemplate details={invitationDetails} />;
    }
  };
  
  const handleContinue = () => {
    generateInvitationId();
    navigate('/share');
  };
  
  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <motion.h1 
            className="text-3xl md:text-4xl font-serif text-neutral-900 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Preview Your Invitation
          </motion.h1>
          <motion.p 
            className="mt-3 text-neutral-600 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Here's how your invitation will look to your guests
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-card overflow-hidden mb-8">
          <div className="aspect-[3/4] md:aspect-auto md:h-[800px] overflow-auto">
            {renderSelectedTemplate()}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/create')}
            className="btn-secondary flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Edit Details
          </motion.button>
          
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinue}
            className="btn-primary flex items-center justify-center"
          >
            Continue to Share
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Preview;