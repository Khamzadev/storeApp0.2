import React, {useEffect, useState} from 'react';
import f1 from '../../../photos/f1.jpeg'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getProducts} from "../../../redux/reducers/products";
import Edit from "../../../components/Edit/Edit";
const Product1 = () => {
    const {data} = useSelector(store => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [deleteProduct]);
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const userU = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): ""
    console.log(userU)
    return (
        <section id="product1" className="section- lps">
            <h2>Featured Products</h2>
            <p>Summer Collection</p>
            {
                userU.user?.email === "admin@gmail.com" || userU?.email === "admin@gmail.com"?
                    <button className="product__add" onClick={() => navigate("/add")}>add product</button>
                    : ""

            }
            <div className="pro-container">
                {
                    data?.map(item => (
                        <Link key={item.id} to={`/oneProduct/${item.id}`} className="pro">
                            {
                                userU.user?.email === "admin@gmail.com" || userU?.email === "admin@gmail.com" ?
                                    <button className={"pro__btn"} onClick={(e) => {
                                    e.preventDefault()
                                    navigate(`/edit/${item.id}`)
                                }} >Edit</button> : ""
                            }
                            {
                                userU.user?.email === "admin@gmail.com" || userU?.email === "admin@gmail.com" ?
                                    <button className="pro__delete" onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(deleteProduct(item.id))
                                    }}>Delete</button> : ""
                            }

                            <img src={`${pathname === "/shop" ? item.img[0] : `.${item.img[0]}`}`} alt=""/>
                            <div className="des">

                                <span>{item.title}</span>
                                <h5>Cartoon {item.category}</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>${item.price}</h4>
                            </div>
                        </Link>
                    ))
                }




            </div>


        </section>
    );
};

export default Product1;