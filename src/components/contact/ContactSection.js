import React from 'react';
import '../../styles/bootstrap.css';
import '../../styles/responsive.css';
import '../../styles/style.css';
import '../../styles/style.css.map';

// import '../../styles/style.scss';

const Contact = () => {
  return (
    

    <section className="contact_section">
    <div className="contact_container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="contact_form layout_padding">
              <div className="heading_container heading_center">
                <h2>
                  Get in touch
                </h2>
              </div>
              <form action="">
                <input type="text" placeholder="Full name "/>
                <div className="top_input">
                  <input type="email" placeholder="Email"/>
                  <input type="text" placeholder="Phone Number"/>
                </div>
                <input type="text" placeholder="Message" className="message_input"/>
                <div className="btn-box">
                  <button>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    
  
 
    
    
  )
}

export default Contact;