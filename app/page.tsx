import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="3" align="center" justify="center" style={{ height: "100vh" }}>
      <Text size="5">Hello from Radix Themes 🎉</Text>
      <Button size="3">Let's go</Button>
    </Flex>
  );
}
