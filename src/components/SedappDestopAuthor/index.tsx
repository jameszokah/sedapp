import React from "react";

import { Img, Text } from "components";

type SedappDestopAuthorProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "blogdate"
> &
  Partial<{ username: string; blogdate: string }>;

const SedappDestopAuthor: React.FC<SedappDestopAuthorProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 md:h-[42px] h-[57px] p-1.5 relative rounded-[5px] shadow-bs w-full">
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[5%] my-auto rotate-[2deg] w-[19%]">
            <Img
              className="h-[42px] md:h-auto rotate-[-2deg] rounded-[50%] w-full"
              src="images/img_sedappprofile1.png"
              alt="sedappprofileOne"
            />
          </div>
          <Text
            className="absolute left-[26%] text-black-900 text-center text-xs top-[23%]"
            size="txtRobotoRomanMedium12"
          >
            {props?.username}
          </Text>
          <div className="absolute bottom-[11%] flex flex-col items-start justify-start left-[21%]">
            <Text
              className="text-black-900 text-center text-xs"
              size="txtRobotoRomanRegular12Black900"
            >
              {props?.blogdate}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SedappDestopAuthor.defaultProps = {
  username: "Sedem Appleh",
  blogdate: "18 Mar, 2022",
};

export default SedappDestopAuthor;
