import './App.styled';
import { AppStyled } from './App.styled';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <AppStyled>
      <Header/>

      <Footer/>
    </AppStyled>
  );
}
