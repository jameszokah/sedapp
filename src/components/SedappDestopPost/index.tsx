import React from "react";

import { Img, Text } from "components";

type SedappDestopPostProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "buttontext" | "durationtext" | "blogtext" | "descriptiontext"
> &
  Partial<{
    userimage: string;
    buttontext: string;
    durationtext: string;
    blogtext: JSX.Element | string;
    descriptiontext: JSX.Element | string;
  }>;

const SedappDestopPost: React.FC<SedappDestopPostProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between w-full">
          <Img
            className="h-[211px] md:h-auto object-cover rounded-[20px]"
            alt="sadlovesongOne"
            src={props?.userimage}
          />
          <div className="flex flex-col gap-2 justify-start sm:mt-0 mt-[22px]">
            <div className="flex flex-row items-center justify-start ml-2.5 md:ml-[0] w-[42%] md:w-full">
              {!!props?.buttontext ? (
                <Text
                  className="bg-yellow-700 h-[21px] justify-center sm:px-5 px-7 py-[3px] rounded-[5px] text-center text-white-A700 text-xs w-[95px]"
                  size="txtRobotoRomanRegular12"
                >
                  {props?.buttontext}
                </Text>
              ) : null}
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-black-900 text-center text-xs"
                  size="txtRobotoRomanMedium12"
                >
                  {props?.durationtext}
                </Text>
              </div>
            </div>
            <div className="md:h-[59px] h-[82px] relative w-full">
              <div className="absolute flex flex-col items-start justify-start left-[1%] top-[0]">
                <Text
                  className="text-black-900_ce text-center text-lg w-[65%] sm:w-full"
                  size="txtRobotoRomanMedium18Black900ce"
                >
                  {props?.blogtext}
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-700_ea text-lg w-full"
                size="txtRobotoRomanMedium18Gray700ea"
              >
                {props?.descriptiontext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SedappDestopPost.defaultProps = {
  userimage: "images/img_sadlovesong1.png",
  durationtext: ". 2 days",
  blogtext: (
    <>
      <br />
      Another Sad Love Song
    </>
  ),
  descriptiontext: (
    <>
      <br />
      This is my first attempt at a short story after many years. Do leave your
      feedback!
    </>
  ),
};

export default SedappDestopPost;
