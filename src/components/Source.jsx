import React from "react";
import view_arrow from "../assets/img/png/view_arrow.webp";
import source from "../assets/img/png/source_img.webp";
import { Col, Container, Row } from "react-bootstrap";
export const Source = () => {
  return (
    <div className="Source_bg py-5">
      <Container className="container pt-4">
        <p className="fw_400 fs_36 ff_Helvetica mb-0 text-white">
          Go to the source.
        </p>
        <p className="fw_400 fs_20 ff_Helvetica pb-3 clr_light_black">
          Read the documentation for Solana and popular tools.
        </p>
        <Row className="pt-3">
          <Col lg={6} xs={12} className="px-4"data-aos="fade-down">
            <div className="d-flex flex-xs-column align-items-center justify-content-between">
              <p className="ff_Helvetica fs_32 fw_400 text-white">
                Solana Docs
              </p>
              <button className="d-flex ff_Roboto fw_400 fs_15 text-white text-uppercase align-items-center view_btn">
                View all
                <img
                  className="view_arrow ms-2"
                  src={view_arrow}
                  alt="view_arrow"
                />
              </button>
            </div>
            <hr className="view_line"/>
            <p className="ff_Helvetica fw_400 fs_20 text-white pt-4">
              Learn how Solana works and get a high-
              <span className="d-sm-block ">
                level understanding of Solana's architecture.
              </span>
            </p>
          </Col>
          <Col lg={6} xs={12} className="px-4"data-aos="fade-up">
            <div className="d-flex flex-xs-column align-items-center justify-content-between">
              <p className="ff_Helvetica fs_32 fw_400 text-white">
                Metaplex Docs
              </p>
              <button className="d-flex ff_Roboto fw_400 fs_15 text-white text-uppercase align-items-center view_btn">
                View all
                <img
                  className="view_arrow ms-2"
                  src={view_arrow}
                  alt="view_arrow"
                />
              </button>
            </div>
            <hr className="view_line"/>
            <p className="ff_Helvetica fw_400 fs_20 text-white pt-4">
              Learn what you build with Metaplex, make the process of creating
              and launching NFTs easier.
            </p>
          </Col>
        </Row>
        <div className="pt-xl-5">
          <Row className="mt-5 pt-lg-5 flex-column-reverse flex-lg-row align-items-center">
            <Col lg={6} xs={12}>
              <p
                className="ff_Helvetica fw_400 fs_39 text-white"
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                Solana Changelog
              </p>
              <p className="ff_Helvetica fw_400 fs_20 text-white">
                Some more Solana changes from Jacob & Joe.
                <br className="d-none d-lg-block"/> Subscribe to the
                newsletter: https://solana.us17.list-manage.com/s... Proposal -
                Priced Compute Units: ...
              </p>
              <button className="fw_400 fs_15 ff_Roboto text-uppercase text-white episode_btn">
                Latest episode
              </button>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="pb-5 pb-lg-0"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
            >
              <img src={source} className="w-100"alt="source"/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
