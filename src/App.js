
import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
