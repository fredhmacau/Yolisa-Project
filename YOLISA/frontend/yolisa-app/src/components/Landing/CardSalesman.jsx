import { Badge, Flex, HStack, Img, Text } from "@chakra-ui/react";

export default function CardSalesman({ imgSalesman, nameSalesman, locSalesman,telSalesman}) {
  return (
    <Flex
      overflow="hidden"
      rounded="md"
      shadow="md"
      p="3"
      flexDirection="column"
      align="flex-start"
      spacing="4"
    >
      <Img src={imgSalesman} mt="1" mb="3" h="200" w="full" />
      <Flex direction="column">
        <Text
          fontSize="1.125rem"
          mb="1"
          lineHeight="1.2em"
          color="yolisa.title"
        >
          {nameSalesman}
        </Text>
        <HStack direction="row">
          <Badge
            px="1"
            bgColor="#1b2342"
            textColor="yolisa.50"
            fontSize="0.625rem"
            variant="solid"
            fontWeight="500"
          >
            {locSalesman}
          </Badge>
          <Badge
            px="1"
            fontSize="0.625rem"
            fontWeight="500"
            variant="solid"
            bgColor="#74777d"
          >
            {telSalesman}
          </Badge>
        </HStack>
      </Flex>
    </Flex>
  );
}
