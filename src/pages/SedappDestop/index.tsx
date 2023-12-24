import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import RecentPost from "components/RecentPost";
import SedappDestopAuthor from "components/SedappDestopAuthor";
import SedappDestopCommetsall from "components/SedappDestopCommetsall";
import SedappDestopNav from "components/SedappDestopNav";
import SedappDestopNewsletter from "components/SedappDestopNewsletter";
import SedappDestopPost from "components/SedappDestopPost";
import SedappDestopSocialicons from "components/SedappDestopSocialicons";

const SedappDestopPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-[103px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="md:h-[549px] h-[818px] md:px-5 relative w-full">
            <div className="md:h-[549px] h-[818px] m-auto w-full">
              <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
                <SedappDestopNav className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[15px] w-full" />
                <div className="flex flex-col gap-5 justify-start mt-[-NaNpx] w-[76%] z-[1]">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[414px]">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
                      size="txtRobotoRomanExtraBold36"
                    >
                      IF YOU HAVEN’T FOUND IT YET, KEEP LOOKING
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end md:ml-[0] ml-[460px]">
                    <Text
                      className="mt-0.5 text-center text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      There is nothing so useless as doing efficiently that
                      which should not be done at all.
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[129px] w-[89%] md:w-full">
                    <Img
                      className="h-[398px] md:h-auto object-cover"
                      src="images/img_ellipse2.png"
                      alt="ellipseTwo"
                    />
                    <SedappDestopNewsletter
                      className="bg-cover bg-no-repeat flex flex-col h-[66px] items-center justify-end md:mt-0 mt-[26px] p-[13px]"
                      style={{
                        backgroundImage: "url('images/img_newsletter.svg')",
                      }}
                    />
                  </div>
                </div>
                <Img
                  className="h-[610px] ml-auto mt-[-61px] object-cover z-[1]"
                  src="images/img_ellipse2_yellow_700.png"
                  alt="ellipseTwo_One"
                />
              </div>
              <SedappDestopSocialicons className="absolute bottom-[41%] flex flex-row gap-[43px] inset-x-[0] items-start justify-center mx-auto w-auto" />
              <Img
                className="absolute bottom-[0] h-[284px] left-[17%] object-cover w-[36%]"
                src="images/img_postimage1.png"
                alt="postimageOne"
              />
            </div>
            <div className="absolute bottom-[2%] flex md:flex-col flex-row md:gap-10 items-start justify-between right-[2%] w-[84%]">
              <SedappDestopAuthor className="flex flex-col items-center justify-start md:mt-0 mt-[186px] w-1/5 md:w-full" />
              <SedappDestopPost
                className="flex flex-col items-center justify-start mb-8 w-[51%] md:w-full"
                buttontext="sorrow"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[33px] items-start justify-end md:ml-[0] ml-[207px] mt-1.5 md:px-5 w-[85%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[95px] items-center justify-start md:mt-0 mt-6 w-[48%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                <div className="flex flex-row items-start justify-start w-[26%] md:w-full">
                  <div className="bg-indigo-500 flex flex-col items-center justify-end mb-[5px] p-[5px] rounded-[5px]">
                    <Text
                      className="text-center text-white-A700 text-xs"
                      size="txtRobotoRomanRegular12"
                    >
                      new
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-1">
                    <Text
                      className="text-black-900 text-center text-xs w-[65%] sm:w-full"
                      size="txtRobotoRomanMedium12"
                    >
                      . 4 min
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[19px] text-2xl md:text-[22px] text-black-900_ce sm:text-xl"
                  size="txtRobotoRomanBold24"
                >
                  Le voyage
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] mt-[22px] text-black-900_a0 text-lg w-[74%] sm:w-full"
                  size="txtRobotoRomanSemiBold18"
                >
                  Let your hopes, not your hurts, shape your future.~Robert H.
                  Schuller
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] mt-[30px] text-black-900_7f text-lg"
                  size="txtRobotoRomanMedium18"
                >
                  <span className="text-black-900_7f font-roboto text-left font-medium">
                    <>
                      A lot can happen in a day. So much more can ensue in a
                      year. If anyone had sat me down and told me all the
                      unlikely things that could have happened, well you already
                      know, I wouldn’t have believed.
                      <br />
                      <br />
                      <br />
                      Here I am. A significant much has happened. From the
                      tumultuous events filled with heartbreaks and fears. The
                      anxiety filled prayers and the days where I can’t seem to
                      gather any confidence. I’ve lived in futures that are a
                      fig of my imagination; situations with a probability of
                      almost zero yet have held me paralyzed and incapacitated.
                      Oh! The power of the mind.
                      <br />
                      Cliché, you may be thinking and yeah, you’re probably
                      right.
                      <br />
                      <br />
                      This is a gratitude post. A post of acknowledgement. The
                      past few days had me in a state of reminiscence. I’ve lost
                      myself momentarily in flash backs and throw backs. It’s
                      what I do , especially around this time. I can’t begin to
                      tell you of the therapeutic benefits...{" "}
                    </>
                  </span>
                  <span className="text-blue-A700 font-roboto text-left font-medium">
                    Read more
                  </span>
                  <span className="text-black-900_7f font-roboto text-left font-medium">
                    .
                  </span>
                </Text>
              </div>
              <SedappDestopCommetsall className="bg-white-A700 md:h-[437px] h-[466px] sm:h-[555px] py-[13px] relative rounded-[10px] shadow-bs1 w-full" />
            </div>
            <div className="flex flex-col justify-start w-[51%] md:w-full">
              <List
                className="flex flex-col gap-[91px] items-center w-full"
                orientation="vertical"
              >
                <RecentPost className="flex flex-1 flex-col items-center justify-start ml-[5px] my-0 w-full" />
                <SedappDestopPost
                  className="flex md:flex-1 flex-col items-center justify-start mr-3.5 my-0 w-[98%] md:w-full"
                  userimage="images/img_sadlovesong1_206x220.png"
                  buttontext="sorrow"
                  durationtext=". 5 days"
                  blogtext={
                    <>
                      <br />
                      Ever coming Season
                    </>
                  }
                />
                <SedappDestopPost
                  className="flex md:flex-1 flex-col items-center justify-start mr-3.5 my-0 w-[98%] md:w-full"
                  userimage="images/img_sadlovesong1_1.png"
                  buttontext="sorrow"
                  durationtext=". 8 days"
                  blogtext="ANXIETY"
                />
              </List>
              <Button
                className="cursor-pointer leading-[normal] min-w-[143px] md:ml-[0] ml-[243px] mt-[83px] text-center text-xs"
                shape="round"
                color="blue_A400"
                size="sm"
                variant="outline"
              >
                See All Post
              </Button>
              <SedappDestopSocialicons className="flex flex-row gap-[43px] items-start justify-start md:ml-[0] ml-[212px] mt-[55px] w-auto" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-end md:ml-[0] ml-[220px] mt-[164px] md:px-5 w-[79%] md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[168px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:mt-0 mt-[11px] w-[57%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pt-0.5 px-0.5 w-full">
                  <Text
                    className="text-black-900_c9 text-center text-sm"
                    size="txtRobotoRomanBold14"
                  >
                    Gallery
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mt-[17px] p-[3px] w-auto">
                  <Text
                    className="text-black-900 text-center text-xs w-auto"
                    size="txtRobotoRomanRegular12Black900"
                  >
                    Community
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mt-2.5 p-[3px] w-auto">
                  <Text
                    className="text-black-900 text-center text-xs w-auto"
                    size="txtRobotoRomanRegular12Black900"
                  >
                    Trending
                  </Text>
                </div>
                <Text
                  className="mt-[9px] text-black-900 text-center text-xs"
                  size="txtRobotoRomanRegular12Black900"
                >
                  Picks
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pt-0.5 px-0.5 w-full">
                  <Text
                    className="text-black-900_c9 text-center text-sm"
                    size="txtRobotoRomanBold14"
                  >
                    Marketplace
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-[68%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-[3px] w-auto">
                    <Text
                      className="text-black-900 text-center text-xs w-auto"
                      size="txtRobotoRomanRegular12Black900"
                    >
                      Trending
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start p-[3px] w-auto">
                    <Text
                      className="text-black-900 text-center text-xs w-auto"
                      size="txtRobotoRomanRegular12Black900"
                    >
                      Best selling
                    </Text>
                  </div>
                  <Text
                    className="ml-2.5 md:ml-[0] text-black-900 text-center text-xs"
                    size="txtRobotoRomanRegular12Black900"
                  >
                    Latest
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] justify-start w-full">
                <div className="flex flex-col items-center justify-start pt-0.5 px-0.5 w-full">
                  <Text
                    className="text-black-900_c9 text-center text-sm"
                    size="txtRobotoRomanBold14"
                  >
                    Magazine
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start ml-4 md:ml-[0] w-[54%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-[3px] w-auto">
                    <Text
                      className="text-black-900 text-center text-xs w-auto"
                      size="txtRobotoRomanRegular12Black900"
                    >
                      Art Skills
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start p-[3px] w-auto">
                    <Text
                      className="text-black-900 text-center text-xs w-auto"
                      size="txtRobotoRomanRegular12Black900"
                    >
                      {" "}
                      Career
                    </Text>
                  </div>
                  <Text
                    className="ml-3 md:ml-[0] text-black-900 text-center text-xs"
                    size="txtRobotoRomanRegular12Black900"
                  >
                    News
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
                <div className="flex flex-col items-center justify-start p-[3px] w-full">
                  <Text
                    className="text-black-900_c9 text-center text-sm"
                    size="txtRobotoRomanBold14"
                  >
                    Newsletter
                  </Text>
                </div>
              </div>
              <Text
                className="mt-5 text-black-900 text-center text-xs w-[65%] sm:w-full"
                size="txtRobotoRomanRegular12Black900"
              >
                Subscribe to our newsletter to get weekly dose of news, updates,
                tips and special offers
              </Text>
              <SedappDestopNewsletter
                className="bg-cover bg-no-repeat md:h-16 h-[55px] mt-[33px] p-2 relative w-full"
                style={{ backgroundImage: "url('images/img_newsletter.svg')" }}
                dynamicproperty3="Enter your email to  receive daily news and updates"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SedappDestopPage;
