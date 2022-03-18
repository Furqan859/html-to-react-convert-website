import React from 'react';
import '../../styles/bootstrap.css';
import '../../styles/responsive.css';
import '../../styles/style.css';
import '../../styles/style.css.map';
// import '../../styles/style.scss';
import aboutimg from '../../aesets/images/about-img.jpg';

const About = () => {
  return (
    
    
    <section className="about_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-5 offset-md-1">
          <div className="detail-box">
            <h2>
              About Us
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus hic, dolore error nulla similique cum minima rem, distinctio animi architecto inventore temporibus consequuntur quibusdam modi atque est fuga dicta quae!
            </p>
            <div>
              <a href="">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-5">
          <div className="img-box">
            <img src={aboutimg} alt=""/>
          </div>
        </div>
      </div>
    </div>
    
  </section>
    
  )
}

export default About;