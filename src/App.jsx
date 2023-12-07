import { Route, Routes } from 'react-router-dom';
import './App.styled';
import { AppStyled } from './App.styled';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useState } from 'react';
import { routes } from './functions/routes';

export const App = () => {

  const [routesList] = useState(routes())

  return (
    <AppStyled>
      <Header/>

        <Routes>
          {routesList.map(route => 
            <Route key={route.path} element={route.element} path={route.path} />
          )}
        </Routes>

      <Footer/>
    </AppStyled>
  );
}
