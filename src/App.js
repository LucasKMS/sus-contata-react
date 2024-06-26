import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Agendamentos from './components/Agendamentos';
import MeuPerfil from './components/MeuPerfil';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
 

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/agendamentos' element={<Agendamentos />}></Route>
          <Route path='/meuperfil' element={<MeuPerfil />}></Route>
          <Route path='/cadastros' element={<Cadastro />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
