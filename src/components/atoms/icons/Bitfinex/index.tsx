import { Icon } from "@chakra-ui/react";
import React from "react";

function Bitfinex() {
  return (
    <Icon w="36px" h="36px" viewBox="0 0 120 120">
      <defs>
        <path
          id="wh9mk95c6a"
          d="M0 1.819L78.941 1.819 78.941 80.769 0 80.769z"
        />
        <path
          id="549x07n6bc"
          d="M0 1.821L77.722 1.821 77.722 56.993 0 56.993z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g transform="translate(20 18) translate(0 1.412)">
              <mask id="zc8y1omimb" fill="#fff">
                <use xlinkHref="#wh9mk95c6a" />
              </mask>
              <path
                fill="#98E35D"
                d="M2.979 69.645c3.592 6.416 30.786 20.961 54.858.901C81.913 50.483 79.894 13.982 77.723 2.261 76.96 3.96 50.684 62.3 2.979 69.638M77.723 2.261c-.281-.123-29.394-4.139-58.17 14.616C1.69 28.547-.682 45.617.139 56.999 41.99 52.31 76.773 3.621 77.723 2.261"
                mask="url(#zc8y1omimb)"
              />
            </g>
            <g transform="translate(20 18) translate(0 1.412)">
              <mask id="7mll677kjd" fill="#fff">
                <use xlinkHref="#549x07n6bc" />
              </mask>
              <path
                fill="#16B157"
                d="M77.722 2.26c-.281-.115-29.394-4.138-58.17 14.617C1.689 28.547-.682 45.615.138 56.993 41.99 52.31 76.772 3.621 77.722 2.261"
                mask="url(#7mll677kjd)"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
}

export default Bitfinex;
