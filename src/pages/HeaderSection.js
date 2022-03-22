import React from 'react'
import '../styles/bootstrap.css';
import '../styles/responsive.css';
import '../styles/style.css';
import '../styles/style.css.map';
// import '../../styles/style.scss';
import { Link } from 'react-router-dom';
import Contact from './../components/contact/ContactSection';


const Navbar = ({ toggle, isToggledOn }) => {
  return (

    <div className="hero_area"><header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/home" exact>
            <span>
              Sportpar
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                {isToggledOn == true ? <li className="nav-item active">
                  <Link className="nav-link" to="/home"><span class="sr-only"></span>Home</Link>
                </li> : null}
                {isToggledOn == true ? <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li> : null}
                {isToggledOn == true ? <li className="nav-item">
                  <Link className="nav-link" to="/product"> Products</Link>
                </li> : null}


                {isToggledOn == true ? <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact us</Link>
                </li> : null}

                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={toggle}> {isToggledOn == true ? "Logout" : "Login"}</Link>
                </li>

                {isToggledOn == true ? null : <li className="nav-item">
                  <Link className="nav-link" to="/signup" onClick={toggle}> SignUp </Link>
                </li>}

              </ul>
              <div className="quote_btn-container ">
                <a className="cart_link">
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                  <span className="cart_number">
                    0
                  </span>
                </a>
                <form className="form-inline ">
                  <button className="btn  nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header></div>
  )
}

export default Navbar