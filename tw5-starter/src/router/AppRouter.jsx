import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Basket from '../pages/Basket';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;