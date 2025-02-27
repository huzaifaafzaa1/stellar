import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

const items = [
  { name: "Product", link: "/product" },
  { name: "About", link: "/about" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
  { name: "Blog", link: "/blog" },
];

const Navbar = () => {
  return (
    <Flex justify="between" align="center"  className=" h-[87px]  rounded-[999px] mx-[48px] relative top-[32px] bg-white  border-2 border-solid border-black px-6 ">

      {/* Navbar Icon and Title (Left) */}
      <Flex  className="gap-2 items-center">
        <div className="w-[25px] h-[19px]">
          <img src="images/websiteicon.svg" alt="website logo" className="min-w-[25px] min-h-[19px]" />
        </div>
        <Text className=" text-xl font-medium">Stellar</Text>
      </Flex>

      {/* Navbar Links (Center) */}
      <Flex className="gap-6">
        {items.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <Text className="cursor-pointer">{item.name}</Text>
          </Link>
        ))}
      </Flex>

      {/* Signup and Sign-in Buttons (Right) */}
      <Flex className="gap-3 items-center">
        <button className="h-[39px] w-[76px]">Sign in</button>
        <button className="h-[39px] w-[132px] rounded-[999px] p-2 border font-medium text-[14px] ">Sign up for free</button>
      </Flex>

    </Flex>
  );
};

export default Navbar;
