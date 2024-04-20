import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCartContext from '../CartContext';




const Cart = () => {

  const { id } = useParams();

  const {cartItems,removeItem,getcartTotal} = useCartContext();


  const displayCartData = () => {
    return <table className="table table-secondary">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete Data</th>

        </tr>
      </thead>
      <tbody>
        {
          cartItems.map((cart) => {
            return <tr>
              <td>{cart.name}</td>
              <td>{cart.price}</td>
              <td>{cart.quantity}</td>
              <td><button className='btn btn-danger' onClick={() => removeItem(cart._id)}>Delete</button></td>
            </tr>
          })
        }
      </tbody>
    </table>
  }


  return (
    <div>
      <div className='container-fluid mb-3'>
        {displayCartData()}
      </div>
      <div className='container-fluid'>
        <h3>Total Amount: {getcartTotal()}</h3>
      </div>
    </div>
  )
}

export default Cart