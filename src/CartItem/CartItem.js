import React from 'react'
import s from "./CartItem.module.css"
import { useDispatch } from 'react-redux'
import { incriment_count_action } from '../store/cartReducer'
import { dicriment_count_action } from '../store/cartReducer'

function CartItem({id,title,count}) {
    let dispatch = useDispatch()
  return (
    <div className={s.cart_item}>
        <h2>{title}</h2>
        <div className={s.cart_button}>
            <button onClick={()=>dispatch(incriment_count_action(id))}>+</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(dicriment_count_action(id))}>-</button>
        </div>
    </div>
  )
}

export default CartItem