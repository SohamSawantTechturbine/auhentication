import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./components/Home"
import { Login } from "./components/Login"
import './App.css'
import { Register } from './components/Register'
import { AuthContextProvider, useAuthContext} from './context'
import { About } from './components/About/About'
import Contact from './components/Contact/Contact'
import { Navbar } from './components/Navbar/Navbar'
import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Addcart from './components/AddCart/Addcart'
import Payment from './components/Payment/Payment'
//import { useAuthContext } from '../context';


function App() {
  const { mode,statemodename,modename ,setMode} = useAuthContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
 
  
  return (
    <>
      {/* <Login/> */}
      <AuthContextProvider>
      
        <BrowserRouter>
        <Navbar onSearchChange={handleSearchChange}  mode={mode} modename={modename} toggleMode={setMode} />
     
          <Routes>   <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home  searchTerm={searchTerm} />} />
         
            <Route path="/register" element={<Register />} />
            <Route path="/about"  element={<About/>}/>
            <Route path="/contact"  element={<Contact/>}/>
            <Route path="/addcart" element={<Addcart/>}/>
            <Route path="/payment" element={<Payment/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App
