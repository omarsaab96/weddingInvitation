import React from 'react';
import { InvitationDetails } from '../types';
import { motion } from 'framer-motion';
import { formatDate } from '../utils/dateUtils';

interface TemplateProps {
  details: InvitationDetails;
}

const MinimalistTemplate: React.FC<TemplateProps> = ({ details }) => {
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
    coupleImage,
  } = details;

  const formattedDate = formatDate(eventDate);
  
  return (
    <div className="relative flex flex-col items-center p-8 md:p-12 min-h-full bg-neutral-50">
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {coupleImage && (
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-elegant">
              <img src={coupleImage} alt="Couple" className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="uppercase text-xs tracking-widest text-neutral-500 mb-6">WE ARE GETTING MARRIED</div>
          <div className="my-6 text-4xl md:text-5xl font-sans font-light text-neutral-800 tracking-wide leading-tight invite-heading">
            {brideFirstName} <span className="font-normal text-accent-500">&</span> {groomFirstName}
          </div>
          <div className="uppercase tracking-widest text-xs text-neutral-500 mb-6">
            {formattedDate}
          </div>
          <div className="h-px w-16 bg-accent-400 mx-auto my-8"></div>
          <div className="font-sans text-lg text-neutral-700 mb-8 leading-relaxed">
            {message}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white shadow-elegant rounded-lg p-8 mb-8">
            <div className="uppercase text-xs tracking-widest text-neutral-500 mb-4">DETAILS</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="uppercase text-xs tracking-widest text-neutral-500 mb-2">WHEN</div>
                <div className="text-neutral-800 mb-1">{formattedDate}</div>
                <div className="text-neutral-800">{eventTime}</div>
              </div>
              
              <div>
                <div className="uppercase text-xs tracking-widest text-neutral-500 mb-2">WHERE</div>
                <div className="text-neutral-800 mb-1">{venueName}</div>
                <div className="text-sm text-neutral-600 whitespace-pre-line">{venueAddress}</div>
              </div>
            </div>
            
            {(dressCode || rsvpDate) && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {dressCode && (
                  <div>
                    <div className="uppercase text-xs tracking-widest text-neutral-500 mb-2">DRESS CODE</div>
                    <div className="text-neutral-800">{dressCode}</div>
                  </div>
                )}
                
                {rsvpDate && (
                  <div>
                    <div className="uppercase text-xs tracking-widest text-neutral-500 mb-2">RSVP BY</div>
                    <div className="text-neutral-800">{formatDate(rsvpDate)}</div>
                    {rsvpWebsite && (
                      <a 
                        href={rsvpWebsite} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-accent-600 hover:underline mt-1 inline-block"
                      >
                        RSVP Online
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {additionalInfo && (
              <div className="mt-8">
                <div className="uppercase text-xs tracking-widest text-neutral-500 mb-2">ADDITIONAL INFORMATION</div>
                <div className="text-sm text-neutral-700 whitespace-pre-line">{additionalInfo}</div>
              </div>
            )}
          </div>
          
          <div className="text-lg text-neutral-800 mb-2">
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

export default MinimalistTemplate;