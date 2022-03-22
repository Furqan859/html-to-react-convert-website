import React from 'react';
import { ProductsData } from './ProductData'
import '../../styles/bootstrap.css';
import '../../styles/responsive.css';
import '../../styles/style.css';
import '../../styles/style.css.map';

// import '../../styles/style.scss';



const Products = () => {
  return (
    <section className="product_section layout_padding">


      <div className="heading_container heading_center">
        <h2>
          Our Products
        </h2>
      </div>




      <div className="container">
        <div className="row">
          {ProductsData.map((product) =>
            <div className="col-sm-6 col-lg-4">

              <div className="box">
                <div className="img-box">
                  <img src={product.image} alt="" />
                </div>
                <div className="detail-box">
                  <div className="text">
                    <a href="" className="p_name">
                      {product.name}

                    </a>
                    <h5>
                      <span>$</span> {product.price}
                    </h5>
                  </div>
                  <div>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Shop Now
                      </a>

                    </div>
                  </div>
                  <div className="like">
                    <h6>
                      Rating
                    </h6>
                    <div className="star_container">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      <div className="btn-box">
        <a href="">View All</a>

      </div>
    </section>
  )
}

export default Products