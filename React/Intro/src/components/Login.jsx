import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onFormSubmit(data){
    console.log("Login Data:",data)
  }

  axios.post('localhost:3000')

  return (
    <>
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label> Email: </label>
      <input type="text" {...register("username",{ required: true, pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
      <br />
      {errors.username && <span style={{color:"red"}}>This field is required</span>}
      <br />
      <label>Password:</label>
      <input type="password"  {...register("password",{ required: true,minLength:3 })}/>
      <br />
      {errors.password && <span style={{color:"red"}}>Password is required</span>}
      <br />
      <input type="submit" />
    </form>
    </>
  )
}

export default Login