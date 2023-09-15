
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeStudent from './pages/Student/HomeStudent';
import MateriaStudent from './pages/Student/MateriaStudent';
import ThemeStudent from './pages/Student/ThemeStudent';
import { AppShell, } from '@mantine/core';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useWindowSize } from '@uidotdev/usehooks';
import Homeworkstudent from "./pages/Student/Homeworkstudent";

function App() {
  const size = useWindowSize();

  return (
    <AppShell
      navbar={Number(size.width) < 680 ? <></> : <Sidebar />}
      header={<Navbar />}
      bg={Number(size.width) < 680 ? '#ffffff' : '#0E111E'}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/HomeStudent" element={<HomeStudent/>} />
          <Route path="/MateriaStudent" element={<MateriaStudent/>} />
          <Route path="/ThemeStudent" element={<ThemeStudent/>} />
          <Route path="/Homeworkstudent" element={<Homeworkstudent/>} />
        </Routes>
      </BrowserRouter>
    </AppShell>
  );
}

export default App;
