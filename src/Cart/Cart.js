import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { add_to_cart_action } from '../store/cartReducer'
import s from "./Cart.module.css"

function Cart() {
    const cart = useSelector(store=>store.cart)
    let dispatch = useDispatch()
  return (
    <div className={s.ca_cart}>
        <button className={s.cart_button} onClick={()=>dispatch(add_to_cart_action())}>Добавить</button>
        {cart.map(elem=><CartItem {...elem} key={elem.id}/> )}
    </div>
  )
}

export default Cart