import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSelector } from 'react-redux';
import setCookie from './functions/setCookie';

export const App = () => {

  const [routesList] = useState(routes());
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const token = getCookie('token');
  const langCook = getCookie('LangCookie')
  const landuageStorage = useSelector(state => state.toolkit.language)
  console.log(landuageStorage);

  if (langCook === undefined) {
    setCookie('LangCookie', 'russian')
  }

  const toggleLoader = (value) => {
    setLoading(value);
  }

  useEffect(() => {
    setIsLoggedIn(!!token)
    
    token === undefined || token === '' ? navigate('/') : navigate('/map');
  }, [token])

  return (
    <>    
      <ToastContainer/>

      <ScrollBarStyle/>

      <Loader loading={loading}/>

      <AppStyled>
        <GoogleOAuthProvider clientId="1071605377094-5663q4ujiakepp8ri3mis7buhclag70l.apps.googleusercontent.com">
          {isLoggedIn ? <HeaderLogin /> : <Header />}
            <TransitionGroup component={null}>
              <CSSTransition key={location.pathname} classNames='fade' timeout={300} onEnter={() => toggleLoader(true)} onExited={() => toggleLoader(false)}>
                <Routes location={location}>
                  {routesList.map(route => 
                    <Route key={route.path} element={route.element} path={route.path} />
                  )}
                </Routes>
              </CSSTransition>
            </TransitionGroup>
        </GoogleOAuthProvider>;
        <Footer/>
      </AppStyled>
    </>
  );
}
