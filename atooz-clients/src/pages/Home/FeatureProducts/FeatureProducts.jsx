import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SingleProd from "../../../components/SingleProd/SingleProd";
import productsArray from "../../../productsData.js";

const FeatureProducts = () => {
  const [featureProducts, setFeatureProducts] = useState([]);

  useEffect(() => {
    setFeatureProducts(productsArray);
  }, []);

  const allFilterProducts = featureProducts.filter(
    (prod) => prod.isFeatureProduct === true
  );

  return (
    <Wrapper>
      <div
        style={{ backgroundColor: "#ffff" }}
        className="Container_margin shadow-sm mb-4 px-4 py-4 rounded services"
      >
        <div className="">
          <h3 className="services_title pb-3">
            <span>Our Feature Products</span>
          </h3>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap service_product">
          {allFilterProducts.map((product) => {
            return (
              <div className="mb-4" key={product.id}>
                <SingleProd
                  id={product.id}
                  img={product.img}
                  name={product.name}
                  // price={product.price}
                  price={`${product.regularPrice.amount}${product.regularPrice.currency}`}
                />
              </div>
            );
          })}
          {/* <div className="mb-4">
            <SingleProd
              img={featureProduct1}
              name={"Black T-Shirt"}
              price={"6000Tk."}
            />
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .services .services_title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 22px;
  }

  .services .service_product img {
    width: 220px !important;
    height: 260px !important;
  }

  @media only screen and (max-width: 769px) {
    .services {
      margin-bottom: 1.5rem !important;
    }
  }

  @media only screen and (max-width: 425px) {
    .services_title {
      text-align: center !important;
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 375px) {
    .services_title {
      text-align: center !important;
      font-size: 17px !important;
    }
  }

  @media only screen and (max-width: 320px) {
    .services_title {
      text-align: center !important;
      font-size: 14px !important;
    }
  }
`;

export default FeatureProducts;
