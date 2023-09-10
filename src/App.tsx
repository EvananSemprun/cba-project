
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeStudent from './pages/Student/HomeStudent';
import MateriaStudent from './pages/Student/MateriaStudent';
import ThemeStudent from './pages/Student/ThemeStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomeStudent" element={<HomeStudent/>} />
        <Route path="/MateriaStudent" element={<MateriaStudent/>} />
        <Route path="/ThemeStudent" element={<ThemeStudent/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
