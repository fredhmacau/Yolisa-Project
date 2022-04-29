import { Badge, HStack, Image,Box,Flex, Text, VStack,chakra } from "@chakra-ui/react";
import example from "../../assets/imgs/banner5.png";
import MoreFunctionsPost from "./MoreFunctionsPost";
export default function ViewPost() {
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
          <Image src={example} size="md" rounded="md" objectFit="cover" />
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
                  Caderno bravo
                </Text>
                <Box>
                    <MoreFunctionsPost/>
                </Box>
              </Flex>

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
                  luanda
                </Badge>
                <Badge
                  px="1"
                  fontSize="0.625rem"
                  fontWeight="500"
                  variant="solid"
                  bgColor="#74777d"
                >
                  92424333
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
                Como uma plataforma com foco exclusivo a vendedores de materiais
                escolares em angola, conheça quantos vendedores estão reunidos
                aqui na nossa plataforma.
              </chakra.p>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
