import React, { useState } from 'react'
import { FaEye, FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup  from 'yup'
import {registerAPI,loginAPI} from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';

function Auth({insideRegister}) {
  
  const [togglePassword, setTogglePassword] = useState(false)
  const navigate=useNavigate()
const formik=useFormik({
  initialValues:{
    username:"Username",
    email:"",
    password:""
  },
  validationSchema: Yup.object({
    username:Yup.string().min(3,"Must Be atleast 3 character").required("Required"),
    email:Yup.string().email("Invalid email").required("Required"),
    password:Yup.string().required("Required")
  }),
  onSubmit:(values,{resetForm})=>{
    console.log(values);
    if(insideRegister){
      console.log("Register API CALL");
      handleRegister(values)  
    }else{
      console.log("Login API CALL"); 
      handleLogin(values)
    }
    resetForm()
  }
})
      const handleLogin = async (userData)=>{
        const result = await loginAPI(userData)
          console.log(result);
        if(result.status == 200){
           toast.success("Successfully Logged in ..!! ")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if(result.data.user.role == "admin"){
              navigate('/admin')
            }else{
              navigate('/')
            }
          },2500)
        }else{
      toast.error(result)
      }};


const handleRegister=async(userData)=>{
  const result = await registerAPI(userData)
  console.log(result);
  if(result.status==201){
    toast.success("successfully registered.. please login!!!")
  }else{
    toast.error(result)
  }
  navigate("/login")
}


  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/login.png)] bg-cover bg-center text-blue-900'>
      <div className='p-10'>

        <h1 className='text-center font-bold text-3xl'>BOOKSTORE</h1>

        <div
          style={{width:'400px'}}
          className='bg-blue-800 text-white p-5 flex justify-center items-center flex-col my-5'
        >

          <div
            style={{
              width:'80px',
              height:'80px',
              borderRadius:'50%'
            }}
            className='border mb-5 flex justify-center items-center'
          >
            <FaUserAlt className='text-3xl'/>
          </div>

          <h1 className='3xl'>
            {insideRegister ? "Register" : "Login"}
          </h1>

          <form onSubmit={formik.handleSubmit} className='my- w-full'>

            {/* username */}
            {insideRegister &&
             <>
                <input name='username' value={formik.values.username} onChange={formik.handleChange}
                  className='bg-white p-2 w-full rounded my-5 text-blue-900'
                  type="text"
                  placeholder='Username'
                />
                <div className='mb-5 text-yellow-400'>{formik.errors.username}</div>
             </>
            }
              
                <input name='email' value={formik.values.email} onChange={formik.handleChange}
                  className='bg-white p-2 w-full rounded my-5 text-blue-900'
                  type="email"
                  placeholder='Email'
                />
                 <div className='mb-5 text-yellow-400'>{formik.errors.email}</div>


            {/* password */}
            <div className='flex items-center'>

              <input name='password' value={formik.values.password} onChange={formik.handleChange}
                className='bg-white p-2 w-full rounded my-5 text-blue-900'
                type={togglePassword ? "text" : "password"}
                placeholder='Password'
              />
              

              {
                togglePassword ?
                <FaEye
                  onClick={() => setTogglePassword(!togglePassword)}
                  className='absolute right-5 text-blue-900 cursor-pointer' style={{marginTop:'-50px'}}
                />
                :
                <FaEye
                  className='absolute right-5 text-blue-900 cursor-pointer'
                  onClick={() => setTogglePassword(!togglePassword)}
                />
              }

            </div>
                <div className='mb-5 text-yellow-400'>{formik.errors.password}</div>
            {/* forgot password */}
            <div className='flex justify-between mb-5'>
              <p className='text-blue-300 text-xs'>
                never share your password
              </p>
              {
              !insideRegister &&
              <p className='text-blue-300 text-xs cursor-pointer'>
                Forgot Password?
              </p>
              }
            </div>
            {/* login/register button */}
            <div className='flex justify-center items-center'>
              <button
                className='bg-black p-2 w-full rounded text-white font-bold hover:bg-yellow-600 transition'  
              >
                {insideRegister ? "Register" : "Login"}
              </button>
            </div>
            {/* google login */}
            {
              !insideRegister&&
              <div className='my-5 text-center'>
                <p>------------or-----------</p>
                <div className='mt-2 flex justify-center items-center w-full'>
                  Google Authentication
                </div>
              </div>
            }
            {/* new arrivals */}
            <div className='my-5 text-center'>
              {
                insideRegister ?
                <p className='text-blue-950'>Existing User? <Link to={'/login'} className='underline ms-5'>login</Link></p>
                :
               <p className='text-blue-950'>New User? <Link to={'/register'} className='underline ms-5'>register</Link></p> 
              }

            </div>
          </form>

        </div>
      </div>
      {/* toast */}
      <ToastContainer positon='top-center' theme='colored' autoClose={3000}/>
    </div>
    
            
  )
}


export default Auth