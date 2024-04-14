import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('  *'),
    password: Yup.string().required(' *').min(8, 'Password is too short')
   
  
  });


const Login = () => {

    const navigate = useNavigate()
    const LoginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values)
            const res = await fetch('http://localhost:4000/user/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setSubmitting(false)
            console.log(res.status)

            if (res.status === 200) {
                enqueueSnackbar('Login Success', { variant: 'success' })
                navigate('/Home');
            } else if(res.status === 401) {
                enqueueSnackbar('Inavlid  ', { variant: 'error' })
            }else{
                enqueueSnackbar('Something went wrong ', { variant: 'error' })
            
            }
        },
        validationSchema: SignupSchema
    })
  return (
    <div className='container-fluid login-bg-img text-white'>
        <div className="col-md-3 mx-auto py-5">
            <div className=" mt-5">
                <div className="card-body">
                    <form onSubmit={LoginForm.handleSubmit} >
                        <h1 className="text-center">Login</h1><hr />
                        <span className='ms-4 fs-6 text-danger'>{LoginForm.touched.email && LoginForm.errors.email}</span>
                        <input type="text" className="form-control" placeholder="Email" id='email' onChange={LoginForm.handleChange} value={LoginForm.values.email}/>

                         <span className='ms-4 fs-6 text-danger'>{LoginForm.touched.password && LoginForm.errors.password}</span>
                        <input type="text" className="form-control mb-3" placeholder="Password" id='password'  onChange={LoginForm.handleChange} value={LoginForm.values.password}/>

                        <button className="btn btn-outline-primary w-100 mb-3">Login</button>
                        <p className='text-center mt-3'>Don't Have an Account ?  <a className=" text-decoration-none" href="/Signup">Signup</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login