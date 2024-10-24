
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './component/AddProducts';
import EditProducts from './component/EditProducts';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<AddProducts/>}/>
      <Route path='/editProduct/:id' element={<EditProducts/>}/>
    </Routes>
    </>
   
  );
}

export default App;
