import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';


import { Navbar } from './component/Navbar'
import { Home } from './pages/Home'
import {Register} from './pages/Register'
import { Login } from './pages/Login' 
import { Cart } from './pages/Cart'
import { Footer } from './component/Footer'
import { Pizza } from './pages/Pizza'
import { NotFound } from './component/NotFound';
import { Profile } from './pages/Profile';


function App() {

  const[allPizzas, setAllPizzas] = useState([]);
  const[total,setTotal]=useState(0);
  const[countPizzas,setCountPizzas]=useState(0);

  return (
   
    <div>
      <Navbar
        total={total}
      ></Navbar>
      <Routes>
        <Route
          path="/"
          element={< Home 
            allPizzas={allPizzas}
            setAllPizzas={setAllPizzas}
            total={total}
            setTotal={setTotal}
            countPizzas={countPizzas}
            setCountPizzas={setCountPizzas}
          ></Home> }
        />

        <Route
          path="/register"
          element={< Register/>}
        />

        <Route
          path="/login"
          element={< Login/>}
        />

        <Route
          path="/cart"
          element={<Cart
            allPizzas={allPizzas}
            setAllPizzas={setAllPizzas}
            total={total}
            setTotal={setTotal}
            countPizzas={countPizzas}
            setCountPizzas={setCountPizzas}
          ></Cart>}
        />

        <Route
          path="/pizza/p001"
          element={< Pizza />}
        />

        <Route
          path="/404"
          element={< NotFound />}
        />

        <Route
          path="*"
          element={< NotFound />}
        />
        
        <Route
          path="/profile"
          element={< Profile />}
        />


      </Routes>
      <Footer></Footer>
    </div>

  )
}

/*  <>
      <Navbar
        total={total}
      ></Navbar>
      <Home 
        allPizzas={allPizzas}
        setAllPizzas={setAllPizzas}
        total={total}
        setTotal={setTotal}
        countPizzas={countPizzas}
        setCountPizzas={setCountPizzas}
      ></Home>
      <Pizza></Pizza>
      { <Register></Register> }
      {/<Login></Login> }
      <Cart
        allPizzas={allPizzas}
        setAllPizzas={setAllPizzas}
        total={total}
        setTotal={setTotal}
        countPizzas={countPizzas}
        setCountPizzas={setCountPizzas}
      ></Cart>
      <Footer></Footer> 
    </> */
export default App
