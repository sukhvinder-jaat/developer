import React from "react";
import section_1 from "../assets/img/png/section_1.webp";
import { Col, Container, Row } from "react-bootstrap";
export const Developer = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Container className=" container">
        <Row className=" align-items-center mb-5">
          <Col lg={6}>
            <p className=" ff_Helvetica pt-5 pt-lg-0 fs_94 text-white fw_400 lh_96">
              Developer Resources
            </p>
            <p className=" ff_Helvetica fw_400 fs_21 clr_light_black">
              A manual for joining the Solana
              <span className=" d-block">
                {" "}
                ecosystem. By builders for builders.
              </span>
            </p>
            <div className="pt-4 d-flex flex-xs-column flex-xsm-row">
              <button className=" ff_Roboto d-inline-block fw_400 text-black fs_15 text-uppercase btn_build">
                Build Now
              </button>
              <button className="ff_Roboto ms-3-xsm mt-3-xsm d-inline-block ms-sm-3 fw_400 stack_btn text-white bg-black fs_15 text-uppercase">
                Stack Exchange{" "}
                <span className="ps-2">
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.882812 12.3185H15.6221V13.1043C15.6221 14.4507 14.5757 15.5328 13.29 15.5328H12.6114L9.51138 18.7364V15.5328H3.21496C1.92924 15.5328 0.882812 14.4507 0.882812 13.1043V12.3185ZM0.882812 11.4757H15.6221V8.43997H0.882812V11.4757ZM0.882812 7.56854H15.6221V4.53283H0.882812V7.56854ZM13.2864 0.450684H3.21496C1.92924 0.450684 0.882812 1.53283 0.882812 2.86854V3.66497H15.6221V2.86854C15.6185 1.53283 14.5721 0.450684 13.2864 0.450684Z"
                      fill="#848895"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </Col>
          <Col lg={6} className=" position-relative">
            <div className="section_1_shadow"></div>
            <span className="">
              <img
                className="w-100 w_75_lg section_1_img"
                src={section_1}
                alt="section_1"
              />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
