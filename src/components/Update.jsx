import React from "react";
import youtube from "../assets/img/svg/youtube.svg";
import pro from "../assets/img/svg/prodcast.svg";
import { Col, Container, Row } from "react-bootstrap";

export const Update = () => {
  return (
    <div className="bg-black py-3">
      <Container className="container">
        <Row>
          <Col xl={6} xs={12} className="pt-5 pt-xl-0" data-aos="fade-down-right">
            <div className="update_box p-5">
              <p className=" fw_400 fs_36 text-white ff_Helvetica">
                Solana Developer Update
              </p>
              <p className="pb-4 fw_400 fs_17 ff_Helvetica clr_light_black text-start">
                Sign up to the newsletter and learn about new
                <br /> resources, new commits, new proposals, and more.
              </p>
              <div className="input_box mt-4 py-2 px-2 d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  className=" ff_Roboto fw_600 fs_15 text-uppercase clr_nav input_box border-0"
                  placeholder="Email"
                />
                <button className=" text-black ff_Roboto fw_400 fs_15 text-uppercase sign_btn text-nowrap">
                  Sign up
                </button>
              </div>
            </div>
          </Col>
          <Col xl={6} xs={12} className="pt-5 pt-xl-0" data-aos="fade-up-left">
            <div className="update_box p-5">
              <p className=" fw_400 fs_36 text-white ff_Helvetica">
                Even more resources
              </p>
              <p className=" fw_400 fs_17 ff_Helvetica clr_light_black text-start">
                More videos, more episodes. Discussions <br /> between industry
                leaders in both blockchain and <br /> technology, our team, and
                community developers.
              </p>
              <div className="d-flex flex-column flex-sm-row align-items-center pt-4">
                <button className=" ff_Roboto fs_15 d-flex align-items-center fw_400 text-white text-uppercase you_btn">
                  YouTube <img className="ps-2" src={youtube} alt="youtube" />
                </button>
                <button className=" ff_Roboto ms-sm-3 mt-3 mt-sm-0 fs_15 d-flex align-items-center fw_400 text-white text-uppercase you_btn">
                  Podcast <img className="ps-2" src={pro} alt="pro" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
