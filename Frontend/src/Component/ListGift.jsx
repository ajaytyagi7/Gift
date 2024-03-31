import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

const ListGift = () => {
    const [giftList, setGiftList] = useState([])
    const [masterList, setMasterList] = useState([])

    const priceFilter=['100-200','200-300','300-500','500-800','800-1000','1000-1200','12000-15000']
    const [priceList, setpriceList] = useState([])

    const filterprice= (e) => {
        console.log(e.target.value);
        const filterData=priceList.filter((gift)=>{return gift.price <=parseInt(e.target.value)});
        setGiftList(filterData);
    }
    const SelectPrice = (e,priceFilter) => {
        console.log(e.target.checked);
        if(priceList.includes(priceFilter)){
            const filterpriceFilter=priceList.filter((b)=>{return b!==priceFilter});
            setpriceList(filterpriceFilter);
            if(filterpriceFilter.length===0){
                setGiftList(masterList);
            }else{
                const filterData=giftList.filter((price) =>{return filterpriceFilter.includes(price.price)});
                setGiftList(filterData);
            }
        }else{
            setpriceList([...priceList,priceFilter]);
            const filterData=masterList.filter((price) =>{return [...priceList,priceFilter].includes(price.price)});
            console.log(filterData);
            setGiftList(filterData);
        
        }

    }

    

    const fetchGiftData = async () => {
        const res = await fetch('http://localhost:4000/gift/getall')
        const data = await res.json()
        setGiftList(data)
    }

    const displayGiftData = () => {
        return giftList.map((gift) => {
            return (
                <div className="col-md-4 p-3">
                        <div className='card shadow'>
                            <div>

                                <img src={'http://localhost:4000/' + gift.image} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6>{gift.name}</h6>
                                <h6 >₹{gift.price}</h6>
                                <Link to={'/GiftDetails/' + gift._id} className='p-1 btn btn-warning  float-end'>View Details</Link> 
                                <p>⭐ Fast Devilery</p>

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
            <div className='row p-3'>
                <div className="col-md-3">
                    <div className="shadow p-3">
                        <h4>Filter</h4><hr />
                        <h6 className=''>Price</h6><hr />
                        {
                            priceFilter.map((price)=>{
                                return(
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={price} id="flexCheckDefault" onChange={(e)=>{SelectPrice(e,price)}}/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            {price}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-9 row ">
                {displayGiftData()}
                </div>

            </div>
        
       
           
    </div>
  )
}

export default ListGift