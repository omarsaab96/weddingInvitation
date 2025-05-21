import React from 'react';
import { InvitationDetails } from '../types';
import { motion } from 'framer-motion';
import { formatDate } from '../utils/dateUtils';

interface TemplateProps {
  details: InvitationDetails;
}

const ElegantFloralTemplate: React.FC<TemplateProps> = ({ details }) => {
  const {
    brideFirstName,
    brideLastName,
    groomFirstName,
    groomLastName,
    eventDate,
    eventTime,
    venueName,
    venueAddress,
    message,
    rsvpDate,
    rsvpWebsite,
    dressCode,
    additionalInfo,
    coupleImageUrl,
  } = details;

  const formattedDate = formatDate(eventDate);
  
  return (
    <div className="relative flex flex-col items-center p-8 md:p-12 min-h-full">
      <div className="absolute inset-0 bg-floral-light bg-cover bg-center opacity-20 z-0"></div>
      
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {coupleImageUrl && (
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-200 shadow-elegant">
              <img src={coupleImageUrl} alt="Couple" className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="font-serif text-sm tracking-wider text-primary-700 mb-2">SAVE THE DATE</div>
          <div className="my-6 text-4xl md:text-5xl font-display font-light text-primary-900 tracking-wide leading-tight invite-heading">
            {brideFirstName} <span className="font-normal text-accent-500">&</span> {groomFirstName}
          </div>
          <div className="font-serif tracking-wide text-primary-600 mb-3">
            {formattedDate} • {eventTime}
          </div>
          <div className="h-px w-16 bg-accent-400 mx-auto my-5"></div>
          <div className="font-serif italic text-lg text-primary-700 mb-8">
            {message}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur-sm shadow-elegant rounded-lg p-6 mb-8">
            <h3 className="font-serif text-xl text-primary-900 mb-4">Event Details</h3>
            
            <div className="mb-4">
              <div className="font-medium text-primary-800">{venueName}</div>
              <div className="text-sm text-neutral-600 whitespace-pre-line">{venueAddress}</div>
            </div>
            
            {dressCode && (
              <div className="mb-4">
                <div className="font-medium text-primary-800">Dress Code</div>
                <div className="text-sm text-neutral-600">{dressCode}</div>
              </div>
            )}
            
            {rsvpDate && (
              <div className="mb-4">
                <div className="font-medium text-primary-800">RSVP By</div>
                <div className="text-sm text-neutral-600">{formatDate(rsvpDate)}</div>
                {rsvpWebsite && (
                  <a 
                    href={rsvpWebsite} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-accent-600 hover:underline"
                  >
                    RSVP Online
                  </a>
                )}
              </div>
            )}
            
            {additionalInfo && (
              <div>
                <div className="font-medium text-primary-800">Additional Information</div>
                <div className="text-sm text-neutral-600 whitespace-pre-line">{additionalInfo}</div>
              </div>
            )}
          </div>
          
          <div className="font-serif text-xl text-primary-900 mb-2">
            {brideFirstName} {brideLastName} <span className="text-accent-500">&</span> {groomFirstName} {groomLastName}
          </div>
          <div className="text-sm text-neutral-600">
            We look forward to celebrating with you!
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ElegantFloralTemplate;