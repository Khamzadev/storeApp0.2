import React from 'react';
import f1 from "../../photos/f1.jpeg"
import {useDispatch, useSelector} from "react-redux";
import {addCount, deleteCard} from "../../redux/reducers/user";
const Cart = () => {
    const {cart} = useSelector(store => store.user)
    const dispatch = useDispatch()
    const onChange = (e) => {
        dispatch(addCount({id:e.target.name,count:e.target.value}))
    }
    return (
        <>
            <section id="cart" className="section-p1">
                <table width="100%">
                    <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Size</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item,idx) => (
                            <tr>
                                <td onClick={() => dispatch(deleteCard(item))}><a href="#"><i className="far fa-times-circle"></i></a></td>
                                <td><img src={`.${item.img}`} alt=""/></td>
                                <td>{item.title}{idx}</td>
                                <td>{item.sizes}</td>
                                <td><input onChange={onChange} name={item.id} type="number" value={item.count} /></td>
                                <td>${item.price * item.count}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </section>
            <section id="cart-add" className="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon"/>
                            <button className="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Total</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>${cart.reduce((acc,rec) => acc+(rec.price * rec.count),0)}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${cart.reduce((acc,rec) => acc+(rec.price * rec.count),0)}</strong></td>
                        </tr>
                    </table>
                    <button class="normal">Proceed to checkout</button>

                </div>
            </section>
        </>

    );
};

export default Cart;