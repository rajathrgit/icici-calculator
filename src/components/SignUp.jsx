import React from 'react'
import {useForm} from 'react-hook-form';
import './SignUp.css'

function SignUp() {
    let{register,handleSubmit,formState:{errors}}=useForm();
    let isalpha=/^[0-9]+$/g
    const sendFormData=(data)=>{
        console.log(data);
    }
  return (
    <div className='container'>
    <form className='form' onSubmit={handleSubmit(sendFormData)}>
        <h1>Registration Form</h1>
        <div className='fname'>
            <input type="text" placeholder='FullName'
            {...register("fullname",{
                required:{value:true,message:"FullName is mandatory"},
                minLength:{value:4,message:"FullName should contain Minimum 4 character " },
                maxLength:{value:10,message:"FullName  Maximum 10 character allowed" }
            })} />
        </div>
        <div className='message'>
            {errors.fullname?.message}
        </div>
        <div className='password'> 
            <input type="text" placeholder='Password'
              {...register("password",{
                required:{value:true,message:"Password is mandatory"},
                minLength:{value:4,message:"password should contain Minimum 4 character " },
                maxLength:{value:10,message:"Password  Maximum 10 character allowed " }
            })} />
        </div>
        <div className='message'>
            {errors.password?.message}
        </div>
        <div className='buttonTag'>
            <button className='btn' type='submit'>Register</button>
        </div>

    </form>
    </div>
  )
}

export default SignUp