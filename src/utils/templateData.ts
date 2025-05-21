import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'elegant-floral',
    name: 'Elegant Floral',
    description: 'Classic design with delicate floral elements and elegant typography.',
    previewImage: 'https://images.pexels.com/photos/3766121/pexels-photo-3766121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundImage: 'https://images.pexels.com/photos/6417924/pexels-photo-6417924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    primaryColor: '#a6828d',
    secondaryColor: '#c5a24a',
    fontPrimary: 'Playfair Display',
    fontSecondary: 'Inter',
  },
  {
    id: 'minimalist',
    name: 'Modern Minimalist',
    description: 'Clean, modern design with elegant typography and minimal styling.',
    previewImage: 'https://images.pexels.com/photos/1249211/pexels-photo-1249211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundColor: '#f8f8f8',
    primaryColor: '#5a5a5a',
    secondaryColor: '#d0b865',
    fontPrimary: 'Inter',
    fontSecondary: 'Inter',
  },
  {
    id: 'rustic',
    name: 'Rustic Charm',
    description: 'Warm and inviting design with rustic elements and natural textures.',
    previewImage: 'https://images.pexels.com/photos/1527934/pexels-photo-1527934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundImage: 'https://images.pexels.com/photos/5806871/pexels-photo-5806871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    primaryColor: '#936e30',
    secondaryColor: '#a6828d',
    fontPrimary: 'Cormorant Garamond',
    fontSecondary: 'Inter',
  },
  {
    id: 'romantic',
    name: 'Romantic Blush',
    description: 'Soft and romantic design with blush tones and flowing typography.',
    previewImage: 'https://images.pexels.com/photos/3075742/pexels-photo-3075742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backgroundImage: 'https://images.pexels.com/photos/4466492/pexels-photo-4466492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    primaryColor: '#d9c3c8',
    secondaryColor: '#936e30',
    fontPrimary: 'Playfair Display',
    fontSecondary: 'Cormorant Garamond',
  },
];

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};