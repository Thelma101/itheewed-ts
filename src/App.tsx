import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/NavLayout'
import Homepage from './pages/Homepage';
// import FAQSection from './components/FAQSection';
import FaqPage from './pages/FaqPage';
import './index.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Homepage />} />

      <Route path="faq" element={<FaqPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
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