import { Flex, Text } from "@radix-ui/themes";
import PurpleButton from "./ui/PurpleButton";
import StellarHighlights from "./StellarHighlights";

const HeroSection = () => {
  return (
  <div className="HeroSection absolute h-[1009.98px] w-[100%] border-2 border-solid border-black ">
     
      {/* gradient top image */}
      <div className="GradientTopImage  w-full h-[286px]  absolute ">
        <img
          src="images/lineargradienttop.png"
          alt="Gradient Image"
          className="w-full max-h-[286px]"
        />
      </div>

      {/* this is the contet of hero section */}
      <div className="mx-[112px]  ">
        <Flex
          justify="center"
          align="center"
          className="w-[592px] h-[273.98px] mx-auto flex-col gap-3 p-4  rounded-lg relative top-[208px] border-2 border-solid border-red-600"
        >
          <Text className="w-full text-[#6E51E0] text-center">
            Our Framer Template
          </Text>
          <Text className="w-full text-black text-5xl font-medium text-center">
            Save time and build better with <PurpleButton text="Stellar" />
          </Text>
          <Text className="w-[415px] text-center ">
            Gain unparalleled insights into your data with our robust analytics
            suite and Stellar
          </Text>
        </Flex>

        <div className="border-2  top-[225px] relative  border-solid border-yellow-600">
          <Flex
            justify="center"
            className=" w-[176px] h-[176px] flex-col gap-4 absolute top-[-88px] left-[104px]  border-2 border-solid border-black bg-white"
          >
            <Flex
              justify="center"
              align="center"
              className="h-[30px] w-[28px] ml-[34.21px]   "
            >
              <img
                src="images/alertbell.svg"
                alt="loading"
                className="max-h-[30px] max-w-[27.57px] "
              />
            </Flex>

            <Text className="ml-[34.21px]">12K</Text>

            <Text className="ml-[34.21px]">Customers</Text>
          </Flex>

          <Flex
            justify="center"
            className=" w-[176px] h-[176px] flex-col gap-5 absolute top-[-88px] right-[104px]  border-2 border-solid border-black bg-white"
          >
            <Flex justify="center" className="flex-col gap-1 mx-[25px]">
              <Text>Sales Meeting</Text>
              <Text className="">11:00-01:30</Text>
            </Flex>
            <Flex className="">img1 img2 img3 img4</Flex>
          </Flex>

          {/* big image in center */}
          <Flex justify="center" align="center" height="400px" width="448px" className=" mx-[615px] top-0 border-2 border-solid border-black">
            <img src="images/singlephone.png" alt="" />
          </Flex>

          {/* bottom left content  */}
          <Flex justify="center" className="flex-col gap-2 absolute w-[280px] left-0 bottom-0 h-[248px] rounded-[12px] border-2 border-solid border-black">
            <Text className="ml-7">Hi Sarah Smith,</Text>
            <Text className="ml-7">What would you like to explore today?</Text>

            <Flex className="gap-2 ml-7">
              <Flex justify="center" content="center" height="48px" width="48px">img</Flex>
              <Flex className="flex-col gap-1">
                <Text>Sarah Smith</Text>
                <Text>July 27, 2023</Text>
              </Flex>
            </Flex>

            <hr />

            <Flex align="center" className="gap-3 ml-7">
              <Flex justify="center" content="center" height="16.3px" width="13.5px"><img src="images/location.svg" alt="" /></Flex>
              <Text>Sydney, Australia</Text>
            </Flex>

          </Flex>

         {/* bottom right content */}
          <div className="absolute w-[280px] right-0 bottom-0 h-[248px] rounded-[12px] border-2 border-solid border-black">
            <Text>Stellar Highlights</Text>
            <hr />
            <StellarHighlights></StellarHighlights>
          </div>
          
        </div>


      </div>
    </div>
  );
};

export default HeroSection;
