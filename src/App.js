import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Service from './Pages/Service/Service';
import Homepage from './Pages/Homepage/Homepage';


function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}> 
     <Route index element={<Homepage/>}/>
     <Route path='service' element={<Service/>}/>
    </Route>
  </Routes>
 </BrowserRouter>
  );
}

export default App;