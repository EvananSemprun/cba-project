
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeStudent from './pages/Student/HomeStudent';

import MateriaStudent from './pages/Student/MateriaStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomeStudent" element={<HomeStudent/>} />
        <Route path="/MateriaStudent" element={<MateriaStudent/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
