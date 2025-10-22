import {Container} from 'react-bootstrap';
import Footer from './Conponents/Footer';
import Header from './Conponents/Header';

function App() {
  return (
    <main>
      <Header />
      <Container>
        <h1>Welcome to MyApp</h1>
      </Container>
      <Footer />
    </main>
    );
}

export default App;
