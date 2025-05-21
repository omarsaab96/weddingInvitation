import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRSVPs } from '../utils/mongodb';
import { Check, X, Users, MessageSquare } from 'lucide-react';

interface RSVP {
  _id: string;
  guest_name: string;
  email: string;
  attending: boolean;
  number_of_guests: number;
  dietary_requirements: string | null;
  message: string | null;
  created_at: string;
}

const RSVPList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRSVPs = async () => {
      try {
        const data = await getRSVPs(id);
        setRsvps(data);
      } catch (err) {
        setError('Failed to load RSVPs');
      } finally {
        setLoading(false);
      }
    };

    fetchRSVPs();
  }, [id]);

  const totalAttending = rsvps
    .filter(rsvp => rsvp.attending)
    .reduce((sum, rsvp) => sum + rsvp.number_of_guests, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-neutral-600">Loading RSVPs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-elegant p-6 md:p-8"
          >
            <h1 className="text-3xl font-serif text-neutral-900 mb-2">Guest Responses</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 rounded-lg p-4">
                <div className="text-primary-800 font-medium">Total Responses</div>
                <div className="text-2xl font-serif text-primary-900">{rsvps.length}</div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-800 font-medium">Attending</div>
                <div className="text-2xl font-serif text-green-900">
                  {rsvps.filter(rsvp => rsvp.attending).length}
                </div>
              </div>
              
              <div className="bg-accent-50 rounded-lg p-4">
                <div className="text-accent-800 font-medium">Total Guests</div>
                <div className="text-2xl font-serif text-accent-900">{totalAttending}</div>
              </div>
            </div>

            <div className="space-y-6">
              {rsvps.map((rsvp) => (
                <motion.div
                  key={rsvp._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-neutral-200 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900">{rsvp.guest_name}</h3>
                      <p className="text-sm text-neutral-600">{rsvp.email}</p>
                    </div>
                    <div className={`flex items-center ${rsvp.attending ? 'text-green-600' : 'text-red-600'}`}>
                      {rsvp.attending ? (
                        <>
                          <Check size={18} className="mr-1" />
                          <span className="text-sm">Attending</span>
                        </>
                      ) : (
                        <>
                          <X size={18} className="mr-1" />
                          <span className="text-sm">Not Attending</span>
                        </>
                      )}
                    </div>
                  </div>

                  {rsvp.attending && (
                    <div className="mb-3">
                      <div className="flex items-center text-neutral-700 mb-2">
                        <Users size={16} className="mr-1" />
                        <span className="text-sm">Number of Guests: {rsvp.number_of_guests}</span>
                      </div>
                      
                      {rsvp.dietary_requirements && (
                        <div className="text-sm text-neutral-600">
                          <strong>Dietary Requirements:</strong>
                          <p className="mt-1">{rsvp.dietary_requirements}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {rsvp.message && (
                    <div className="mt-3">
                      <div className="flex items-center text-neutral-700 mb-2">
                        <MessageSquare size={16} className="mr-1" />
                        <span className="text-sm">Message</span>
                      </div>
                      <p className="text-sm text-neutral-600 italic">{rsvp.message}</p>
                    </div>
                  )}

                  <div className="mt-2 text-xs text-neutral-500">
                    Responded on {new Date(rsvp.created_at).toLocaleDateString()}
                  </div>
                </motion.div>
              ))}

              {rsvps.length === 0 && (
                <div className="text-center py-8 text-neutral-600">
                  No responses yet. Share your invitation to start receiving RSVPs!
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RSVPList;