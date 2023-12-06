import './App.styled';
import { AppStyled } from './App.styled';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main/Main';

export const App = () => {
  return (
    <AppStyled>
      <Header/>
        <Main />
      <Footer/>
    </AppStyled>
  );
}
