import React from 'react'
import '../../styles/bootstrap.css';
import '../../styles/responsive.css';
import '../../styles/style.css';
import '../../styles/style.css.map';
// import '../../styles/style.scss';
import sliderimg from '../../aesets/images/slider-img.jpg';
import sliderimg1 from '../../aesets/images/slider-img2.jpg';
import sliderimg2 from '../../aesets/images/slider-img3.jpg';

const Slidersection = () => {
  return (
    <div>

      <section className=" slider_section position-relative">
        <ol className="carousel-indicators indicator-2">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator-li-1">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
        </ol>
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-md-5 col-xl-4 offset-xl-1 ">
              <div className="detail-box">
                <h1>
                  Sports and <br />
                  Fitness Store
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available.
                </p>
                <div className="btn-box">
                  <a href="" className="btn-1">
                    Shop Now
                  </a>
                  <a href="" className="btn-2">
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 px-0 h-100">
              <div className="img_container h-100">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                  <ol className="carousel-indicators indicator-1">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator-li-1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="img-box">
                        <img src={sliderimg} alt="this is slider img" />

                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={sliderimg1} alt="" />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={sliderimg2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Slidersection