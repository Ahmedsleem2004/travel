import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Nav from './Components/Nav/Nav'
import Index from './Components/Page/Index'
import About from './Components/Page/About';
import Footer from './Components/Footer/Footer';
import Tours from './Components/Page/Tours';
import ToursDetailes from './Components/Page/ToursDetailes';
import Destination from './Components/Page/Destination';
import DestinationDetailes from './Components/Page/DestinationDetailes';
import Blogs from './Components/Page/Blogs';
import Contact from './Components/Page/Contact';

function App() {

  const location = useLocation();

  return (  
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/About' element={<About />} />
        <Route path='/Tour' element={<Tours />} />
        <Route path='/ToursDetailes/:id' element={<ToursDetailes />} />
        <Route path='/Destination' element={<Destination />} />
        <Route path='/DestinationDetailes/:id' element={<DestinationDetailes />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      {location.pathname !== '/' && <Footer />}
    </>
  )
}

export default App;
