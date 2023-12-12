import { Route, Routes, useLocation } from 'react-router-dom';
import './App.styled';
import { AppStyled } from './App.styled';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import { routes } from './functions/routes';
import { Header } from './components/Header/Header';
import { HeaderLogin } from './components/HeaderLogin/HeaderLogin';

export const App = () => {

  const [routesList] = useState(routes());
  const location = useLocation();

  return (
    <AppStyled>
      {location.pathname === '/' || location.pathname === '/Learning-Quotes' ? <Header /> : <HeaderLogin />}

        <Routes>
          {routesList.map(route => 
            <Route key={route.path} element={route.element} path={route.path} />
          )}
        </Routes>

      <Footer/>
    </AppStyled>
  );
}
