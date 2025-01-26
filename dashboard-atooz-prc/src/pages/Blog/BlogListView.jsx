import React from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const BlogListView = () => {
  return (
    <Wrapper>
      <div className="layout">
        <div className="blog-wrapper">
          <div className="blog">
            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center blog_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center blog_title">
                    <h4 className="m-0 fs-5">Blog</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_blog">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">
                        <Link to="/blog-add" className="blog_link">
                          Add Blog
                        </Link>
                      </span>
                    </button>
                  </div>
                </div>

                <h2 className="text-dark fs-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  repellat placeat deserunt facilis ullam. Error quo accusantium
                  {/* enim hic vel provident assumenda commodi modi soluta,
                  doloremque quam suscipit nobis molestiae accusamus sequi
                  magnam voluptatem aspernatur minus, sit at voluptatum maxime
                  quis. Aspernatur laborum pariatur quod enim doloremque tenetur
                  sequi, culpa qui officia eveniet sed delectus, deleniti modi
                  molestias amet neque consequuntur autem veniam repellendus
                  cumque nemo ipsum fugit. Quia provident quaerat soluta totam,
                  reiciendis, alias aut et repellendus doloribus facere eaque
                  excepturi ipsam consequuntur repellat, commodi nihil itaque
                  porro neque dolor eius laudantium vero. Itaque esse pariatur
                  corrupti enim nihil amet quam aperiam suscipit sed, libero
                  dolore nulla aliquid iste inventore veritatis laborum dicta.
                  Laborum, quos error. Pariatur officia enim mollitia magni
                  molestiae cumque maiores ducimus nulla, fuga vitae repellat
                  ex. Reprehenderit molestiae beatae tenetur nostrum quisquam
                  voluptates modi qui, nisi possimus ratione maiores dicta hic
                  dolorum facilis explicabo cupiditate quae ex provident
                  officiis deserunt et. Iure explicabo eius, reiciendis sit
                  asperiores ad corrupti dolorum quis, harum hic natus cum
                  voluptatem cupiditate mollitia quas officia optio est animi
                  consectetur. Incidunt pariatur, quos saepe ad amet adipisci
                  maiores eos dolorem commodi, laboriosam voluptatum explicabo
                  nihil animi tempore! Deserunt, itaque. Eum officia iure
                  consequuntur at sequi aspernatur repudiandae facilis.
                  Consequuntur, molestiae. Eveniet ducimus mollitia molestiae
                  veritatis eum reprehenderit expedita? Repellendus asperiores
                  impedit animi et hic aspernatur, ullam dolore, fuga harum
                  dolores delectus voluptatum ut eos aliquid culpa quam. Unde
                  officiis quae sequi. Quod animi facere quaerat ratione dicta
                  obcaecati! Inventore molestiae consequatur exercitationem
                  commodi blanditiis corrupti deserunt, repudiandae asperiores,
                  minima laboriosam amet eum quaerat quia odio! Voluptatum
                  veritatis consequuntur beatae cum facilis soluta fugiat nobis,
                  itaque in nulla voluptatem quod quas reiciendis magni tempora
                  distinctio iure. Placeat animi eos, porro consequatur ut
                  maiores architecto ducimus alias, dolor reprehenderit
                  repudiandae, quam officia commodi. */}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Footer className="footer" />
      </div>
    </Wrapper>  
  );
};

const Wrapper = styled.section`
  .layout {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh - 60px);
  }

  .blog-wrapper {
    /* Take available height */
    flex: 1;
    /* Scroll only the blog layout */
    /* overflow-y: auto; */
  }

  .footer {
    padding: 10px 20px;
  }

  .blog {
    padding: 20px 20px;
  }

  .blog_row .blog_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .blog_row .add_blog .buttn {
    background-color: #1d2634;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }

  .add_blog .buttn:hover {
    background-color: #424141;
  }

  .blog_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }

  .blog_link {
    text-decoration: none;
    color: #fff;
  }
`;

export default BlogListView;
