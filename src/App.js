
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Prodocut from './components/Prodocut/Prodocut';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Sinup from './components/Sinup/Sinup';

function App() {
  return (
    <div className="">
  <Header> </Header>

  <Routes>
 <Route path='/' element={<Home></Home>}> </Route>
 <Route path='About' element={<About></About>}> </Route>
 <Route path='Prodocut' element={<Prodocut></Prodocut>}> </Route>
 <Route path='Contacts' element={<Contacts></Contacts>}> </Route>
 <Route path='Login' element={<Login></Login>}> </Route>
 <Route path='Sinup' element={<Sinup></Sinup>}> </Route>
 <Route path='/Signup' element={<Sinup></Sinup>}></Route>


  </Routes>
 



    </div>
  );
}

export default App;
