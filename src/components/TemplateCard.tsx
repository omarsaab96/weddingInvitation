import React from 'react';
import { motion } from 'framer-motion';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  isSelected: boolean;
  onSelect: (templateId: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, isSelected, onSelect }) => {
  return (
    <motion.div
      className={`template-card ${isSelected ? 'template-card-selected' : ''}`}
      whileHover={{ y: -5 }}
      onClick={() => onSelect(template.id)}
    >
      <div className="aspect-[3/4] relative">
        <img
          src={template.previewImage}
          alt={template.name}
          className="w-full h-full object-cover"
        />
        {isSelected && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-serif text-lg font-medium text-neutral-800">{template.name}</h3>
        <p className="text-neutral-500 text-sm mt-1">{template.description}</p>
      </div>
    </motion.div>
  );
};

export default TemplateCard;