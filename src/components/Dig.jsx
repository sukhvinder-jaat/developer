import React from "react";
import upp from "../assets/img/svg/arrow_up.svg";
import { Col, Container, Row } from "react-bootstrap";

export const Dig = () => {
  const myDig = [
    {
      id: 1,
      tool: "tool / library",
      heading: "Core Documentation",
      head: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
      btn: "Learn more",
    },
    {
      id: 2,
      tool: "tool / library",
      heading: "Solana Cookbook",
      head: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
      btn: "Learn more",
    },
    {
      id: 3,
      tool: "tool / library",
      heading: "Solana Stack Exchange",
      head: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
      btn: "Learn more",
    },
    {
      id: 4,
      tool: "tool / library",
      heading: "Solana Playground",
      head: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
      btn: "Learn more",
    },
    {
      id: 5,
      tool: "tool / library",
      heading: "create-solana-dapp",
      head: "Get up and running fast with Solana dApps, generate a project template in seconds.",
      btn: "Learn more",
    },
    {
      id: 6,
      tool: "tool / library",
      heading: "Anchor Docs",
      head: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
      btn: "Learn more",
    },
    {
      id: 7,
      tool: "tool / library",
      heading: "Solana Program Library",
      head: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
      btn: "Learn more",
    },
    {
      id: 8,
      tool: "tool / library",
      heading: "Program Examples",
      head: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
      btn: "Learn more",
    },
  ];
  return (
    <div className=" bg-black py-5">
      <Container className=" py-5 container">
        <p className=" ff_Helvetica fw_400 fs_37 text-white mb-0">
          Dig deeper.
        </p>
        <p className="pb-5 ff_Helvetica fw_400 fs_20 clr_light_black mb-0">
          Learn from resources across the greater Solana ecosystem.
        </p>
        <Row>
          {myDig.map((val) => {
            return (
              <Col
                xl={4}
                lg={6}
                xs={12}
                className="pb-4"
                data-aos="zoom-out-left"
              >
                <div className=" tool_box p-4 overflow-hidden position-relative d-flex flex-column justify-content-between shadow_boxx">
                  <p className="clr_jamuni pb-2 mb-0 ff_Helvetica fw_400 fs_12 text-uppercase">
                    {val.tool}
                  </p>
                  <p className="fw_400 fs_19 text-white ff_Helvetica">
                    {val.heading}
                  </p>
                  <p className="fw_400 pb-4 fs_16 text-white ff_Helvetica lh_26">
                    {val.head}
                  </p>
                  <button className="pointer border-0 text-start bg-transparent fw_400 fs_11 text-white ff_Helvetica text-uppercase">
                    {val.btn} <img src={upp} alt="upp" className="ps-3" />
                  </button>
                  <div className="bottom_shadow position-absolute"></div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
