import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInvitation } from '../context/InvitationContext';
import TemplateCard from '../components/TemplateCard';

const TemplateGallery: React.FC = () => {
  const { templates, selectedTemplateId, selectTemplate } = useInvitation();

  return (
    <div className="py-12 md:py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-serif text-neutral-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Select Your Perfect Template
          </motion.h1>
          <motion.p 
            className="mt-4 text-neutral-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Browse our collection of beautiful templates designed for every wedding style.
            Choose one that speaks to you and customize it to make it your own.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={template.id === selectedTemplateId}
              onSelect={selectTemplate}
            />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link 
            to="/create" 
            className="btn-primary"
          >
            Continue with Selected Template
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;