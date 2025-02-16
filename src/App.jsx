import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
 const { register, handleSubmit, watch,  formState:{errors} , reset} = useForm()
 const [status, setStatus] = useState(null)
 const password = watch("password", "")
 const onSubmit = (data) =>{
  setStatus(data)
  reset()
 }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name: </label>
        <input {...register('nickName' , {required: "Name is required", minLength:{value: 4, message:"Must be at least 4 characters"}, maxLength:{value: 10, message:"Must be under 10 characters"}})} type="text" placeholder='Enter your name'/>
        {errors.nickName && <p style={{color: "red"}}>{errors.nickName.message}</p>}
        </div>
        <div>
          <label>Email: </label>
          <input {...register('email', {required: "Email is required"})} type="email" placeholder='Enter Your mail adress'/>
          {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
        </div>
        <div>
          <label>Age: </label>
          <input {...register('age', {required: "Age is required"})} type="number" placeholder='Enter Your Age'/>
          {errors.age && <p style={{color:"red"}}>{errors.age.message}</p>}
          {status && status.age < 18 && <p style={{color: "red"}}>You are not adult.</p>}
        </div>
        <div>
          <label>Phone Number: </label>
          <input {...register('contact', {required:"Phone Number is required"})} type="tel" placeholder='Enter Your phone number' />
          {errors.contact && <p style={{color:"red"}}>{errors.contact.message}</p>}
        </div>
        <div>
          <label>Password: </label>
          <input {...register('password',{required:"Password is required", minLength:{value:6, message:"Must be at least 6 Characters"}})} type="password" placeholder='Enter Password' />
          <p>Password Length: {password.length}</p>
          {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
        {status && (
          <h1>Hello i'm  <strong>{status.nickName}</strong>. Subsribe your newsletter in my this mail adress: {status.email} and i ensure that i am {status.age} years old. For any further need don't hesitate to contact me on {status.contact}</h1>
        )}
    </>
  )
}

export default App

