import React, {useEffect,useState} from 'react';
import logo from "../../../photos/usave.png"
import {Link} from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import {GrLogout} from "react-icons/gr"
import {useDispatch} from "react-redux";
import {logOutAcc} from "../../../redux/reducers/user";
const Header = () => {
    // const userU = localStorage.getItem("user") ? localStorage.getItem("user") : ""
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

    const handleLogout = () => {
        dispatch(logOutAcc());
        setIsLoggedIn(false); // Устанавливаем состояние "не вошел в систему"
    };
    return (
        <section id="header">
            <a href="#"><img src={logo} className="logo" alt="logoo"/></a>

            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><Link to={"/shop"}>Shop</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li id="lg-bag"><Link to={"/cart"}><i className="fa fa-shopping-bag"></i></Link></li>
                    {
                        isLoggedIn ? <li id="lg-bag" onClick={handleLogout}><Link to={"/"}><GrLogout/></Link></li> :<li id="lg-bag"><Link to={"/register"}><CgProfile/></Link></li>

                    }
                    <a href="#" id="close" className="fa fa-times"></a>

                </ul>
            </div>

            <div id="mobile">

                <a href="cart.html"><i className="fa fa-shopping-bag"></i></a>
                <i id="bar" class="fas fa-outdent"></i>
            </div>

        </section>
    );
};

export default Header;