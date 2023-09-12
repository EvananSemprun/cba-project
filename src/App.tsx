
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeStudent from './pages/Student/HomeStudent';
import MateriaStudent from './pages/Student/MateriaStudent';
import ThemeStudent from './pages/Student/ThemeStudent';
import { AppShell, Card, Header } from '@mantine/core';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <AppShell
      navbar={<Sidebar />}
      header={<Navbar />}
      bg="#1e2541"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/HomeStudent" element={<HomeStudent/>} />
          <Route path="/MateriaStudent" element={<MateriaStudent/>} />
          <Route path="/ThemeStudent" element={<ThemeStudent/>} />
        </Routes>
      </BrowserRouter>
    </AppShell>
  );
}

export default App;
