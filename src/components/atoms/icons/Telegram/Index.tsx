import { Icon } from "@chakra-ui/react";
import React from "react";
import styles from "./icon.module.css";

function Telegram() {
  return (
    <Icon w="30px" h="30px" viewBox="0 0 30 30" className={styles.iconSocial}>
      <g fill="none" fillRule="evenodd">
        <g fill="#FFF" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M22.315 26.163c.37.261.845.326 1.269.167.422-.161.735-.524.829-.964.996-4.68 3.412-16.524 4.317-20.778.069-.322-.045-.656-.296-.87-.254-.215-.603-.275-.914-.162-4.804 1.78-19.601 7.331-25.649 9.568-.383.144-.632.511-.62.918.013.404.286.756.679.874 2.713.811 6.272 1.94 6.272 1.94s1.664 5.025 2.53 7.578c.11.323.361.574.691.66.332.087.684-.003.931-.237L15.9 21.51s4.093 3 6.415 4.653zM9.699 16.22l1.925 6.346.428-4.018s7.43-6.704 11.67-10.525c.123-.112.139-.3.037-.432-.102-.132-.29-.163-.43-.073L9.699 16.22z"
                transform="translate(-310 -5005) translate(0 4793) translate(310 212)"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
}

export default Telegram;
