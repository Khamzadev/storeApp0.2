import React, {useEffect, useState} from 'react';
import "../../style.css"
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneProducts} from "../../redux/reducers/oneProduct";
import {updateProduct} from "../../redux/reducers/products";
const Edit = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {data} = useSelector(store => store.oneProduct)
    const [editP,setEditP] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getOneProducts(id))
    }, [id]);
    useEffect(() => {
        setEditP({...data,img:[]})
    }, [data]);
    const onChange = (e) => {
        e.target.name !== "img" ?
        setEditP({...editP,[e.target.name]: e.target.value}) : setEditP({...editP,img:[,...editP.img,`./photos/${e.target.value.slice(12,e.target.value.length)}`].filter(item => item)})
    }
    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(updateProduct(editP))
        navigate('/shop')
    }
    console.log(editP)
    return (
        <section className="admin-product">
            <form className="login__form" onSubmit={onSubmit}>
                <h2 style={{color:"white"}}>Update</h2>
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
                    <button disabled={editP.img?.length === 4 ? false : true} className="login__form-btn" type={"submit"}>
                        Изменить
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Edit;