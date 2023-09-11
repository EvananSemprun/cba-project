
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeStudent from './pages/Student/HomeStudent';
import MateriaStudent from './pages/Student/MateriaStudent';
import ThemeStudent from './pages/Student/ThemeStudent';
import { AppShell, Card, Header, Navbar } from '@mantine/core';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <AppShell
      navbar={<Sidebar />}
      header={<Header height={60} p="xs" withBorder={false} bg="#0E111E">A</Header>}
      bg="#0E111E"
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
