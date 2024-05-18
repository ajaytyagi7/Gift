import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import * as Yup from 'yup'

const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required(' * ').min(4, 'Name is too short'),
    email: Yup.string().email('Invalid email').required('  *'),
   street: Yup.string().required(' * '),
    city: Yup.string().required(' * '),
    state: Yup.string().required(' * '),
    zip: Yup.string().required(' * '),
    phone: Yup.string().required(' * ')


  
  });



const Checkout = () => {

    const  CheckoutForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            phone: ''
            
        },

        onsubmit: async (values, { setSubmitting }) => {
            console.log(values)
            const res = await fetch('http://localhost:4000/checkout/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setSubmitting(false)
            console.log(res.status)
            if (res.status === 200) {
                enqueueSnackbar('Checkout Success', { variant: 'success' })
            } else {
                enqueueSnackbar('Something went wrong ', { variant: 'error' })
            }   
        },
        validationSchema: CheckoutSchema
    })  
  return (
    <div>
        <div className='col-md-6 w-50 mx-auto p-4'>
            <div className='shadow p-5'>
                <div className="card-body">
                <form onSubmit={CheckoutForm.handleSubmit} >

                    <h3 className='text-center fw-bold'>Checkout</h3><hr />
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <label htmlFor="name" > Name</label>
                            <span className='ms-4 fs-6 text-danger'>{CheckoutForm.touched.name && CheckoutForm.errors.name}</span>

                            <input type='text ' id='name' className='form-control border border-dark' onChange={CheckoutForm.handleChange} value={CheckoutForm.values.name} />
                        </div>
                        <div className="col-md-6  mt-3">
                            <label htmlFor="email"> Email</label>
                            <span className='ms-4 fs-6 text-danger'>{CheckoutForm.touched.email && CheckoutForm.errors.email}</span>

                            <input type='text' id='email' className='form-control border border-dark' onChange={CheckoutForm.handleChange} value={CheckoutForm.values.email} />
                        </div>
                    </div>
                    <label className=' mt-3' htmlFor="street">Street Address</label>
                    <span className='ms-4 fs-6 text-danger'>{CheckoutForm.touched.street && CheckoutForm.errors.street}</span>

                    <input type='text' id='street' className='form-control border border-dark' onChange={CheckoutForm.handleChange} value={CheckoutForm.values.street} />
                    <div className="row">
                        <div className="col-md-6  mt-3">
                            <label htmlFor="city">City</label>
                             <span className='ms-4 fs-6 text-danger'>{CheckoutForm.touched.city && CheckoutForm.errors.city}</span>

                            <input type='text' id='city' className='form-control border border-dark' onChange={CheckoutForm.handleChange} value={CheckoutForm.values.city} />
                        </div>
                        <div className="col-md-6  mt-3">
                            <label htmlFor="zip">Postal code</label>
                             <span className='ms-4 fs-6 text-danger'>{CheckoutForm.touched.zip && CheckoutForm.errors.zip}</span>

                            <input type='text' id='zip' className='form-control border border-dark' onChange={CheckoutForm.handleChange} value={CheckoutForm.values.zip} />
                        </div>
                        <label className=' mt-3' htmlFor="state">State</label>
                        <span className='ms-4 fs-6 text-danger'>{CheckoutForm.touched.state && CheckoutForm.errors.state}</span>

                        <select id='state' className='form-control border border-dark' onChange={CheckoutForm.handleChange} value={CheckoutForm.values.state}>
                             <option >None</option>

                            <option value="AP">Andhra Pradesh</option>
                            <option value="AR">Arunachal Pradesh</option>
                            <option value="AS">Assam</option>
                            <option value="BR">Bihar</option>
                            <option value="CT">Chhattisgarh</option>
                            <option value="GA">Gujarat</option>
                            <option value="HR">Haryana</option>
                            <option value="HP">Himachal Pradesh</option>
                            <option value="JK">Jammu and Kashmir</option>
                            <option value="GA">Goa</option>
                            <option value="JH">Jharkhand</option>
                            <option value="KA">Karnataka</option>
                            <option value="KL">Kerala</option>
                            <option value="MP">Madhya Pradesh</option>
                            <option value="MH">Maharashtra</option>
                            <option value="MN">Manipur</option>
                            <option value="ML">Meghalaya</option>
                            <option value="MZ">Mizoram</option>
                            <option value="NL">Nagaland</option>
                            <option value="OR">Odisha</option>
                            <option value="PB">Punjab</option>
                            <option value="RJ">Rajasthan</option>
                            <option value="SK">Sikkim</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TG">Telangana</option>
                            <option value="TR">Tripura</option>
                            <option value="UT">Uttarakhand</option>
                            <option value="UP">Uttar Pradesh</option>
                            <option value="WB">West Bengal</option>
                            <option value="AN">Andaman and Nicobar Islands</option>
                            <option value="CH">Chandigarh</option>
                            <option value="DN">Dadra and Nagar Haveli</option>
                            <option value="DD">Daman and Diu</option>
                            <option value="DL">Delhi</option>
                            <option value="LD">Lakshadweep</option>
                            <option value="PY">Puducherry</option>
                        </select>

                        <label className=' mt-3' htmlFor="phone">Phone Number</label>
                        <span className='ms-4 fs-6 text-danger'>{CheckoutForm.touched.phone && CheckoutForm.errors.phone}</span>

                        <input type='text' id='phone' className='form-control border border-dark' onChange={CheckoutForm.handleChange} value={CheckoutForm.values.phone} />
                        <button className='btn btn-primary mt-3 '> Next</button>



                       

                    </div>
                </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout