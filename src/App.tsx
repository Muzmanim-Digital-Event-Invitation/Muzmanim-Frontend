import { useLocation } from 'react-router-dom';
import './App.scss';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/event/'];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className='App'>
      {!shouldHideHeaderFooter && <Header />}
      <Content />
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
