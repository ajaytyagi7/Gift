import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import { enqueueSnackbar } from 'notistack';


const UploadGift = () => {
    const [selFile, setSelFile] = useState('');

    const uploadForm = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            image: ''
        },
        onSubmit: async (value,{ resetForm }) => {
            value.image = selFile;
            console.log(value)
            const res= await fetch('http://localhost:4000/gift/add',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(value)
            });
            const data = await res.json();
            sessionStorage.setItem('gift',JSON.stringify(data));
            if(res.status==200){
                enqueueSnackbar('Product Uploaded Successfully',{variant:'success'});
                resetForm();
            }else{
                enqueueSnackbar('Something went wrong',{variant:'error'});
            }

        }

        
    });
    const uploadFile = (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:4000/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            console.log("file uploads");
          }
        });
      };
    
  return (
    <div>
        <div className='col-md-5 mx-auto py-4'>
            <div className='card'>
                <div className='card-body'>
                <form onSubmit={uploadForm.handleSubmit}>
                <h1 className='text-center'>Upload Product</h1><hr />
                <span className='ms-4 fs-6 text-danger'>{uploadForm.errors.name}</span>
                <input type="text" className='form-control mb-2' placeholder='Product Name' id='name' onChange={uploadForm.handleChange} value={uploadForm.values.name} />

                <span className='ms-4 fs-6 text-danger'>{uploadForm.errors.price}</span>
                <input type="text" className='form-control mb-2' placeholder='Product Price' id='price' onChange={uploadForm.handleChange} value={uploadForm.values.price}/>

                <span className='ms-4 fs-6 text-danger'>{uploadForm.errors.description}</span>
                <input type="text" className='form-control mb-4' placeholder='Product Description' id='description' onChange={uploadForm.handleChange} value={uploadForm.values.description} />

                <input type="file" className='form-control mb-4' placeholder='Product Image' id='image' onChange={uploadFile}/>
                <button className='btn btn-info w-100'>Upload</button>
                


                </form>


                </div>
            </div>
        </div>
    </div>
  )
}

export default UploadGift