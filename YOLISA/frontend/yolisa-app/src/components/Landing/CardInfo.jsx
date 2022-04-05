import { chakra, Circle, Img, Text, VStack } from "@chakra-ui/react";


export default function CardInfo({iconCard,titleCard,descCard}) {
  
  return (
    <VStack
      overflow="hidden"
      p="3"
      display="flex"
      flexDirection="column"
      align="flex-start"
      bg="#f8fafc"
      rounded="md"
      shadow="md"
      spacing="4"
    >
      <Circle
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="yolisa.button"
        w="3.25rem"
        h="3.25rem"
      >
        <Img src={iconCard} w="2rem" h="1.5rem" />
      </Circle>
      <Text fontSize="1.125rem" pl="1" lineHeight="1.2em" color="yolisa.title">
        {titleCard}
      </Text>
      <chakra.p
        mt="2"
        color="yolisa.p"
        fontSize="0.875rem"
        pl="1"
        textAlign="left"
        lineHeight="1.2em"
        letterSpacing="wide"
        fontWeight="300"
        noOfLines={4}
      >
        {descCard}
      </chakra.p>
    </VStack>
  );
}
