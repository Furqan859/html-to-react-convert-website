import React from 'react';
import '../styles/bootstrap.css';
import '../styles/responsive.css';
import '../styles/style.css';
import '../styles/style.css.map';
// import '../../styles/style.scss';

const FooterLinks = () => {
  return (
    <div>
    <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="logo_detail">
            <div className="logo-box">
              <a className="navbar-brand" href="index.html">
                <span>
                  Sportpar
                </span>
              </a>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 mx-auto">
          <div className="address_box">
            <h5>
              Adderess
            </h5>
            <a href="">
              <i clasNames="fa fa-map-marker" aria-hidden="true"></i>
              passages of Lorem Ipsum available, but the majority have
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              (+71) 1234567890
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              demo@gmail.com
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
          <div className="social_box">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <footer className="footer_section">
    <div className="container-fluid">
      <p>
        &copy; 2021 All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
    </div>
  )
}

export default FooterLinks