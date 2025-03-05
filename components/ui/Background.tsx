import { Image } from "@mantine/core";

const Background = () => {
  return (
    <div className="Background h-[712px] w-full absolute bg-gray-100 border-2 border-solid border-red-500">

        <div className="GradientTopImage h-[286px] w-full absolute  ">
        <Image src="images/lineargradienttop.png" alt="Gradient Image" className="w-full max-h-[286px]" />
        </div>

        <div className="GradientBottomImage h-[286px] absolute bottom-0 ">
        <Image src="images/lineargradientbottom.png" alt="Gradient Image" className="w-full h-[286px] " />
        </div>

    </div>
  )
}

export default Background
