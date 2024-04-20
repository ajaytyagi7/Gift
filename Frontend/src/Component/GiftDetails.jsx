import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor/nohighlight';
import useCartContext from '../CartContext';


const GiftDetails = () => {

    const { id } = useParams();

    const [GiftData, setGiftData] = useState(null);
    const {addItem, checkItemExists,getcartTotal} = useCartContext();

    const fetchGiftData = async () => {
        const res = await fetch('http://localhost:4000/gift/getbyid/' + id);
        console.log(res.staus)

        const data = await res.json()
        console.log(data)
        setGiftData(data)

    }

    const displayGiftData = () => {
        if (GiftData !== null) {
            return <div>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={'http://localhost:4000/' + GiftData.image} className='img-fluid' alt='' />
                    </div>
                    <div className='col-md-6'>
                        <h3>{GiftData.name}</h3>
                        <p>⭐⭐⭐⭐⭐ Review 235</p>
                        <h6 className='fs-4'>₹ {GiftData.price}</h6><p>Inclusive of all taxes</p>
                        <button className='btn btn-warning'>Buy Now</button>
                        <button className=' display-1  btn btn-success mx-4' disabled={checkItemExists(GiftData._id) } onClick={() => {addItem(GiftData)}}>Add To Cart</button>
                        <h6 className='mt-3'>Product Description</h6>
                        <MDEditor.Markdown source={GiftData.description} style={{ whiteSpace: 'pre-wrap' }} />
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
            <div className='container-fluid mb-3'>
                {displayGiftData()}
            </div>
        </div>
    )
}

export default GiftDetails