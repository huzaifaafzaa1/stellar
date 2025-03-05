import { Avatar } from "@mantine/core";

const avatars = [
  { src: "images/GroupAvatar1.png" },
  { src: "images/GroupAvatar2.png" },
  { src: "images/GroupAvatar3.png" },
];

const CustomAvatar = () => {
  return (
    <Avatar.Group>
      {avatars.map((avatar, index) => (
        <Avatar key={index} src={avatar.src} />
      ))}
      <Avatar color="black">+8</Avatar>
    </Avatar.Group>
  );
};

export default CustomAvatar;
