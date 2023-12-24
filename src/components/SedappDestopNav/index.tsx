import React from "react";

import { Img, Text } from "components";

type SedappDestopNavProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "sedapp" | "blog" | "news" | "language" | "about" | "buttontext"
> &
  Partial<{
    sedapp: string;
    blog: string;
    news: string;
    language: string;
    about: string;
    buttontext: string;
  }>;

const SedappDestopNav: React.FC<SedappDestopNavProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start mb-[3px] w-[86%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Text
              className="md:mt-0 mt-1 text-black-900 text-center text-sm"
              size="txtRobotoRomanExtraBold14"
            >
              {props?.sedapp}
            </Text>
            <Text
              className="md:ml-[0] ml-[72px] md:mt-0 mt-[5px] text-black-900 text-center text-xs"
              size="txtRobotoRomanRegular12Black900"
            >
              {props?.blog}
            </Text>
            <Text
              className="md:ml-[0] ml-[101px] md:mt-0 mt-[3px] text-black-900 text-center text-xs"
              size="txtRobotoRomanRegular12Black900"
            >
              {props?.news}
            </Text>
            <Text
              className="md:ml-[0] ml-[90px] md:mt-0 mt-1 text-black-900 text-center text-xs"
              size="txtRobotoRomanRegular12Black900"
            >
              {props?.language}
            </Text>
            <Text
              className="md:ml-[0] ml-[74px] md:mt-0 mt-1 text-black-900 text-center text-xs"
              size="txtRobotoRomanRegular12Black900"
            >
              {props?.about}
            </Text>
            <Img
              className="h-[27px] md:ml-[0] ml-[502px] w-[26px]"
              src="images/img_search.svg"
              alt="search"
            />
            <div className="bg-blue-A700 flex flex-col items-center justify-end md:ml-[0] ml-[58px] p-[5px] rounded-[5px]">
              <Text
                className="text-center text-white-A700 text-xs"
                size="txtRobotoRomanRegular12"
              >
                {props?.buttontext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SedappDestopNav.defaultProps = {
  sedapp: "Sedapp",
  blog: "Blog",
  news: "News",
  language: "Contact ",
  about: "About",
  buttontext: "Sedapp",
};

export default SedappDestopNav;
