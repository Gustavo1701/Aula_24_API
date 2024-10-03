import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage/indes'
import Carrinho from './components/Carrinho';
import { createContext, useState } from 'react';

const CarrinhoContext = createContext();

function App() {

  const [lista, setLista] = useState([]);

  return (

    <CarrinhoContext.Provider value={{ lista, setLista }}>
      
      <Carrinho />
      <BrowserRouter>

        <Link to="/" >Home</Link>
        <Link to="/Login" >Login</Link>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

    </CarrinhoContext.Provider>

  )
}

export default App
