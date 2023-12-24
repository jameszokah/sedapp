import React from "react";

import { Button, Text } from "components";

type SedappDestopNewsletterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "dynamicproperty1" | "dynamicproperty2" | "dynamicproperty3"
> &
  Partial<{
    dynamicproperty1: string;
    dynamicproperty2: string;
    dynamicproperty3: string;
  }>;

const SedappDestopNewsletter: React.FC<SedappDestopNewsletterProps> = (
  props,
) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_newsletter.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[91%]">
          <div className="flex flex-row gap-[13px] items-center justify-between w-full">
            {!!props?.dynamicproperty1 ? (
              <div className="bg-gray-100 h-[31px] rounded w-[71%]"></div>
            ) : null}
            <Button
              className="!text-white-A700 cursor-pointer font-roboto leading-[normal] min-w-[98px] text-center text-xs"
              shape="round"
              color="blue_A700"
              size="sm"
              variant="fill"
            >
              {props?.dynamicproperty2}
            </Button>
          </div>
        </div>
        {!!props?.dynamicproperty3 ? (
          <Text
            className="absolute bottom-[15%] left-[8%] text-center text-gray-500 text-xs w-[58%] sm:w-full"
            size="txtRobotoRomanRegular12Gray500"
          >
            {props?.dynamicproperty3}
          </Text>
        ) : null}
      </div>
    </>
  );
};

SedappDestopNewsletter.defaultProps = { dynamicproperty2: "Subscribe" };

export default SedappDestopNewsletter;
