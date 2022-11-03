
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Students from './pages/students';
import Contactus from './pages/contactus';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/students' element={<Students />} />
      <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
