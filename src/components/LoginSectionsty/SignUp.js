import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HeaderSection from '../../pages/HeaderSection';


const SignUp = () => {

  const navigate = useNavigate()
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");


  const handleSubmit = () => {
    const firstName = [];
    localStorage.setItem("firstName", JSON.stringify(firstname));
    console.warn(firstName, "firstName");
    const lastName = [];
    localStorage.setItem("lastName", JSON.stringify(lastname));
    console.warn(lastName, "lastName");
    const userEmail = [];
    localStorage.setItem("userEmail", JSON.stringify(email));
    console.warn(userEmail, "userEmail");
    const userPassword = [];
    localStorage.setItem("userPassword", JSON.stringify(password));
    console.warn(userPassword, "userpassword");
    const userNumber = [];
    localStorage.setItem("userNumber", JSON.stringify(number));
    console.warn(userNumber, "userNumber");

  }

  const updateData = () => {

    if (!firstname || !lastname || !email || !password || !number) {
      alert("Invalid Data")
    } else {
      navigate('/login');
    }
  }

  const UserDataField = () => {
    updateData()
    handleSubmit()


  }

  return (<div>
    <HeaderSection />
    <NavLink to='/signup'></NavLink>


    <section className="contact_section">
      <div className="contact_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="contact_form layout_padding">
                <div className="heading_container heading_center">
                  <h2>
                    Create Account
                  </h2>
                </div>
                <form >
                  <div className="top_input">
                    <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <div className="top_input">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder="Phone Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                  </div>

                  <div className="btn-box">

                    <button onClick={UserDataField}    >
                      SignUp
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

export default SignUp;