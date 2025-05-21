import React from 'react';
import { InvitationDetails } from '../types';
import { motion } from 'framer-motion';
import { formatDate } from '../utils/dateUtils';

interface TemplateProps {
  details: InvitationDetails;
}

const RusticTemplate: React.FC<TemplateProps> = ({ details }) => {
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
    <div className="relative flex flex-col items-center p-8 md:p-12 min-h-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5806871/pexels-photo-5806871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {coupleImage && (
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent-300 shadow-elegant">
              <img src={coupleImage} alt="Couple" className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="font-display text-sm tracking-wider text-accent-700 mb-4">PLEASE JOIN US</div>
          <div className="my-6 text-4xl md:text-5xl font-display font-medium text-accent-800 tracking-wide leading-tight invite-heading">
            {brideFirstName} <span className="text-primary-600 font-normal">&</span> {groomFirstName}
          </div>
          <div className="font-display tracking-wide text-accent-700 mb-3">
            {formattedDate} • {eventTime}
          </div>
          <div className="h-px w-16 bg-primary-400 mx-auto my-5"></div>
          <div className="font-display italic text-lg text-accent-800 mb-8">
            {message}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur-sm shadow-elegant rounded-lg p-6 mb-8 border border-accent-200">
            <h3 className="font-display text-xl text-accent-800 mb-4">Event Details</h3>
            
            <div className="mb-4">
              <div className="font-medium text-accent-800">{venueName}</div>
              <div className="text-sm text-neutral-600 whitespace-pre-line">{venueAddress}</div>
            </div>
            
            {dressCode && (
              <div className="mb-4">
                <div className="font-medium text-accent-800">Dress Code</div>
                <div className="text-sm text-neutral-600">{dressCode}</div>
              </div>
            )}
            
            {rsvpDate && (
              <div className="mb-4">
                <div className="font-medium text-accent-800">RSVP By</div>
                <div className="text-sm text-neutral-600">{formatDate(rsvpDate)}</div>
                {rsvpWebsite && (
                  <a 
                    href={rsvpWebsite} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-primary-600 hover:underline"
                  >
                    RSVP Online
                  </a>
                )}
              </div>
            )}
            
            {additionalInfo && (
              <div>
                <div className="font-medium text-accent-800">Additional Information</div>
                <div className="text-sm text-neutral-600 whitespace-pre-line">{additionalInfo}</div>
              </div>
            )}
          </div>
          
          <div className="font-display text-xl text-accent-800 mb-2">
            {brideFirstName} {brideLastName} <span className="text-primary-600">&</span> {groomFirstName} {groomLastName}
          </div>
          <div className="text-sm text-neutral-600">
            We look forward to celebrating with you!
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RusticTemplate;