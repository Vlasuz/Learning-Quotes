import { Route, Routes, useLocation } from 'react-router-dom';
import './App.styled';
import { AppStyled } from './App.styled';
import { Footer } from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { routes } from './functions/routes';
import { Header } from './components/Header/Header';
import { HeaderLogin } from './components/HeaderLogin/HeaderLogin';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ScrollBarStyle } from './ScrollBarStyle.styled';
import { Loader } from './components/Loader/Loader';
import getCookie from './functions/getCookie';

export const App = () => {

  const [routesList] = useState(routes());
  const location = useLocation();
  const [loading, setLoading] = useState(false)

  const toggleLoader = (value) => {
    setLoading(value);
  }

  useEffect(() => {
    getCookie('token');

    console.log(getCookie('token'));
  }, [])

  return (
    <>    
      <ScrollBarStyle/>

      <Loader loading={loading}/>

      <AppStyled>
        {location.pathname === '/' || location.pathname === '/Learning-Quotes' ? <Header /> : <HeaderLogin />}
          <TransitionGroup component={null}>
            <CSSTransition key={location.pathname} classNames='fade' timeout={300} onEnter={() => toggleLoader(true)} onExited={() => toggleLoader(false)}>
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
