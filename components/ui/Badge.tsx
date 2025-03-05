import { Badge as MantineBadge } from "@mantine/core";
import { ReactNode } from "react";

interface CustomBadgeProps {
  children: ReactNode;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ children }) => {
  return (
    <MantineBadge 
      color="purple.6" 
      px="12px" 
      h="84.79px" 
      w="201.68px" 
      radius="999px"
      size="50px"
      
    >
       <span style={{ textTransform: "capitalize" }}>{children}</span>   {/* textTransform: "capitalize" ensures only the first letter is capitalized. */}
    </MantineBadge>
  );
};

export default CustomBadge;
