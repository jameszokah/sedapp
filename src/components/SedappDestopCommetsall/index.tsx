import React from "react";

import { Button, Img, Line, Text } from "components";

type SedappDestopCommetsallProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "comments"
  | "timeOne"
  | "sedemapplehOne"
  | "wonderfulpiece"
  | "timeTwo"
  | "sedemapplehTwo"
  | "wonderfulpieceOne"
  | "timeThree"
  | "sedemapplehThree"
  | "wonderfulpieceTwo"
  | "typeyourcommentOne"
  | "send"
> &
  Partial<{
    comments: string;
    timeOne: string;
    sedemapplehOne: string;
    wonderfulpiece: string;
    timeTwo: string;
    sedemapplehTwo: string;
    wonderfulpieceOne: JSX.Element | string;
    timeThree: string;
    sedemapplehThree: string;
    wonderfulpieceTwo: string;
    typeyourcommentOne: string;
    send: string;
  }>;

const SedappDestopCommetsall: React.FC<SedappDestopCommetsallProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[91%]">
          <div className="flex flex-col gap-11 justify-start w-full">
            <Text
              className="md:ml-[0] ml-[26px] text-black-900_c9 text-center text-sm"
              size="txtRobotoRomanExtraBold14Black900c9"
            >
              {props?.comments}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="bg-white-A700 flex flex-row gap-[13px] items-start justify-start p-2 rounded-[5px] shadow-bs2 w-[49%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-[13px] mt-[3px] w-[82%]">
                  <div className="flex flex-col gap-[13px] justify-start w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-start w-[68%] md:w-full">
                      <div className="flex flex-col items-center justify-start rotate-[2deg] w-10">
                        <Img
                          className="h-[39px] md:h-auto rotate-[-1deg] rounded-[50%] w-10"
                          src="images/img_sedappprofile1_39x40.png"
                          alt="sedappprofileOne_One"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="text-[11px] text-black-900_75 text-center"
                          size="txtRobotoRomanRegular11"
                        >
                          {props?.timeOne}
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[3px] text-black-900_aa text-center text-xs"
                          size="txtRobotoRomanMedium12Black900aa"
                        >
                          {props?.sedemapplehOne}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[5px] text-black-900_75 text-center text-xs"
                      size="txtRobotoRomanMedium12Black90075"
                    >
                      {props?.wonderfulpiece}
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[17px] mt-[7px] w-[17px]"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-between mt-[25px] w-full">
                <div className="bg-white-A700 flex sm:flex-1 flex-row gap-5 items-start justify-start mb-[45px] p-2 rounded-[5px] shadow-bs2 w-[49%] sm:w-full">
                  <div className="md:h-[46px] h-[81px] my-0.5 relative w-[79%]">
                    <Text
                      className="absolute left-[26%] text-[11px] text-black-900_75 text-center top-[5%]"
                      size="txtRobotoRomanRegular11"
                    >
                      {props?.timeTwo}
                    </Text>
                    <div className="absolute md:h-[42px] h-[81px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute flex flex-col items-center justify-start left-[0] rotate-[2deg] top-[0] w-10">
                        <Img
                          className="h-[39px] md:h-auto rotate-[-1deg] rounded-[50%] w-10"
                          src="images/img_sedappprofile1_1.png"
                          alt="sedappprofileOne_Two"
                        />
                      </div>
                      <Text
                        className="absolute inset-x-[0] mx-auto text-black-900_aa text-center text-xs top-[22%] w-max"
                        size="txtRobotoRomanMedium12Black900aa"
                      >
                        {props?.sedemapplehTwo}
                      </Text>
                      <Text
                        className="absolute bottom-[0] right-[0] text-black-900_75 text-center text-xs w-[93%] sm:w-full"
                        size="txtRobotoRomanMedium12Black90075"
                      >
                        {props?.wonderfulpieceOne}
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[17px] mt-[11px] w-[17px]"
                    src="images/img_favorite_black_900.svg"
                    alt="favorite_One"
                  />
                </div>
                <div className="bg-white-A700 flex sm:flex-1 flex-row gap-3 items-start justify-start sm:mt-0 mt-[46px] p-2 rounded-[5px] shadow-bs2 w-[49%] sm:w-full">
                  <div className="flex flex-col items-center justify-start mb-[13px] mt-[3px] w-[82%]">
                    <div className="flex flex-col gap-[13px] justify-start w-full">
                      <div className="flex flex-row gap-[9px] items-start justify-start w-[68%] md:w-full">
                        <div className="flex flex-col items-center justify-start rotate-[2deg] w-10">
                          <Img
                            className="h-[39px] md:h-auto rotate-[-1deg] rounded-[50%] w-10"
                            src="images/img_sedappprofile1_2.png"
                            alt="sedappprofileOne_Three"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mt-1">
                          <Text
                            className="text-[11px] text-black-900_75 text-center"
                            size="txtRobotoRomanRegular11"
                          >
                            {props?.timeThree}
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[3px] text-black-900_aa text-center text-xs"
                            size="txtRobotoRomanMedium12Black900aa"
                          >
                            {props?.sedemapplehThree}
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[5px] text-black-900_75 text-center text-xs"
                        size="txtRobotoRomanMedium12Black90075"
                      >
                        {props?.wonderfulpieceTwo}
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[17px] mt-[11px] w-[17px]"
                    src="images/img_favorite_black_900.svg"
                    alt="favorite_Two"
                  />
                </div>
              </div>
              <div className="bg-blue-50 flex flex-row items-center justify-start ml-24 md:ml-[0] mt-[60px] p-[7px] rounded-[5px] shadow-bs w-[58%] md:w-full">
                <Text
                  className="ml-2 text-[11px] text-black-900_5e text-center"
                  size="txtRobotoRomanRegular11Black9005e"
                >
                  {props?.typeyourcommentOne}
                </Text>
                <Img
                  className="h-5 ml-9 w-5"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto leading-[normal] min-w-[68px] ml-[17px] text-center text-xs"
                  shape="round"
                  color="blue_A700"
                  size="sm"
                  variant="fill"
                >
                  {props?.send}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Line className="absolute bg-black-900_26 h-px inset-x-[0] mx-auto top-[9%] w-full" />
      </div>
    </>
  );
};

SedappDestopCommetsall.defaultProps = {
  comments: "Comments",
  timeOne: "10 mins ago",
  sedemapplehOne: "Sedem Appleh",
  wonderfulpiece: "Wonderful piece Sed… Awesome👐",
  timeTwo: "10 mins ago",
  sedemapplehTwo: "Sedem Appleh",
  wonderfulpieceOne: (
    <>
      This is so true.
      <br />
      <br />
      It’s so hard to forgive ourselves.
    </>
  ),
  timeThree: "10 mins ago",
  sedemapplehThree: "Sedem Appleh",
  wonderfulpieceTwo: "Wonderful piece Sed… Awesome👐",
  typeyourcommentOne: "Type your comments here...",
  send: "Send",
};

export default SedappDestopCommetsall;
