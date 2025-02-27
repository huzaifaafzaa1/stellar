import React from "react";

interface PurpleButtonProps {
  text: string;
}

const PurpleButton: React.FC<PurpleButtonProps> = ({ text }) => {
  return (
    <button className="bg-[#6E51E0] h-[84.79px] rounded-[999px] px-6 text-white text-5xl font-normal ">
      {text}
    </button>
  );
};

export default PurpleButton;
