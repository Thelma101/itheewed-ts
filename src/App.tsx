import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/NavLayout'
import Homepage from './pages/Homepage';
// import FAQSection from './components/FAQSection';
import FaqPage from './pages/FaqPage';
import ToastTestPage from './pages/ToastTestPage';
import ComingSoonPage from './pages/ComingSoonPage';
import VendorOnboardingPage from './pages/VendorOnboardingPage';
import './index.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Homepage />} />

      <Route path="faq" element={<FaqPage />} />
      <Route path="toast-test" element={<ToastTestPage />} />
      <Route path="coming-soon" element={<ComingSoonPage />} />
      <Route path="vendor-onboarding" element={<VendorOnboardingPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App;
