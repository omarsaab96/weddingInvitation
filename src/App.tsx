import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InvitationProvider } from './context/InvitationContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import TemplateGallery from './pages/TemplateGallery';
import Customize from './pages/Customize';
import Preview from './pages/Preview';
import Share from './pages/Share';
import HowItWorks from './pages/HowItWorks';
import ViewInvitation from './pages/ViewInvitation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <InvitationProvider>
      <Router>
        <Routes>
          <Route path="/invitation/:id" element={<ViewInvitation />} />
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/templates" element={
            <Layout>
              <TemplateGallery />
            </Layout>
          } />
          <Route path="/create" element={
            <Layout>
              <Customize />
            </Layout>
          } />
          <Route path="/preview" element={
            <Layout>
              <Preview />
            </Layout>
          } />
          <Route path="/share" element={
            <Layout>
              <Share />
            </Layout>
          } />
          <Route path="/how-it-works" element={
            <Layout>
              <HowItWorks />
            </Layout>
          } />
          <Route path="*" element={
            <Layout>
              <NotFound />
            </Layout>
          } />
        </Routes>
      </Router>
    </InvitationProvider>
  );
}

export default App;