import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/NavLayout'
import Homepage from './pages/Homepage';
import FAQSection from './components/FAQSection';
import './index.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Homepage />} />
      <Route faq element={<FAQSection />} />
    </Routes>
  )
}

export default App;

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Homepage />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;