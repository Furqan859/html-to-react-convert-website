import React from 'react';
import '../../styles/bootstrap.css';
import '../../styles/responsive.css';
import '../../styles/style.css';
import '../../styles/style.css.map';
// import '../../styles/style.scss';
import client from '../../aesets/images/client.jpg';


const Clientsection = () => {
  return (
    
    <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container ">
        <h2>
          What is says our clients
        </h2>
      </div>
      <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col-md-7 mx-auto">
              <div className="client_container ">
                <div className="client_box ">
                  <div className="img-box">
                    <img src={client} alt=""/>
                  </div>
                  <div className="name">
                    <h5>
                      Randomised
                    </h5>
                    <h6>
                      <span>
                        Lorem Ipsum
                      </span>
                      <i className="fa fa-quote-left    "></i>
                    </h6>
                  </div>
                </div>
                <div className="client_detail">
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in
                    some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-7 mx-auto">
              <div className="client_container ">
                <div className="client_box ">
                  <div className="img-box">
                    <img src={client} alt=""/>
                  </div>
                  <div class="name">
                    <h5>
                      Randomised
                    </h5>
                    <h6>
                      <span>
                        Lorem Ipsum
                      </span>
                      <i className="fa fa-quote-left    "></i>
                    </h6>
                  </div>
                </div>
                <div className="client_detail">
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in
                    some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-7 mx-auto">
              <div className="client_container ">
                <div className="client_box ">
                  <div className="img-box">
                    <img src={client} alt=""/>
                  </div>
                  <div className="name">
                    <h5>
                      Randomised
                    </h5>
                    <h6>
                      <span>
                        Lorem Ipsum
                      </span>
                      <i className="fa fa-quote-left    "></i>
                    </h6>
                  </div>
                </div>
                <div className="client_detail">
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in
                    some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  </section>
   
  )
}

export default Clientsection;