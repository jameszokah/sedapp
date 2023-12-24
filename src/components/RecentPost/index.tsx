import React from "react";

import { Button, Img, Text } from "components";

type RecentPostProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const RecentPost: React.FC<RecentPostProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-between w-full">
          <Img
            className="h-[206px] md:h-auto object-cover rounded-[20px]"
            src="images/img_onethingserie.png"
            alt="onethingserie"
          />
          <div className="flex flex-col items-start justify-start sm:mt-0 mt-[22px]">
            <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] w-[41%] md:w-full">
              <Button
                className="cursor-pointer font-roboto leading-[normal] min-w-[93px] text-center text-xs"
                shape="round"
                color="indigo_500"
                size="xs"
                variant="fill"
              >
                sorrow
              </Button>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-black-900 text-center text-xs"
                  size="txtRobotoRomanMedium12"
                >
                  . 2 days
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[7px]">
              <Text
                className="text-black-900_ce text-center text-lg w-[66%] sm:w-full"
                size="txtRobotoRomanMedium18Black900ce"
              >
                What one thing could you do today to help you achieve your
                goals?
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[5px] text-center text-gray-700_ea text-lg"
              size="txtRobotoRomanMedium18Gray700ea"
            >
              <>
                <br />
                This is my first attempt at a short story after many years. Do
                leave your feedback!
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

RecentPost.defaultProps = {};

export default RecentPost;
