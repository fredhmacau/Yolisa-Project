import { Flex } from "@chakra-ui/react";

export default function Header(props) {
  return (
    <Flex
      w="full"
      h="auto"
      bg="yolisa.bg"
      align="center"
      justifyItems="center"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
