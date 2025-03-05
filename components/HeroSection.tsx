"use client";
import { Flex,Image, Divider } from "@mantine/core";
import Badge from "./ui/Badge";
import Background from "./ui/Background";
import Card from "./ui/Card";
import CustomAvatar from "./ui/CustomAvatar"
import { Avatar } from "@mantine/core";

const HeroSection = () => {
  const highlights = [
    { label: "Avg. Client Rating", value: "8.8/10", icon: "arrowup" },
    { label: "Avg. Quotes", value: "748", icon: "arrowdown" },
    { label: "Avg. Agent Earnings", value: "$4,500", icon: "arrowup" },
    { label: "Avg. Client Stellar", value: "%92", icon: "arrowup" },
  ];

  return (
    <div className="HeroSection h-[1009.98px] w-[100%] border-2 border-solid border-black ">
      {/* Background */}
      <Background></Background>

      {/* Hero section content */}
      <div className="mx-[112px]">
        
        <Flex
          justify="center"
          align="center"
          direction="column"
          gap="sm"
          className="w-[592px] h-[273.98px] text-center mx-auto rounded-lg relative top-[208px] "
        >
          <p className="text-center text-sm text-purple">
            Our Framer Template
          </p>

          <div className=" text-center ">
          <p className="text-[58.25px] font-medium inline-block">
            Save time and build <br/> 
          </p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[58.25px] font-medium">better with </p>
            <Badge>Stellar</Badge>
          </div>
          </div>

          <p className="w-[415px] text-center text-lightblack ">
            Gain unparalleled insights into your data with our robust analytics
            suite and Stellar
          </p>
        </Flex>

        <div className="top-[225px] relative border-2 border-solid border-black ">
          {/* Left floating card */}
          <div className="absolute top-[-88px] left-[104px] h-[176px] w-[176px] ">
            <Card>
              <Flex direction="column" gap="lg" className="mt-2 ml-3">
                <Flex justify="center" direction="column" className="h-[30px] w-[27.57px]">
                  <Image
                    src="images/alertbell.svg"
                    alt="loading"
                    className="h-[30px] w-[27.57px]"
                  />
                </Flex>
               <div className="my-2">
                <p className="text-3xl font-medium">12K</p>
                <p className="text-grey">Customers</p>
               </div>
                
              </Flex>  
            </Card>
          </div>

          {/* Right floating card */}
          <div className="w-[176px] h-[176px] absolute top-[-88px] right-[104px]">
            <Card>
              <Flex justify="center" align="center"  direction="column" gap="xl" className="">
                <Flex direction="column" >
                <p className="text-lg font-medium my-2">Sales Meeting</p>
                <p className="text-grey text-sm my-1">11:00-01:30</p>
                </Flex>
                <Flex>
                  <CustomAvatar/>
                </Flex>
              </Flex>
            </Card>
          </div>

          {/* Center big image */}
          <Flex
            justify="center"
            align="center"
            className="mx-auto h-[400px] w-[448px]"
          >
            <Image src="images/singlephone.png" alt="" />
          </Flex>

          {/* Bottom left content */}
          <div className="absolute w-[280px] left-0 bottom-0 h-[248px] rounded-[12px]">
            <Card>
              <Flex direction="column" gap="lg" justify="center" >
                <Flex direction="column" className="my-2">
                <p className="text-lg font-medium my-1">Hi Sarah Smith,</p>
                <p className="text-xs text-lightblack my-1">What would you like to explore today?</p>
                </Flex>
                <Flex gap="sm">
                  <Flex justify="center"  align="center" className="h-[48px] w-[48px]">
                    <Avatar src="images/Avatar.png" alt="it's me" />
                  </Flex>
                  <Flex direction="column">
                    <p className="font-normal">Sarah Smith</p>
                    <p className="text-xs text-grey ">July 27, 2023</p>
                  </Flex>
                </Flex>

                <Divider />

                <Flex align="center" gap="sm" className="mx-[4px]">
                  <Image src="images/location.svg" alt="" width={13.5} height={16.3}/>
                  <p className="text-sm my-1">Sydney, Australia</p>
                </Flex>
              </Flex>
            </Card>
          </div>

          {/* Bottom right content */}
          <div className="absolute w-[280px] right-0 bottom-0 h-[248px] rounded-[12px] ">
            <Card>
              <p className="text-lg font-medium my-[20px]">
                Stellar Highlights
              </p>
              <Divider my="sm" />
              <Flex direction="column" gap="md">
              {highlights.map(({ label, value, icon }, index) => (
                <Flex key={index} align="center" justify="space-between" >
                  <p className="text-sm text-lightblack">{label}</p>
                  <Flex gap="md" > 
                  <Flex justify="center" align="center" > 
                   <Image src={`/images/${icon}.svg`} alt={icon} width={16} height={16}/>
                  </Flex>
                  <p className="text-sm font-medium">
                    {value}
                  </p>
                  </Flex>
                </Flex>
              ))}
              </Flex>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
