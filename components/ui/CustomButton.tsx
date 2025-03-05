import { Button } from "@mantine/core";
import { ButtonProps } from "@mantine/core";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  rightIcon?: ReactNode; // Right icon (optional)
}

export default function CustomButton({
  rightIcon,
  variant,
  color,
  children,
  ...props       // if we dont use props inside custombutton then by default all props will come inside it and we can spread it with ...props.  without need of, variant, color  
}: CustomButtonProps) {
  return (
    <Button
      radius="xl"
      variant={variant}
      color={color}
      {...(rightIcon && { rightSection: rightIcon })} // Conditionally pass rightSection
      {...props} // here we are using all the props that are passed
    >
      {children}
    </Button>
  );
}
