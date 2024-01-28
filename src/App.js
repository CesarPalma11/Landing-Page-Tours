import './App.css';
import Footer from './Components/Pages/Footer';
import Navbar from './Components/Pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Rout from './Rout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Rout />
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
