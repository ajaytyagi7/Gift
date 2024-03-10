import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GiftDetails = () => {

    const { id } = useParams();

    const [GiftData, setGiftData] = useState(null);

    const fetchGiftData = async () => {
        const res = await fetch('http://localhost:4000/gift/getbyid/' +id);
        console.log(res.staus)

        const data = await res.json()
        console.log(data)
        setGiftData(data)

    }

    const displayGiftData = () => {
        if(GiftData==!null){
            return <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={'http://localhost:4000/' +GiftData.image} className='img-fluid' alt='' />
                    </div>
                    <div className='col-md-6'>
                        <h4>{GiftData.name}</h4>
                        <h6>₹ {GiftData.price}</h6>
                        <p>{GiftData.description}</p>
                        <button className='btn btn-dark'>Buy Now</button>
                    </div>    
                    
                </div>
            </div>
               
            
        }
    }

    useEffect(() => {
        fetchGiftData();
    }, []);

  return (
    <div>
        <div className='container'>
            {displayGiftData()}
        </div>
    </div>
  )
}

export default GiftDetails