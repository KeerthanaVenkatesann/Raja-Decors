import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Service from './Pages/Service/Service';


function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Layout/>}/>
  <Route path='/service' element={<Service/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;