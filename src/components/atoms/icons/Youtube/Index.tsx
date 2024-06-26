import { Icon } from "@chakra-ui/react";
import React from "react";
import styles from "./icon.module.css";

function Youtube() {
  return (
    <Icon w="30px" h="30px" viewBox="0 0 30 30" className={styles.iconSocial}>
      <g fill="none" fillRule="evenodd">
        <g fill="#FFF" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M15.315 5.25c1.6.008 8.515.069 10.4.582 1.182.318 2.117 1.254 2.435 2.436.534 1.974.593 5.891.6 6.53v.246c-.007.81-.065 4.564-.582 6.462-.318 1.183-1.254 2.119-2.436 2.436-1.927.526-9.109.577-10.498.582h-.468c-1.39-.005-8.571-.056-10.498-.582-1.182-.317-2.118-1.253-2.436-2.436-.517-1.914-.575-5.655-.581-6.463v-.312c.006-.807.062-4.547.564-6.445.318-1.183 1.253-2.118 2.436-2.436 1.968-.537 9.423-.594 10.58-.6zm-3.068 5.507v8.26l7.13-4.13-7.13-4.13z"
                transform="translate(-390 -5005) translate(0 4793) translate(390 212)"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
}

export default Youtube;
