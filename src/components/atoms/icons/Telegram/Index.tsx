import { Icon } from "@chakra-ui/react";
import React from "react";
import styles from "./icon.module.css";

function Telegram() {
  return (
    <Icon w="24px" h="24px" viewBox="0 0 24 24" className={styles.iconSocial}>
      <g fill="none" fillRule="evenodd">
        <g fill="#FFF">
          <g>
            <g>
              <path
                d="M17.852 20.93c.295.21.676.261 1.015.134.338-.129.588-.42.663-.772.797-3.743 2.73-13.218 3.454-16.622.055-.258-.036-.525-.237-.696-.203-.171-.482-.22-.73-.129C18.172 4.27 6.334 8.71 1.496 10.5c-.307.115-.506.409-.497.734.011.324.23.605.544.7 2.17.649 5.018 1.552 5.018 1.552s1.33 4.02 2.023 6.063c.088.257.29.458.554.528.265.069.546-.004.744-.19l2.837-2.678s3.275 2.4 5.132 3.722zM7.759 12.976l1.54 5.077.342-3.215 9.336-8.42c.1-.089.112-.24.03-.345-.082-.105-.233-.13-.344-.058L7.759 12.976z"
                transform="translate(-1048 -395) translate(960 50) translate(88 345)"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
}

export default Telegram;
