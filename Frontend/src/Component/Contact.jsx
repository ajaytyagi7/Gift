import React from 'react'

const Contact = () => {
  return (
    <div className='container-fluid contact-bg-img text-white'>
        <div className="row">
            <div className="col-md-4 mx-auto py-5">
                <div className="shadow p-4">
                    <div className="card-body">
                        <h2 className='text-center'>Contact Us</h2>
                        <hr />
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control mb-3" id="name" placeholder='Enter name' />
                            </div>
                            <div className="form-group"> 
                                <input type="email" className="form-control mb-3" id="email"  placeholder='Enter Email'/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control mb-3" id="message" rows="3" placeholder='Enter Message'></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
