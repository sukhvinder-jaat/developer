import React from "react";
import arrow from "../assets/img/png/arrow.webp";
import img_1 from "../assets/img/png/bg_1.png";
import img_2 from "../assets/img/png/bg_2.png";
import img_3 from "../assets/img/png/bg_3.png";
import img_4 from "../assets/img/png/bg_4.png";
import img_5 from "../assets/img/png/bg_5.png";
import img_6 from "../assets/img/png/bg_6.png";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

export const Get = () => {
  var getslider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 12000,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: true,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: true,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  const myData = [
    {
      id: 1,
      chapter: "14 Chapters",
      bgimg: img_1,
      head: "Buildspace",
    },
    {
      id: 2,
      chapter: "12 Chapters",
      bgimg: img_2,
      head: "Solana Bytes",
    },
    {
      id: 3,
      chapter: "1 Chapters",
      bgimg: img_3,
      head: "Scaffold Series",
    },
    {
      id: 4,
      chapter: "3 Chapters",
      bgimg: img_4,
      head: "Freecodecamp Solana <br/> Course",
    },
    {
      id: 5,
      chapter: "12 Chapters",
      bgimg: img_5,
      head: "Solana Development by Knox",
    },
    {
      id: 6,
      chapter: "8 Chapters",
      bgimg: img_6,
      head: "Solana Bytes",
    },
  ];
  return (
    <div className="bg-black pt-3">
      <Container className="container pb-5">
        <p className="fw_400 fs_38 ff_Helvetica mb-0 text-white">
          Get started.
        </p>
        <p className="fw_400 fs_20 ff_Helvetica pb-3 clr_light_black">
          Use these Solana Foundation and community courses to begin your
          journey into Solana development.
        </p>
        <div
          className="space_box radius_18 bg_back_devlop p-md-5 p-3 w-100"
          data-aos="zoom-out-down"
        >
          <button className="fw_400 fs_11 ff_Helvetica text-white btn_chapter">
            17 Chapters
          </button>
          <p className="ff_Helvetica fw_400 fs_39 text-white pt-2">
            Solana Development Course
          </p>
          <p className="text-white fw_400 fs_18 ff_Helvetica">
            Quickstart your Solana development
            <span className="d-block">
              starting from nothing to complex programs.
            </span>
          </p>
          <img className="arrow_side mt-4"src={arrow} alt="arrow"/>
        </div>
        <Slider {...getslider}>
          {myData.map((val) => {
            return (
                <Col lg={4} className="px-2">
                  <div className="pt-4">
                    <div
                      style={{ backgroundImage: `url(${val.bgimg})` }}
                      className="w-100 pointer h_320 space_box mx-3 d-flex bg_property flex-column justify-content-end px-3 py-4"
                    >
                      <button className="ff_Helvetica text-white fs_11 fw_400 chapter_btn w-35 text-nowrap">
                        {val.chapter}
                      </button>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mx_180 fw_400 fs_18 text-white ff_Helvetica mb-0 ps-2 pt-2">
                          {
                            <div
                              dangerouslySetInnerHTML={{
                                __html: val.head,
                              }}
                            />
                          }
                        </p>
                        <img src={arrow} className="arrow_side"alt="arrow"/>
                      </div>
                    </div>
                  </div>
                </Col>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};
