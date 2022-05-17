import { Badge, Box, chakra, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export default function CardProductsRecents({imgProduct,nameProduct,nameSalesman,dateCreateProduct,locSalesman,telSalesman,descProduct}){
    return (
      <Flex p="4" w="full" h="full" bg="#f8fafc" rounded="md" shadow="md">
        <SimpleGrid w="full" gap="2" columns={2}>
          <Box
            bgImage={imgProduct}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
          ></Box>
          <Box>
            <VStack
              display="flex"
              px="2"
              align="flex-start"
              justifyContent="flex-start"
            >
              <Text
                color="yolisa.title"
                fontSize="1.25rem"
                fontWeight="medium"
                lineHeight="1em"
              >
                {nameProduct}
              </Text>
              <Text
                color="yolisa.title"
                fontSize="0.9rem"
                fontWeight="medium"
                as="h4"
                lineHeight="0.8em"
              >
                {nameSalesman}
              </Text>
              <HStack>
                <Badge
                  px="1"
                  bgColor="#1b2342"
                  textColor="yolisa.50"
                  fontSize="0.625rem"
                  variant="solid"
                  fontWeight="500"
                  rounded="sm"
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
              <Box>
                <Text
                  color="yolisa.title"
                  fontSize="0.625rem"
                  fontWeight="medium"
                  as="h4"
                  lineHeight="0.8em"
                  mt="2"
                >
                  {dateCreateProduct}
                </Text>
                <chakra.p
                  mt="2"
                  color="yolisa.p"
                  w="full"
                  maxW="600px"
                  fontSize="0.875rem"
                  textAlign="left"
                  lineHeight="1.2em"
                  maxWidth="450px"
                  fontWeight="300"
                  noOfLines="7"
                >
                  {descProduct}
                </chakra.p>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Flex>
    );
}