// import React from 'react' 
// import { Outlet } from 'react-router-dom' 
// import Header from '../Component/Header/Header'
// import Footer from '../Component/Footer/Footer'
// import HomepageContentOne from '../Pages/Homepage/HomepageContent/HomepageContentOne'
// import Spinner from '../Spinner/Spinner'

// export default function Layout() {
//   return (
//     <div>
//       <Spinner/>
//       <Header />
//       {/* <HomepageContentOne /> */}
//       <div clasName='mt-5 pt-5'>
//         <Outlet/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import Spinner from '../Spinner/Spinner';
import ScrollToTop from '../Component/ScrollToTop/ScrollToTop';
export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <>
          <ScrollToTop/>
          <Header />
      
            <Outlet  />
   
          <Footer />
        </>
      )}
    </div>
  );
}
