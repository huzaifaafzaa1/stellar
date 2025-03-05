"use client";
import { Flex,Image } from "@mantine/core";
import Link from "next/link";
import CustomButton from "./ui/CustomButton";

const items = [
  { name: "Product", link: "/product" },
  { name: "About", link: "/about" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
  { name: "Blog", link: "/blog" },
];

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      className="h-[87px] bg-white border outline outline-4 outline-white rounded-[999px] mx-[48px] relative z-10 top-[32px] px-6"
    >
      {/* Navbar Icon and Title (Left) */}
      <Flex align="center" justify="center"  gap="sm">
        <Image src="/images/websiteicon.svg" alt="website logo" width={25} height={19} />
        <p className="text-[30px] font-medium font-inter">Stellar</p>
      </Flex>

      {/* Navbar Links (Center) */}
      <Flex gap="lg">
        {items.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <p className="cursor-pointer text-sm">{item.name}</p>
          </Link>
        ))}
      </Flex>

      {/* Signup and Sign-in Buttons (Right) */}
      <Flex gap="md" align="center">
      <CustomButton variant="subtle" color="black" >Sign in</CustomButton>
      <CustomButton variant="default" color="black">Sign up for free</CustomButton>
      </Flex>
    </Flex>
  );
};

export default Navbar;
