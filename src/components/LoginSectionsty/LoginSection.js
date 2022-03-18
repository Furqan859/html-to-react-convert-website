import React,{useState} from 'react';
import HeaderSection from '../../pages/HeaderSection';


import { useLocation, NavLink, Navigate } from 'react-router-dom';



const LoginSection = ({toggle}) => {

const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

 
const handleSubmit = () => {
  const userEmail = [];
    localStorage.setItem("userEmail", JSON.parse(email));
    console.warn(userEmail, "userEmail");
    const userPassword = [];
    localStorage.setItem("userPassword", JSON.parse(password));
    console.warn(userPassword, "userpassword");
    
}

  const location = useLocation()
  console.log(location);
  



  

  return (<div>

    <HeaderSection/>
    <NavLink to='/login'></NavLink>
    
 

 <section className="contact_section">
    <div className="contact_container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="contact_form layout_padding">
              <div className="heading_container heading_center">
                <h2>
                  Login Sport
                </h2>
              </div>
              <form >
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password " value={password} onChange={(e)=>setPassword(e.target.value)}/>
               
                <div className="btn-box">
                
                  <button type='submit'   onSubmit={handleSubmit}>
                    Login
                  
                  </button>
                  
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
    
  )
}

export default LoginSection