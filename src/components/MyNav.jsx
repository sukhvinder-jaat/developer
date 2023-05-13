import React from "react";
import { Container } from "react-bootstrap";
import nav_logo from "../assets/img/png/nav_logo.webp";
import { AiOutlineAlignRight } from "react-icons/ai";
export const MyNav = () => {
  
  const [first, setfirst] = React.useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div>
      <div className=" bg_blue_light py-2">
        <p className="mb-0 text-center text-black ff_Roboto fw_400 fs_17">
          Breakpoint 2023 - New City. New Vibes - Get Early Access -
        </p>
      </div>
      <div className="bg-black py-3">
        <Container className="container">
          <div className=" d-flex align-items-center justify-content-between">
            <img
              src={nav_logo}
              alt="nav_logo"
              className=" w-20 w_70_md animate__hinge"
            />
            <h4
              className="text-white d-block fs_32 d-md-none z-10"
              onClick={clickshow}
            >
              <AiOutlineAlignRight className="w-100" />
            </h4>
            <div
              className={
                first
                  ? "nav_show d-flex gap-2 align-items-center"
                  : "nav_show d-flex showw gap-2 mb-0 align-items-center ps-0"
              }
            >
              <div class="dropdown">
                <span>
                  <p className="mb-0 clr_nav hover_white pointer ff_Helvetica fw_400 fs_17 me-md-5">
                    Learn
                    <span className=" ps-2 svg_white">
                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                          fill="#848895"
                        />
                      </svg>
                    </span>
                  </p>
                </span>
                <div class="dropdown-content">
                  <p className="ff_Helvetica fw_400 fs_17 me-md-5 clr_nav hover_white pointer">
                    home
                  </p>
                </div>
              </div>
              <div class="dropdown">
                <span>
                  <p className=" mb-0 clr_nav hover_white pointer ff_Helvetica fw_400 fs_17 me-md-5">
                    Build
                    <span className="ps-2 svg_white">
                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                          fill="#848895"
                        />
                      </svg>
                    </span>
                  </p>
                </span>
                <div class="dropdown-content">
                  <p className="ff_Helvetica fw_400 fs_17 me-md-5 clr_nav hover_white pointer">
                    home
                  </p>
                </div>
              </div>
              <div class="dropdown">
                <span>
                  <p className=" mb-0 clr_nav hover_white pointer ff_Helvetica fw_400 fs_17 me-md-5">
                    Network
                    <span className="ps-2 svg_white">
                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                          fill="#848895"
                        />
                      </svg>
                    </span>
                  </p>
                </span>
                <div class="dropdown-content">
                  <p className="ff_Helvetica fw_400 fs_17 me-md-5 clr_nav hover_white pointer">
                    home
                  </p>
                </div>
              </div>
              <div class="dropdown">
                <span>
                  <p className=" mb-0 clr_nav hover_white pointer ff_Helvetica fw_400 fs_17 me-md-5">
                    Community
                    <span className="ps-2 svg_white">
                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                          fill="#848895"
                        />
                      </svg>
                    </span>
                  </p>
                </span>
                <div class="dropdown-content">
                  <p className="ff_Helvetica fw_400 fs_17 me-md-5 clr_nav hover_white pointer">
                    home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
