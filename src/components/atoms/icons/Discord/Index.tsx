import { Icon } from "@chakra-ui/react";
import React from "react";
import styles from "./icon.module.css";

function Discord() {
  return (
    <Icon w="30px" h="30px" viewBox="0 0 30 30" className={styles.iconSocial}>
      <g fill="none" fillRule="evenodd">
        <g fill="#FFF" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M25 7.5S22.134 5.256 18.75 5l-.305.61c3.059.75 4.462 1.821 5.93 3.14-2.53-1.291-5.025-2.5-9.375-2.5s-6.846 1.209-9.375 2.5c1.468-1.319 3.137-2.51 5.93-3.14L11.25 5C7.7 5.334 5 7.5 5 7.5s-3.2 4.641-3.75 13.75C4.475 24.97 9.375 25 9.375 25l1.025-1.365C8.66 23.03 6.697 21.951 5 20c2.024 1.531 5.078 3.125 10 3.125S22.976 21.531 25 20c-1.697 1.95-3.66 3.03-5.4 3.635L20.625 25s4.9-.03 8.125-3.75C28.2 12.141 25 7.5 25 7.5zM10.937 18.75c-1.208 0-2.187-1.119-2.187-2.5s.979-2.5 2.188-2.5c1.208 0 2.187 1.119 2.187 2.5s-.979 2.5-2.188 2.5zm8.126 0c-1.21 0-2.188-1.119-2.188-2.5s.979-2.5 2.188-2.5c1.208 0 2.187 1.119 2.187 2.5s-.979 2.5-2.188 2.5z"
                transform="translate(-350 -5005) translate(0 4793) translate(350 212)"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
}

export default Discord;
