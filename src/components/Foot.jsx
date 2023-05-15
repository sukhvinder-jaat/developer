import React from "react";
import youtubee from "../assets/img/svg/youtube_foot.svg";
import img_2 from "../assets/img/svg/tweeter2.svg";
import img_3 from "../assets/img/svg/discord3.svg";
import img_4 from "../assets/img/svg/raddit4.svg";
import img_5 from "../assets/img/svg/git5.svg";
import img_6 from "../assets/img/svg/tele6.svg";
import earth from "../assets/img/svg/earth.svg";
import foot_img from "../assets/img/png/foot_logo.webp";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
export const Foot = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-black py-5">
      <Container className="container py-5">
        <Row>
          <Col lg={6} xs={12} data-aos="fade-right">
            <img src={foot_img} alt="foot_img"className="foot_img_w pointer"/>
            <p className="ff_Roboto fw_400 pt-3 fs_16 text-white">
              Managed by Solana Foundation
            </p>
            <div className="d-flex align-items-center pt-3">
              <img src={youtubee} alt="youtube"className="footer_logo"/>
              <img
                src={img_2}
                alt="youtube"
                className="footer_logo ms-3 pointer"
              />
              <img
                src={img_3}
                alt="youtube"
                className="footer_logo ms-3 pointer"
              />
              <img
                src={img_4}
                alt="youtube"
                className="footer_logo ms-3 pointer"
              />
              <img
                src={img_6}
                alt="youtube"
                className="footer_logo ms-3 pointer"
              />
              <img
                src={img_5}
                alt="youtube"
                className="footer_logo ms-3 d-none d-sm-block pointer"
              />
            </div>
            <p className="fw_400 fs_16 ff_Helvetica clr_nav pt-4">
              ©2023Solana Foundation. All rights reserved.
            </p>
          </Col>
          <Col lg={6} xs={12} className="pt-5 pt-lg-0"data-aos="fade-left">
            <Row>
              <Col sm={4} xs={6}>
                <p className="ff_Helvetica fw_400 fs_16 text-uppercase text-white">
                  Solana
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Grants
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Break Solana
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Media Kit
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Careers
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Disclaimer
                </p>
              </Col>
              <Col sm={4} xs={6}>
                <p className="ff_Helvetica fw_400 fs_16 text-uppercase text-white">
                  Get Connected
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Ecosystem
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Blog
                </p>
                <p className="pointer ff_Helvetica fw_400 fs_15 clr_nav hover_white">
                  Newsletter
                </p>
              </Col>
              <Col sm={4} xs={6}>
                <img src={earth} alt="earth"className="pointer"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
