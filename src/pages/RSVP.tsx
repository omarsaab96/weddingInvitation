import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createRSVP } from '../utils/mongodb';
import { Heart, Users, Utensils, MessageSquare } from 'lucide-react';

const RSVP: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    attending: 'yes',
    numberOfGuests: 1,
    dietaryRequirements: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await createRSVP({
        invitation_id: id,
        guest_name: formData.guestName,
        email: formData.email,
        attending: formData.attending === 'yes',
        number_of_guests: formData.numberOfGuests,
        dietary_requirements: formData.dietaryRequirements,
        message: formData.message
      });

      setSuccess(true);
      setTimeout(() => {
        navigate(`/invitation/${id}`);
      }, 3000);
    } catch (err) {
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-elegant p-8 text-center max-w-md w-full"
        >
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary-500" />
          </div>
          <h2 className="text-2xl font-serif text-neutral-900 mb-4">Thank You!</h2>
          <p className="text-neutral-600">
            Your RSVP has been successfully submitted. We look forward to celebrating with you!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-elegant p-6 md:p-8"
          >
            <h1 className="text-3xl font-serif text-neutral-900 mb-6 text-center">RSVP</h1>
            
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="guestName" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="guestName"
                  required
                  className="input-field"
                  value={formData.guestName}
                  onChange={(e) => setFormData(prev => ({ ...prev, guestName: e.target.value }))}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Will you be attending?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={(e) => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                      className="mr-2"
                    />
                    Yes, I'll be there
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={(e) => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                      className="mr-2"
                    />
                    Sorry, I can't make it
                  </label>
                </div>
              </div>

              {formData.attending === 'yes' && (
                <>
                  <div>
                    <label htmlFor="numberOfGuests" className="block text-sm font-medium text-neutral-700 mb-1">
                      <Users size={16} className="inline mr-1" />
                      Number of Guests (including yourself)
                    </label>
                    <input
                      type="number"
                      id="numberOfGuests"
                      min="1"
                      max="10"
                      required
                      className="input-field"
                      value={formData.numberOfGuests}
                      onChange={(e) => setFormData(prev => ({ ...prev, numberOfGuests: parseInt(e.target.value) }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="dietaryRequirements" className="block text-sm font-medium text-neutral-700 mb-1">
                      <Utensils size={16} className="inline mr-1" />
                      Dietary Requirements
                    </label>
                    <textarea
                      id="dietaryRequirements"
                      className="input-field"
                      rows={3}
                      placeholder="Please let us know of any dietary requirements"
                      value={formData.dietaryRequirements}
                      onChange={(e) => setFormData(prev => ({ ...prev, dietaryRequirements: e.target.value }))}
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  <MessageSquare size={16} className="inline mr-1" />
                  Message for the Couple (optional)
                </label>
                <textarea
                  id="message"
                  className="input-field"
                  rows={4}
                  placeholder="Share your wishes or a message for the couple"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;