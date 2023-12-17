import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    
    <nav className='d-flex flex-row justify-content-center  bg-primary py-3 px-3' >
        <div> <Link to="/" >Home</Link> </div>

        {sessionStorage.getItem("userLogged") === null ? (
          <div>
  <div> <Link to="/signin" >SignIn</Link> </div>
        <div> <Link to="/signup" >SignUp</Link> </div>
          </div>
               
              ) : (
               <div>
                  <a  className='text-white' > { JSON.parse(sessionStorage.getItem("userLogged")).name + " " +  JSON.parse(sessionStorage.getItem("userLogged")).email } </a>
                  <a className='text-white' onClick={ () => [ sessionStorage.removeItem("userLogged") , window.location.reload() ]  } style={{cursor: "pointer"}} >Logout</a>

               </div>
              
              )}


      
    </nav>
    
    </>
  )
}

export default Header