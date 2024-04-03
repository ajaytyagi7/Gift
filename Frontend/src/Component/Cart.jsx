import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




const Cart = () => {

  const [cartList, setcartList] = useState([])
  const { id } = useParams();

  const fetchCartData = async () => {
    const res = await fetch('http://localhost:4000/cart/getbyid'+id);
   console.log(res.staus)

    const data = await res.json()
    console.log(data)
    setcartList(data);
  }

  useEffect(() => {
    fetchCartData();
  }, []);

  const displayCartData = () => {
      return <table className="table table-secondary">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Delete Data</th>

              </tr>
          </thead>
          <tbody>
              {
                  cartList.map((cart) => {
                      return <tr>
                          <td>{cart.name}</td>
                          <td>{cart.price}</td>
                          <td>{cart.quantity}</td>
                          <td>{cart.total}</td>
                          <td><button className='btn btn-danger' onClick={()=>deleteCart(cart._id)}>Delete</button></td>
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
    </div>
  )
}

export default Cart