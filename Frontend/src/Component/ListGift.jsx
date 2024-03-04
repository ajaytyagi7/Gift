import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListGift = () => {
    const [giftList, setGiftList] = useState([])

    const fetchGiftData = async () => {
        const res = await fetch('http://localhost:4000/gift/getall')
        const data = await res.json()
        setGiftList(data)
    }

    const displayGiftData = () => {
        return giftList.map((gift) => {
            return (
                <div className="col-md-3">
                        <div className='card shadow'>
                            <div>

                                <img src={'http://localhost:4000/' + gift.image} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6>{gift.name}</h6>
                                <p >{gift.description}</p>
                                <h6 >₹ {gift.price}</h6>
                                <Link to={'/GiftDetails' + gift._id} className='btn btn-dark float-end'>View Details</Link>
                            </div>
                        </div>
                    
                </div>
            )
        })
    }

    useEffect(() => {
        fetchGiftData();
      }, [])
    


  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <h4>Filter</h4>    
                </div>
            </div>
            <div className='col-md-9 mt-5'>
                <div className="row gy-4">
                {displayGiftData()}
                </div>

            </div>
        </div>
    </div>
  )
}

export default ListGift