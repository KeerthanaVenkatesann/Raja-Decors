import { BrowserRouter, Route, Routes, useLocation  } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Service from './Pages/Service/Service';
import Homepage from './Pages/Homepage/Homepage';
import Carousel from './Pages/Homepage/Carousel/Carousel';
import { AnimatePresence, motion } from 'framer-motion';
import HomepageContentOne from './Pages/Homepage/HomepageContent/HomepageContentOne';
import BallAnimation from './BallAnimation/BallAnimation';
import TimeLineData from './TimeLineData/TimeLineData';
import Whatsapp from './Whatsapp/Whatsapp';
import Aboutus from './Aboutus/Aboutus';
import ContactUs from './Pages/ContactUs/ContactUs';
import LineAnimations from './LineAnimations/LineAnimations';


const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <BallAnimation />
      <Whatsapp />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout/>}>
          <Route index element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
                <HomepageContentOne />
           
            </motion.div>
          }/>
          <Route path='service' element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Service />
            </motion.div>
          }/>
           <Route path='contact-us' element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <ContactUs/>
            </motion.div>
          }/>
          <Route path='carousel' element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Carousel />
            </motion.div>
          }/>
            <Route path='homecontentone' element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
               <Homepage />
            </motion.div>
          }/>
            <Route path='time' element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
               <TimeLineData />
            </motion.div>
          }/>
          <Route path='aboutus' element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
               <Aboutus />
            </motion.div>
          }/>
             <Route path='menu' element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
               <LineAnimations />
            </motion.div>
          }/>
          
        </Route>
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
  <BrowserRouter>
    <AnimatedRoutes/>
  </BrowserRouter>
  );
}

export default App;