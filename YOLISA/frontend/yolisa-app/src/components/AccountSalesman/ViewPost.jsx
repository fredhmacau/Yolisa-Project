import { Badge, HStack, Image,Box,Flex, Text, VStack,chakra } from "@chakra-ui/react";

import MoreFunctionsPost from "./MoreFunctionsPost";
export default function ViewPost({ imagePost, productName, price, descProduct,idPost}) {
  return (
    <>
      <Flex
        w="full"
        direction={{ base: "column", md: "row" }}
        marginX="auto"
        maxWidth="600px"
        bg="#f8fafc"
        rounded="md"
        mt="1rem"
      >
        <Box w={{ base: "100%", md: "40%" }} roundedLeft="md" p="3">
          <Image src={imagePost} border="2px" borderColor="gray.200" w="full" h="10rem" rounded="md" objectFit="cover" />
        </Box>
        <Flex
          w={{ base: "100%", md: "60%" }}
          roundedRight="md"
          direction="row"
          justifyContent="space-between"
        >
          <Box w="full">
            <VStack
              display="flex"
              px="2"
              align="flex-start"
              justifyContent="flex-start"
              mt="3"
              w="full"
            >
              <Flex justifyContent="space-between" w="full">
                <Text
                  color="yolisa.title"
                  fontSize="1.125rem"
                  fontWeight="medium"
                  lineHeight="1em"
                >
                  {productName}
                </Text>
                <Box>
                  <MoreFunctionsPost idPost={idPost} />
                </Box>
              </Flex>

              <HStack>
                
                <Badge
                  px="1"
                  fontSize="0.625rem"
                  fontWeight="500"
                  variant="solid"
                  bgColor="#74777d"
                >
                  {price}kz
                </Badge>
              </HStack>
              <chakra.p
                mt="2"
                color="yolisa.p"
                w="full"
                fontSize="0.75rem"
                textAlign="left"
                lineHeight="1.2em"
                maxWidth={{ base: "400px", md: "250px" }}
                fontWeight="300"
                noOfLines="5"
                pb="4"
              >
                {descProduct}
              </chakra.p>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
