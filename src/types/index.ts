export interface Template {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  backgroundImage?: string;
  backgroundColor?: string;
  primaryColor: string;
  secondaryColor: string;
  fontPrimary: string;
  fontSecondary: string;
}

export interface InvitationDetails {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  eventDate: string; // ISO string
  eventTime: string;
  venueName: string;
  venueAddress: string;
  message: string;
  rsvpDate?: string; // ISO string
  rsvpWebsite?: string;
  dressCode?: string;
  additionalInfo?: string;
  coupleImage?: File | null;
  coupleImageUrl?: string;
  templateId: string;
}

export type InvitationContextType = {
  invitationDetails: InvitationDetails;
  selectedTemplateId: string;
  templates: Template[];
  updateInvitationDetails: (details: Partial<InvitationDetails>) => void;
  selectTemplate: (templateId: string) => void;
  resetInvitation: () => void;
  invitationId?: string;
  generateInvitationId: () => string;
  handleImageUpload: (file: File) => void;
};