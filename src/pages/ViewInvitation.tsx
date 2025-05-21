import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInvitation } from '../context/InvitationContext';
import ElegantFloralTemplate from '../templates/ElegantFloralTemplate';
import MinimalistTemplate from '../templates/MinimalistTemplate';
import RusticTemplate from '../templates/RusticTemplate';
import RomanticTemplate from '../templates/RomanticTemplate';

const ViewInvitation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { invitationDetails, invitationId } = useInvitation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real app, we would fetch the invitation details from the backend
    // For this demo, we're using the context state which would be empty on direct link visits
    if (!invitationId && !id) {
      navigate('/');
    }
  }, [id, invitationId, navigate]);
  
  const renderTemplate = () => {
    switch (invitationDetails.templateId) {
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
  
  return (
    <div className="min-h-screen bg-neutral-100">
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-card overflow-hidden">
          <div className="min-h-[90vh]">
            {renderTemplate()}
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-neutral-500">
          <p>Create your own wedding invitation at <a href="/" className="text-primary-600 hover:underline">Forever Wed</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewInvitation;