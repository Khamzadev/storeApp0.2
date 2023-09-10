import React, {useEffect, useState} from 'react';

import Product1 from "../Home/Product1/Product1";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneProducts} from "../../redux/reducers/oneProduct";
import {addCart} from "../../redux/reducers/user";
const OneProduct = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {data} = useSelector(store => store.oneProduct)
    const [active,setActive] = useState(0)
    const [dataC , setDataC] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getOneProducts(id))
    }, [id]);
    useEffect(() => {
        setDataC({...data,img:data?.img?.filter((item,idx) => idx === active).join(""),sizes:"X-Small"})
    },[data])
    const handlerChange = (e) => {
        setDataC({...dataC,sizes:e.target.value})
    }
    console.log(dataC)
    const userU = localStorage.getItem("user") ? localStorage.getItem("user") : ""
    return (
        <>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={`.${data?.img?.filter((item,idx) => idx === active)}`}  width="100%" id="MainImg" alt=""/>

                    <div className="small-img-group">
                        {
                            data.img?.map((item,idx) => (
                                <div key={idx} onClick={() => setActive(idx)} className="small-img-col">
                                    <img src={`.${item}`} width="100%" className="small-img" alt=""/>

                                </div>

                            ))
                        }

                    </div>

                </div>

                <div className="single-pro-details">
                    <h6>Home / {data.category}</h6>
                    <h4>{data.title}</h4>
                    <h2>${data.price}</h2>
                    <select onChange={handlerChange}>

                        {
                            data?.sizes?.map((item,idx) => (
                                <option value={item} key={idx}>{item}</option>
                            ))
                        }
                    </select>
                    <input type="number" value="1"/>
                    <button className="normal btn-one"  onClick={() => {
                        if (userU){
                            dispatch(addCart(dataC))
                        }
                        else{
                            navigate("/register")
                        }
                    }}>Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>{data.desc}</span>

                </div>
            </section>
            <Product1/>
        </>

    );
};

export default OneProduct;