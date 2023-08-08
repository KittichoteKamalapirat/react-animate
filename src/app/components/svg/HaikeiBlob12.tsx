import * as React from "react";
const HeikeiBlob12 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={900}
    height={600}
    {...props}
    class="blob-motion"
  >
    <g>
      <path
        id="blob1"
        v
        style={{
          fill: "#f2cfd3",
        }}
        d="M203.1 -47.5C228.7 12.7 191 111.9 131.1 147.8C71.1 183.6 -11.2 156.1 -84.3 105.5C-157.4 54.9 -221.4 -18.9 -205.8 -65.4C-190.2 -111.8 -95.1 -130.9 -3.2 -129.9C88.8 -128.8 177.5 -107.7 203.1 -47.5"
      />
      <path
        id="blob4"
        style={{
          fill: "#f2cfd3",
          // visibility: "hidden",
        }}
        d="M161.2 -77.4C175.9 -7.1 132 57.1 68.2 106.5C4.3 155.9 -79.5 190.4 -135.8 156.7C-192 123 -220.6 21 -193.4 -66.5C-166.1 -154 -83.1 -227 -4.9 -225.4C73.2 -223.8 146.5 -147.6 161.2 -77.4"
      />
    </g>
  </svg>
);
export default HeikeiBlob12;
