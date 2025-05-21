import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInvitation } from '../context/InvitationContext';
import { getTemplateById } from '../utils/templateData';
import { Calendar, Clock, MapPin, MessageCircle, Users, Upload, X } from 'lucide-react';

const Customize: React.FC = () => {
  const { invitationDetails, updateInvitationDetails, selectedTemplateId, handleImageUpload } = useInvitation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('couple');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const selectedTemplate = getTemplateById(selectedTemplateId);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/preview');
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleRemoveImage = () => {
    if (invitationDetails.coupleImageUrl) {
      URL.revokeObjectURL(invitationDetails.coupleImageUrl);
    }
    updateInvitationDetails({ 
      coupleImage: null,
      coupleImageUrl: ''
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const isFormValid = () => {
    const { brideFirstName, brideLastName, groomFirstName, groomLastName, eventDate, eventTime, venueName, venueAddress } = invitationDetails;
    return brideFirstName && brideLastName && groomFirstName && groomLastName && eventDate && eventTime && venueName && venueAddress;
  };
  
  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <motion.h1 
            className="text-3xl md:text-4xl font-serif text-neutral-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Customize Your Invitation
          </motion.h1>
          <motion.p 
            className="mt-3 text-neutral-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Add your details to personalize {selectedTemplate?.name} template
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-elegant overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 p-6 md:p-8">
              <div className="flex border-b border-neutral-200 mb-6">
                <TabButton
                  active={activeTab === 'couple'}
                  onClick={() => setActiveTab('couple')}
                  icon={<Users size={18} />}
                  label="Couple"
                />
                <TabButton
                  active={activeTab === 'event'}
                  onClick={() => setActiveTab('event')}
                  icon={<Calendar size={18} />}
                  label="Event"
                />
                <TabButton
                  active={activeTab === 'details'}
                  onClick={() => setActiveTab('details')}
                  icon={<MessageCircle size={18} />}
                  label="Details"
                />
              </div>
              
              <form onSubmit={handleSubmit}>
                {activeTab === 'couple' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-lg font-serif text-neutral-800 mb-4">Couple Details</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-neutral-700 mb-3">Bride</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="brideFirstName" className="block text-sm text-neutral-600 mb-1">First Name</label>
                          <input
                            type="text"
                            id="brideFirstName"
                            className="input-field"
                            value={invitationDetails.brideFirstName}
                            onChange={(e) => updateInvitationDetails({ brideFirstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="brideLastName" className="block text-sm text-neutral-600 mb-1">Last Name</label>
                          <input
                            type="text"
                            id="brideLastName"
                            className="input-field"
                            value={invitationDetails.brideLastName}
                            onChange={(e) => updateInvitationDetails({ brideLastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-neutral-700 mb-3">Groom</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="groomFirstName" className="block text-sm text-neutral-600 mb-1">First Name</label>
                          <input
                            type="text"
                            id="groomFirstName"
                            className="input-field"
                            value={invitationDetails.groomFirstName}
                            onChange={(e) => updateInvitationDetails({ groomFirstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="groomLastName" className="block text-sm text-neutral-600 mb-1">Last Name</label>
                          <input
                            type="text"
                            id="groomLastName"
                            className="input-field"
                            value={invitationDetails.groomLastName}
                            onChange={(e) => updateInvitationDetails({ groomLastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-neutral-600 mb-1">Couple Image</label>
                      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md relative">
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        
                        {invitationDetails.coupleImageUrl ? (
                          <div className="relative">
                            <img 
                              src={invitationDetails.coupleImageUrl} 
                              alt="Couple preview" 
                              className="max-h-48 rounded"
                            />
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="text-center" onClick={() => fileInputRef.current?.click()}>
                            <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                            <p className="mt-1 text-sm text-neutral-600">Click to upload a photo</p>
                            <p className="text-xs text-neutral-500">PNG, JPG up to 5MB</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'event' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-lg font-serif text-neutral-800 mb-4">Event Details</h2>
                    
                    <div className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center text-sm text-neutral-600 mb-1">
                            <Calendar size={16} className="mr-1" />
                            Date
                          </label>
                          <input
                            type="date"
                            className="input-field"
                            value={invitationDetails.eventDate}
                            onChange={(e) => updateInvitationDetails({ eventDate: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="flex items-center text-sm text-neutral-600 mb-1">
                            <Clock size={16} className="mr-1" />
                            Time
                          </label>
                          <input
                            type="time"
                            className="input-field"
                            value={invitationDetails.eventTime}
                            onChange={(e) => updateInvitationDetails({ eventTime: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-center text-sm text-neutral-600 mb-1">
                        <MapPin size={16} className="mr-1" />
                        Venue Name
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="e.g. The Grand Ballroom"
                        value={invitationDetails.venueName}
                        onChange={(e) => updateInvitationDetails({ venueName: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-center text-sm text-neutral-600 mb-1">
                        <MapPin size={16} className="mr-1" />
                        Venue Address
                      </label>
                      <textarea
                        className="input-field"
                        rows={3}
                        placeholder="e.g. 123 Wedding Lane, City, State, Zip"
                        value={invitationDetails.venueAddress}
                        onChange={(e) => updateInvitationDetails({ venueAddress: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center text-sm text-neutral-600 mb-1">
                        Dress Code (optional)
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="e.g. Black Tie, Formal, Casual"
                        value={invitationDetails.dressCode || ''}
                        onChange={(e) => updateInvitationDetails({ dressCode: e.target.value })}
                      />
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'details' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-lg font-serif text-neutral-800 mb-4">Additional Details</h2>
                    
                    <div className="mb-6">
                      <label className="flex items-center text-sm text-neutral-600 mb-1">
                        <MessageCircle size={16} className="mr-1" />
                        Message to Guests
                      </label>
                      <textarea
                        className="input-field"
                        rows={4}
                        placeholder="e.g. We're excited to celebrate our special day with you!"
                        value={invitationDetails.message}
                        onChange={(e) => updateInvitationDetails({ message: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="text-sm text-neutral-600 mb-1">
                        RSVP Date (optional)
                      </label>
                      <input
                        type="date"
                        className="input-field"
                        value={invitationDetails.rsvpDate || ''}
                        onChange={(e) => updateInvitationDetails({ rsvpDate: e.target.value })}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="text-sm text-neutral-600 mb-1">
                        RSVP Website (optional)
                      </label>
                      <input
                        type="url"
                        className="input-field"
                        placeholder="https://your-rsvp-website.com"
                        value={invitationDetails.rsvpWebsite || ''}
                        onChange={(e) => updateInvitationDetails({ rsvpWebsite: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-neutral-600 mb-1">
                        Additional Information (optional)
                      </label>
                      <textarea
                        className="input-field"
                        rows={3}
                        placeholder="Any other details you'd like to share"
                        value={invitationDetails.additionalInfo || ''}
                        onChange={(e) => updateInvitationDetails({ additionalInfo: e.target.value })}
                      />
                    </div>
                  </motion.div>
                )}
                
                <div className="mt-8 flex justify-between">
                  {activeTab === 'couple' ? (
                    <button
                      type="button"
                      onClick={() => navigate('/templates')}
                      className="btn-secondary"
                    >
                      Back to Templates
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (activeTab === 'event') setActiveTab('couple');
                        if (activeTab === 'details') setActiveTab('event');
                      }}
                      className="btn-secondary"
                    >
                      Previous
                    </button>
                  )}
                  
                  {activeTab === 'details' ? (
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={!isFormValid()}
                    >
                      Preview Invitation
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (activeTab === 'couple') setActiveTab('event');
                        if (activeTab === 'event') setActiveTab('details');
                      }}
                      className="btn-primary"
                    >
                      Next
                    </button>
                  )}
                </div>
              </form>
            </div>
            
            <div className="hidden md:block md:col-span-2 bg-primary-50">
              <div className="h-full flex flex-col items-center justify-center p-8">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-lg text-primary-800">Template Preview</h3>
                  <p className="text-sm text-neutral-600">{selectedTemplate?.name}</p>
                </div>
                
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={selectedTemplate?.previewImage}
                    alt={selectedTemplate?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-neutral-600">
                    Continue filling in your details to see your personalized invitation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label }) => {
  return (
    <button
      type="button"
      className={`flex items-center px-4 py-3 border-b-2 transition-colors ${
        active 
          ? 'border-primary-500 text-primary-700' 
          : 'border-transparent text-neutral-500 hover:text-neutral-800'
      }`}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default Customize;