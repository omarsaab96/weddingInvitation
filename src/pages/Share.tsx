import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInvitation } from '../context/InvitationContext';
import { Check, Copy, Facebook, Mail, Share2, Twitter, Apple as WhatsApp } from 'lucide-react';

const Share: React.FC = () => {
  const { invitationId } = useInvitation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  const invitationLink = `${window.location.origin}/invitation/${invitationId}`;
  
  useEffect(() => {
    if (!invitationId) {
      navigate('/create');
    }
  }, [invitationId, navigate]);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(invitationLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleEmailShare = () => {
    const subject = 'Wedding Invitation';
    const body = `We're getting married! Please join us by visiting: ${invitationLink}`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };
  
  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(invitationLink)}`);
  };
  
  const handleTwitterShare = () => {
    const text = "We're getting married! Please join us to celebrate.";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(invitationLink)}`);
  };
  
  const handleWhatsAppShare = () => {
    const text = "We're getting married! Please join us to celebrate. Here's our invitation:";
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + invitationLink)}`);
  };
  
  return (
    <div className="bg-neutral-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-full mb-6"
          >
            <Share2 size={32} />
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Share Your Invitation
          </motion.h1>
          
          <motion.p 
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Your invitation is ready! Share this link with your friends and family.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-elegant p-6 md:p-8 mb-10"
        >
          <h2 className="text-xl font-serif text-neutral-800 mb-4">Invitation Link</h2>
          
          <div className="flex items-center mb-6">
            <input
              type="text"
              value={invitationLink}
              readOnly
              className="flex-grow px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-l-md focus:outline-none"
            />
            <button
              onClick={handleCopyLink}
              className={`px-4 py-3 rounded-r-md flex items-center justify-center transition-colors ${
                copied ? 'bg-green-500 text-white' : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span className="ml-2 hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          
          <div className="mb-8">
            <h3 className="text-base font-medium text-neutral-800 mb-4">Or share directly via:</h3>
            
            <div className="flex flex-wrap gap-3">
              <ShareButton 
                icon={<Mail size={18} />} 
                label="Email" 
                onClick={handleEmailShare}
                color="bg-neutral-700 hover:bg-neutral-800"
              />
              
              <ShareButton 
                icon={<Facebook size={18} />} 
                label="Facebook" 
                onClick={handleFacebookShare}
                color="bg-blue-600 hover:bg-blue-700"
              />
              
              <ShareButton 
                icon={<Twitter size={18} />} 
                label="Twitter" 
                onClick={handleTwitterShare}
                color="bg-sky-500 hover:bg-sky-600"
              />
              
              <ShareButton 
                icon={<WhatsApp size={18} />} 
                label="WhatsApp" 
                onClick={handleWhatsAppShare}
                color="bg-green-500 hover:bg-green-600"
              />
            </div>
          </div>
          
          <div className="border-t border-neutral-200 pt-6">
            <h3 className="text-base font-medium text-neutral-800 mb-3">What happens next?</h3>
            <p className="text-neutral-600 text-sm">
              When guests open your invitation link, they'll see your beautiful invitation with all the details you've provided.
              They can save the date to their calendar and RSVP if you've included that option.
            </p>
          </div>
        </motion.div>
        
        <div className="text-center max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/invitation/' + invitationId)}
            className="btn-secondary mb-4"
          >
            Preview Invitation
          </button>
          
          <p className="text-sm text-neutral-500">
            Want to make changes? <button onClick={() => navigate('/create')} className="text-primary-600 hover:underline">
              Edit your invitation
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

interface ShareButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ icon, label, onClick, color }) => {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-md text-white ${color}`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </motion.button>
  );
};

export default Share;