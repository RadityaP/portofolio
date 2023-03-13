import React from 'react';
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { useLocation, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import PeminjamanPPBS from '../pages/Works/PeminjamanPPBS';
import Owvix from '../pages/Works/Owvix';
import Kemenko from '../pages/Works/Kemenko';
import BNI from '../pages/Works/BNI';
import Avana from '../pages/Works/Avana';
import ScrollToTop from './ScrollToTop';

// const router = createBrowserRouter(
//   createRoutesFromElements([
//     <Route path="/" element={<Home />} />,
//     <Route path="/peminjaman-ppbs" element={<PeminjamanPPBS />} />,
//   ]),
// );

const AvailableRoutes = () => {
  const location = useLocation();
  return (
    <ScrollToTop>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/peminjaman-ppbs" element={<PeminjamanPPBS />} />
          <Route path="/owvix" element={<Owvix />} />
          <Route path="/simonev-kemenko" element={<Kemenko />} />
          <Route path="/bni" element={<BNI />} />
          <Route path="/avana" element={<Avana />} />
        </Routes>
      </AnimatePresence>
    </ScrollToTop>
  );
};
export default AvailableRoutes;
