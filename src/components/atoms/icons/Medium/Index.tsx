import { Icon } from "@chakra-ui/react";
import React from "react";
import styles from "./icon.module.css";

function Medium() {
  return (
    <Icon w="30px" h="30px" viewBox="0 0 30 30" className={styles.iconSocial}>
      <g fill="none" fillRule="evenodd">
        <g fill="#FFF" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M5.465 9.049c.03-.307-.086-.61-.316-.817L2.815 5.42V5h7.248l5.602 12.286L20.591 5H27.5v.42l-1.996 1.914c-.172.13-.257.346-.222.56v14.06c-.035.213.05.429.222.56l1.95 1.913v.42h-9.805v-.42l2.02-1.96c.198-.198.198-.257.198-.56V10.542l-5.614 14.259h-.759L6.958 10.542v9.556c-.054.402.08.807.362 1.097l2.626 3.186v.42H2.5v-.42l2.626-3.186c.28-.29.407-.698.339-1.097V9.048z"
                transform="translate(-270 -5005) translate(0 4793) translate(270 212)"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
}

export default Medium;
