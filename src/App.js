
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';



function App() {
  return (
    <div >
      
      <Navbar/>
      
      <Routes>
        <Route path='/main' element={<Main/>}/>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
      

    </div>
  );
}

export default App;
