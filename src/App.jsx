import {Routes, Route} from 'react-router-dom'; 
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Navbar } from './components/Navbar';
import { Products } from './pages/Products';


//import { Link } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products/:productId' element={<Products />} />
    </Routes>
    
    </>
  )
}

export default App