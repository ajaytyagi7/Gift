import { enqueueSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'

const ManageGift = () => {
    const [GiftList, setGiftList] = useState([])

    const fetchGift = async () => {
        const res = await fetch('http://localhost:4000/gift/getall')
       console.log(res.status)

       const data=await res.json()
         console.log(data)
         setGiftList(data)
    }

    useEffect(() => {
        fetchGift()
    }, [])

    const deleteGift = async (id) => {
        const res=await fetch('http://localhost:4000/gift/delete/'+id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await res.json();
        console.log(data)
        fetchGift()
         
        if(res.status===200){
            enqueueSnackbar('Product Deleted Successfully',{variant:'success'})
        }else{
            enqueueSnackbar('Something went wrong',{variant:'error'})
        }
    }

    const displayGiftData=()=>{
        return <table className="table table-secondary">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Delete Data</th>

                </tr>
            </thead>
            <tbody>
                {
                    GiftList.map((gift) => {
                        return <tr>
                            <td>{gift.name}</td>
                            <td>{gift.price}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteGift(gift._id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
           </table>
    }


  return (
    <div className='container-fluid'>
        {displayGiftData()}
    </div>
  )
}

export default ManageGift