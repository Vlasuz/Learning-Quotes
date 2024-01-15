import { Route, Routes, useLocation } from 'react-router-dom';
import './App.styled';
import { AppStyled } from './App.styled';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import { routes } from './functions/routes';
import { Header } from './components/Header/Header';
import { HeaderLogin } from './components/HeaderLogin/HeaderLogin';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ScrollBarStyle } from './ScrollBarStyle.styled';

export const App = () => {

  const [routesList] = useState(routes());
  const location = useLocation();

  return (
    <>
      <ScrollBarStyle/>

      <AppStyled>
        {location.pathname === '/' || location.pathname === '/Learning-Quotes' ? <Header /> : <HeaderLogin />}
          <TransitionGroup component={null}>
            <CSSTransition key={location.pathname} classNames='fade' timeout={300}>
              <Routes location={location}>
                {routesList.map(route => 
                  <Route key={route.path} element={route.element} path={route.path} />
                )}
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        <Footer/>
      </AppStyled>
    </>
  );
}
