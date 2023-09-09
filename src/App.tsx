
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeStudent from './pages/Student/HomeStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomeStudent" element={<HomeStudent/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
