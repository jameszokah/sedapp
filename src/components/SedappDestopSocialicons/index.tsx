import React from "react";

import { Img } from "components";

type SedappDestopSocialiconsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const SedappDestopSocialicons: React.FC<SedappDestopSocialiconsProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-6 w-6" src="images/img_link.svg" alt="link" />
        <Img className="h-6 w-6" src="images/img_trash.svg" alt="trash" />
        <Img className="h-6 w-6" src="images/img_facebook.svg" alt="facebook" />
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_info.svg"
          alt="info"
        />
      </div>
    </>
  );
};

SedappDestopSocialicons.defaultProps = {};

export default SedappDestopSocialicons;
