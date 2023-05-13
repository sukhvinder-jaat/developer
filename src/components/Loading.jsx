import React from "react";
import cat from "../assets/img/png/nav_logo.webp";

export const Loading = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 1000);
  return (
    <div
      id="none"
      className=" bg_section_1 min-vh-100 w-100  position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <img className="preloaderAnimation cat" src={cat} />
      </div>
    </div>
  );
};
