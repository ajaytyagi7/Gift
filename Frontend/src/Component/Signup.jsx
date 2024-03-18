import React from 'react'
import {useFormik} from 'formik'
import { enqueueSnackbar } from 'notistack'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string().required(' * ').min(4, 'Name is too short'),
  email: Yup.string().email('Invalid email').required('  *'),
  password: Yup.string().required(' *').min(8, 'Password is too short')
    .matches(/[a-z]/, 'Password must include Lowercase letter')
    .matches(/[A-Z]/, 'Password must include uppercase letter')
    .matches(/\W/, 'Password must include Number'),
  confirm: Yup.string().oneOf([Yup.ref('password')], null, 'Confirm Passwords must match ').required(' *')

});


const Signup = () => {

  const SignupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values)
      const res = await fetch('http://localhost:4000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),

        headers: {
          'Content-Type': 'application/json'
        },
      });
      setSubmitting(false)
      console.log(res.status)

      if (res.status === 200) {
        enqueueSnackbar('Signup Success', { variant: 'success' })
      } else {
        enqueueSnackbar('Something went wrong ', { variant: 'error' })
      }



     
    },
    validationSchema: SignupSchema


   

  })


  return (
    <div className='Signup-bg-img text-white'>
      <div className='col-md-4 mx-auto py-5 '>
        <div className=' mt-5 '>
          <div className='card-body '>
            <form className='' onSubmit={SignupForm.handleSubmit} >
            <h1 className='text-center'>Signup</h1><hr />
            <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.name && SignupForm.errors.name}</span>
            <input type='text' className='form-control p-2 border border-dark bg-primary-subtle ' placeholder='Name' id='name' onChange={SignupForm.handleChange} value={SignupForm.values.name} />

            <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.email && SignupForm.errors.email}</span>
            <input type='text' className='form-control p-2  border border-dark bg-primary-subtle' placeholder='Email' id='email' onChange={SignupForm.handleChange} value={SignupForm.values.email}/>

            <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.password && SignupForm.errors.password}</span>
            <input type='text' className='form-control p-2  border border-dark bg-primary-subtle' placeholder='Password' id='pssword' onChange={SignupForm.handleChange} value={SignupForm.values.password}/>

            <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.confirm && SignupForm.errors.confirm}</span>
            <input type='text' className='form-control mb-3 p-2  border border-dark bg-primary-subtle' placeholder='Confirm Password' id='confirm' onChange={SignupForm.handleChange} value={SignupForm.values.confirm}/>
            
            <button className='btn btn-primary w-100 mb-3'>Signup</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup