import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Clock, Share2, Edit3 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-floral-light bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-serif text-primary-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Create Beautiful Wedding Invitations in Minutes
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl text-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Design stunning digital invitations to share your special day with loved ones. Choose from elegant templates, customize with your details, and share instantly.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/templates" className="btn-primary">
                Browse Templates
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">How It Works</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Creating and sharing your wedding invitation is simple and quick with our easy-to-use platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <Step 
              icon={<Edit3 className="w-8 h-8 text-primary-500" />}
              title="Choose a Template"
              description="Browse our collection of beautiful templates and select one that matches your wedding style."
              number={1}
            />
            <Step 
              icon={<Clock className="w-8 h-8 text-primary-500" />}
              title="Customize Details"
              description="Add your names, wedding date, venue, and a personal message to make it uniquely yours."
              number={2}
            />
            <Step 
              icon={<Share2 className="w-8 h-8 text-primary-500" />}
              title="Share with Guests"
              description="Generate a unique link and share it via email, social media, or messaging apps."
              number={3}
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/templates" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Our Beautiful Templates</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Explore our collection of elegantly designed templates for every wedding style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplatePreview 
              image="https://images.pexels.com/photos/3766121/pexels-photo-3766121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="Elegant Floral"
            />
            <TemplatePreview 
              image="https://images.pexels.com/photos/1249211/pexels-photo-1249211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="Modern Minimalist"
            />
            <TemplatePreview 
              image="https://images.pexels.com/photos/1527934/pexels-photo-1527934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="Rustic Charm"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/templates" className="btn-primary">
              View All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Loved by Couples</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Here's what couples have to say about their experience with Forever Wed invitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Testimonial 
              quote="Forever Wed made creating our wedding invitations so easy! We received so many compliments from our guests."
              author="Sarah & Michael"
              location="New York, NY"
            />
            <Testimonial 
              quote="The templates are gorgeous and customizing was a breeze. Saved us so much time and money compared to printed invitations."
              author="Emma & James"
              location="San Francisco, CA"
            />
            <Testimonial 
              quote="We loved being able to include all the wedding details in one place. Our guests appreciated how easy it was to RSVP."
              author="David & Maria"
              location="Chicago, IL"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-soft-flowers bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-primary-900">Ready to Create Your Wedding Invitation?</h2>
            <p className="mt-6 text-lg text-neutral-700">
              Start designing your perfect wedding invitation today and share your joy with loved ones.
            </p>
            <div className="mt-10">
              <Link to="/templates" className="btn-primary">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, number }) => {
  return (
    <motion.div 
      className="text-center p-6"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mx-auto w-16 h-16 mb-6 rounded-full bg-primary-100 flex items-center justify-center">
        {icon}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-500 text-white text-sm flex items-center justify-center font-medium">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-serif text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

interface TemplatePreviewProps {
  image: string;
  name: string;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ image, name }) => {
  return (
    <motion.div 
      className="template-card overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-serif text-lg font-medium text-neutral-800">{name}</h3>
        <div className="mt-3 flex justify-between items-center">
          <Link to="/templates" className="text-primary-600 text-sm font-medium hover:underline">
            Preview
          </Link>
          <Link to="/create" className="text-accent-600 text-sm font-medium hover:underline">
            Customize
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-elegant border border-neutral-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 text-accent-400">
        <Heart className="h-6 w-6" fill="#d0b865" />
      </div>
      <p className="text-neutral-700 italic mb-6">{quote}</p>
      <div>
        <p className="font-medium text-neutral-800">{author}</p>
        <p className="text-neutral-500 text-sm">{location}</p>
      </div>
    </motion.div>
  );
};

export default Home;