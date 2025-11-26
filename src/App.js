import {Container} from 'react-bootstrap';
import Footer from './Conponents/Footer';
import Header from './Conponents/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
    );
}

export default App;
