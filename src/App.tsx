
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeStudent from './pages/Student/HomeStudent';
import MateriaStudent from './pages/Student/MateriaStudent';
import ThemeStudent from './pages/Student/ThemeStudent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Homeworkstudent from "./pages/Student/Homeworkstudent";
import Examenstudent from "./pages/Student/Examenstudent"
import Materialnotestudent from "./pages/Student/materialnotestudent"
import { AppShell, } from '@mantine/core';
import { useWindowSize } from '@uidotdev/usehooks';

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
          <Route path="/Examenstudent" element={<Examenstudent/>} />
          <Route path="/Materialnotestudent" element={<Materialnotestudent/>} />
        </Routes>
      </BrowserRouter>
    </AppShell>
  );
}

export default App;
