import React from "react";

export const BackToTop = () => {
  const [backTop, setbackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setbackTop(true);
    } else {
      setbackTop(false);
    }
  });
  return (
    <div>
      {backTop ? (
        <button
          onClick={moveToTop}
          className="btn position-fixed bottom-0 end-0 mb-4 me-4 bg_orange text-white top"
        >
          <svg
            width="31"
            height="27"
            viewBox="0 0 31 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.1796 21.3L25.1716 26.632C25.0636 26.749 24.9324 26.8422 24.7864 26.9055C24.6404 26.9689 24.4827 27.0011 24.3236 27H0.583556C0.470398 26.9994 0.359797 26.9663 0.26494 26.9046C0.170082 26.8429 0.0949691 26.7552 0.048556 26.652C0.00301261 26.549 -0.01091 26.4349 0.00855599 26.324C0.0284398 26.2126 0.0797949 26.1091 0.156556 26.026L5.15856 20.694C5.26641 20.5769 5.39757 20.4836 5.54362 20.4202C5.68966 20.3569 5.84736 20.3248 6.00656 20.326H29.7466C29.8603 20.3229 29.9725 20.3537 30.0687 20.4145C30.1649 20.4752 30.2409 20.5633 30.287 20.6673C30.3331 20.7714 30.3472 20.8868 30.3276 20.999C30.3079 21.1111 30.2553 21.2148 30.1766 21.297L30.1796 21.3ZM25.1706 10.56C25.0608 10.4453 24.9293 10.3536 24.7837 10.2904C24.6381 10.2272 24.4813 10.1938 24.3226 10.192H0.583556C0.470288 10.1927 0.35961 10.2259 0.264741 10.2878C0.169871 10.3497 0.0948219 10.4376 0.048556 10.541C0.00307123 10.6439 -0.0108492 10.7581 0.00855599 10.869C0.028556 10.981 0.079556 11.082 0.156556 11.166L5.15856 16.501C5.26556 16.616 5.39856 16.709 5.54256 16.771C5.68956 16.835 5.84556 16.866 6.00656 16.869H29.7466C29.8591 16.8692 29.9693 16.8364 30.0634 16.7745C30.1574 16.7126 30.2312 16.6245 30.2756 16.521C30.3212 16.4181 30.3353 16.304 30.3161 16.1931C30.2968 16.0822 30.2452 15.9795 30.1676 15.898L25.1676 10.563L25.1706 10.56ZM0.582556 6.72997H24.3226C24.4821 6.72913 24.6398 6.69649 24.7866 6.63397C24.9336 6.56997 25.0636 6.47997 25.1706 6.36197L30.1806 1.02997C30.2384 0.968208 30.2819 0.894524 30.3082 0.814106C30.3345 0.733689 30.3428 0.648491 30.3326 0.564509C30.3224 0.480527 30.2939 0.3998 30.2492 0.328008C30.2044 0.256217 30.1445 0.195105 30.0736 0.148974C29.9773 0.0873253 29.8648 0.0559732 29.7506 0.0589738H6.00656C5.84856 0.0589738 5.68956 0.0929738 5.54256 0.153974C5.39674 0.216876 5.26587 0.309913 5.15856 0.426974L0.156556 5.75897C0.0800359 5.84155 0.0291056 5.94454 0.00993655 6.05547C-0.0092325 6.1664 0.0041825 6.28051 0.048556 6.38397C0.0948984 6.48702 0.169856 6.5746 0.264519 6.63629C0.359182 6.69798 0.469569 6.73119 0.582556 6.73197V6.72997Z"
              fill="url(#paint0_linear_1479_1556)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1479_1556"
                x1="2.56156"
                y1="27.642"
                x2="27.2586"
                y2="-0.397026"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.08" stop-color="#9945FF" />
                <stop offset="0.3" stop-color="#8752F3" />
                <stop offset="0.5" stop-color="#5497D5" />
                <stop offset="0.6" stop-color="#43B4CA" />
                <stop offset="0.72" stop-color="#28E0B9" />
                <stop offset="0.97" stop-color="#19FB9B" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};