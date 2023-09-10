import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneProducts} from "../../redux/reducers/oneProduct";
import {addProduct, updateProduct} from "../../redux/reducers/products";

const Add = () => {
    const dispatch = useDispatch()
    const [editP,setEditP] = useState({img:[]

    })
    const {idEnd} = useSelector(store => store.products)
    const navigate = useNavigate()
    const onChange = (e) => {
        e.target.name !== "img" ?
            setEditP({...editP,[e.target.name]: e.target.value}) : setEditP({...editP,img:[,...editP.img,`./photos/${e.target.value.slice(12,e.target.value.length)}`].filter(item => item)})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct({...editP,sizes: [
                "X-Small",
                "Small",
                "Madium",
                "Large",
                "X-Large"
            ],id:idEnd + 1}))
        navigate('/shop')
    }
    return (
        <section className="admin-product">
            <form className="login__form" onSubmit={onSubmit}>
                <h2 style={{color:"white"}}>Add Product</h2>
                <div className="login__form-block">
                    <label htmlFor="12" className={'edit__label'}>
                        Title
                    </label>
                    <input type="text" name="title" onChange={onChange} value={editP.title} placeholder={"title"}  className="login__form-input"/>
                </div>
                <div className="login__form-block">
                    <label htmlFor="12" className={'edit__label'}>
                        Price
                    </label>
                    <input type="text" name="price" onChange={onChange} value={editP.price} placeholder={"price"}  className="login__form-input"/>

                </div>
                <div className="login__form-block">
                    <label htmlFor="12" className={'edit__label'}>
                        Category
                    </label>
                    <select name="category" onChange={onChange} value={editP.price}  className="login__form-input">
                        <option selected disabled={true} >
                            Выберите
                        </option>
                        <option value={"T-Shirts"}>
                            T-Shirts
                        </option>
                        <option value={"T-sagas"}>
                            T-sagas
                        </option>
                    </select>

                </div>
                <div className="login__form-block">
                    <label htmlFor="12" className={'edit__label'}>
                        Desc
                    </label>
                    <input id="12" type="text" onChange={onChange} name="desc" value={editP.desc} placeholder={"desc"}  className="login__form-input"/>
                </div>
                <div className="login__form-block">
                    <label htmlFor="12" className={'edit__label'}>
                        Images Выберано {editP.img?.length} из 4
                    </label>
                    <input  type="file" onChange={onChange} name={"img"}  className="login__form-input"/>
                </div>
                <div className="login__form-block">
                    <button disabled={editP.img?.length === 4 && editP.category && editP.title && editP.desc && editP.price ? false : true} className="login__form-btn" type={"submit"}>
                        Add
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Add;