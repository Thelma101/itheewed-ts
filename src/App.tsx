import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/NavLayout'
import Homepage from './pages/Homepage';
import './index.css';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Homepage />} />
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