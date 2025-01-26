import React from "react";
import styled from "styled-components";
// import firstImg from "../../images/contact-bg-image.jpg";
import secondImg from "../../images/atooz-img-4.jpg";

const About = () => {
  return (
    <Wrapper>
      <div className="about my-5">
        <div className="Container_margin">
          <div className="row d-flex justify-content-between align-items-center roww">
            <div className="col-lg-6 col-md-12 col-sm-12 my-3 part1">
              <div className="about_content">
                <h2 className="fs-1 aboutHead">E-commerce Website</h2>
                <h5 className="my-3 fs-3">Lorem ipsum dolor sit amet.</h5>
                <p className="my-3 fs-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  quo aliquam corrupti magni alias provident reprehenderit
                  molestiae fuga quam eaque?
                </p>
                <button className="buttn mt-3">Shop Now</button>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 part2">
              <div className="main_part">
                <div className="first_img">
                  {/* <img src={firstImg} className="immg1" alt="" /> */}
                  <div className="immg1" style={{ width: "400px" }}></div>
                </div>

                <div className="second_img">
                  <img src={secondImg} className="immg2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;
  .about .about_content h2 {
    font-weight: 700;
    font-family: serif;
    font-size: 50px !important;
  }

  .about .about_content .buttn {
    background-color: #f80000;
    border: none;
    color: #fff;
    padding: 10px 20px;
    font-weight: 600;
    font-family: serif;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    border: 1px solid #f80000 !important;
  }
  .about .about_content .buttn:hover {
    background-color: #fff;
    color: #f80000;
    border: 1px solid #f80000 !important;
  }

  .main_part {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .first_img .immg1 {
    height: 220px;
    width: 400px;
    margin-right: -310px;
    margin-bottom: -130px;
    background-color: #f80000;
    width: 460px;
  }
  .second_img .immg2 {
    height: 220px;
    width: 400px;
  }

  @media only screen and (max-width: 1024px) {
    .first_img .immg1 {
      width: 420px !important;
    }
    .second_img .immg2 {
      width: 350px !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .roww {
      flex-direction: column-reverse !important;
    }
    .part1 {
      margin-top: 75px !important;
    }
  }
  @media only screen and (max-width: 425px) {
    .about .about_content h2 {
      font-size: 35px !important;
    }

    .about_content p {
      font-size: 15px !important;
    }

    .first_img .immg1 {
      display: none;
      margin: 0;
    }
    .first_img .immg1 {
      /* width: 200px !important; */
      width: 200px !important;
    }
    .part1 {
      margin-top: 20px !important;
    }
    .second_img .immg2 {
      /* width: 425px !important; */
      width: 445px !important;
    }
  }
  @media only screen and (max-width: 375px) {
    .second_img .immg2 {
      width: 375px !important;
    }
  }
  @media only screen and (max-width: 320px) {
    .second_img .immg2 {
      width: 320px !important;
    }
  }
`;

export default About;
