import React, { createContext, useContext, useState } from 'react';
import { InvitationContextType, InvitationDetails, Template } from '../types';
import { templates } from '../utils/templateData';
import { v4 as uuidv4 } from 'uuid';

const defaultInvitationDetails: InvitationDetails = {
  brideFirstName: '',
  brideLastName: '',
  groomFirstName: '',
  groomLastName: '',
  eventDate: '',
  eventTime: '',
  venueName: '',
  venueAddress: '',
  message: '',
  rsvpDate: '',
  rsvpWebsite: '',
  dressCode: '',
  additionalInfo: '',
  coupleImage: null,
  coupleImageUrl: '',
  templateId: templates[0].id,
};

const InvitationContext = createContext<InvitationContextType | undefined>(undefined);

export const InvitationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [invitationDetails, setInvitationDetails] = useState<InvitationDetails>(defaultInvitationDetails);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(templates[0].id);
  const [invitationId, setInvitationId] = useState<string | undefined>(undefined);

  const updateInvitationDetails = (details: Partial<InvitationDetails>) => {
    setInvitationDetails(prev => ({ ...prev, ...details }));
  };

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    updateInvitationDetails({ 
      coupleImage: file,
      coupleImageUrl: imageUrl
    });
  };

  const selectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
    updateInvitationDetails({ templateId });
  };

  const resetInvitation = () => {
    if (invitationDetails.coupleImageUrl) {
      URL.revokeObjectURL(invitationDetails.coupleImageUrl);
    }
    setInvitationDetails(defaultInvitationDetails);
    setSelectedTemplateId(templates[0].id);
    setInvitationId(undefined);
  };

  const generateInvitationId = () => {
    const newId = uuidv4();
    setInvitationId(newId);
    return newId;
  };

  return (
    <InvitationContext.Provider
      value={{
        invitationDetails,
        selectedTemplateId,
        templates,
        updateInvitationDetails,
        selectTemplate,
        resetInvitation,
        invitationId,
        generateInvitationId,
        handleImageUpload,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
};

export const useInvitation = (): InvitationContextType => {
  const context = useContext(InvitationContext);
  if (context === undefined) {
    throw new Error('useInvitation must be used within an InvitationProvider');
  }
  return context;
};