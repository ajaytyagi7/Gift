import React from 'react'

const Checkout = () => {
  return (
    <div>
        <div className='com-md-6 w-50 mx-auto p-4'>
            <div className='card'>
                <div className="card-body">
                    <h3 className='text-center fw-bold'>Checkout</h3><hr />
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <label htmlFor="" > First Name</label>
                            <input type='text ' className='form-control'  />
                        </div>
                        <div className="col-md-6  mt-3">
                            <label htmlFor="">Last Name</label>
                            <input type='text' className='form-control'  />
                        </div>
                    </div>
                    <label className=' mt-3' htmlFor="">Street Address</label>
                    <input type='text' className='form-control' />
                    <div className="row">
                        <div className="col-md-6  mt-3">
                            <label htmlFor="">City</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className="col-md-6  mt-3">
                            <label htmlFor="">Postal code</label>
                            <input type='text' className='form-control' />
                        </div>
                        <label className=' mt-3' htmlFor="">State</label>
                        <select className='form-control '>
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

                        <label className=' mt-3' htmlFor="">Phone Number</label>
                        <input type='text' className='form-control' />
                       <input type="checkbox" />
                        <button className='btn btn-primary mt-3'>Place Order</button>



                       

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout