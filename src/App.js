import {Routes,Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import './style.css'
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import OneProduct from "./pages/OneProduct/OneProduct";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Auth/Register/register";
import Login from "./pages/Auth/Login/Login";
import Edit from "./components/Edit/Edit";
import Add from "./components/Add/add";
function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={"/"} element={<Layout/>} >
                   <Route path={"/"} element={<Home/>}/>
                   <Route path={"/about"} element={<About/>}/>
                   <Route path={"/contact"} element={<Contact/>}/>
                   <Route path={"/shop"} element={<Shop/>}/>
                   <Route path={"/oneProduct/:id"} element={<OneProduct/>}/>
                   <Route path={"/cart"} element={<Cart/>}/>
              </Route>
              <Route path={"/edit/:id"} element={<Edit/>}/>
              <Route path={"/add"} element={<Add/>}/>
              <Route path={"/register"} element={<Register/>}/>
              <Route path={"/login"} element={<Login/>}/>

          </Routes>
      </div>

  );
}

export default App;
