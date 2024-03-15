import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('  *'),
    password: Yup.string().required(' *').min(8, 'Password is too short')
   
  
  });


const Login = () => {

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
            } else if(res.status === 401) {
                enqueueSnackbar('Inavlid  ', { variant: 'error' })
            }else{
                enqueueSnackbar('Something went wrong ', { variant: 'error' })
            
            }
        },
        validationSchema: SignupSchema
    })
  return (
    <div className='bg-secondary-subtle'>
        <div className="col-md-4 mx-auto py-5">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={LoginForm.handleSubmit} >
                        <h2 className="text-center">Login</h2><hr />
                        <span className='ms-4 fs-6 text-danger'>{LoginForm.touched.email && LoginForm.errors.email}</span>
                        <input type="text" className="form-control" placeholder="Email" id='email' onChange={LoginForm.handleChange} value={LoginForm.values.email}/>

                         <span className='ms-4 fs-6 text-danger'>{LoginForm.touched.password && LoginForm.errors.password}</span>
                        <input type="text" className="form-control mb-3" placeholder="Password" id='password'  onChange={LoginForm.handleChange} value={LoginForm.values.password}/>

                        <button className="btn btn-dark w-100 mb-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login