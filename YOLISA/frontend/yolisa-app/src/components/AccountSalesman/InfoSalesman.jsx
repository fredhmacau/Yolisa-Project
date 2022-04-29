import { Avatar, Badge, Container, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import banner from "../../assets/imgs/banner5.png";
import Controls from "./Controls";
export default function InfoSalesman() {
  return (
    <>
      <Flex
        w="full"
        h="18.75rem"
        bgImage={banner}
        bgAttachment="fixed"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgClip="unset"
        
      >
        <Flex w="full" h="full" bg="#04091edb">
          <Flex
            w="full"
            maxWidth="1100px"
            justifyContent="center"
            marginX="auto"
            direction="column"
          >
            <Container w="full" maxWidth="800px" marginX="auto">
              <Flex
                w="full"
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Wrap mt="-4">
                  <WrapItem>
                    <Avatar
                      ring="2"
                      ringColor="#f8fafc"
                      size="2xl"
                      name="Tapabana"
                    />
                  </WrapItem>
                </Wrap>
                <Text
                  mt="3"
                  color="yolisa.50"
                  fontSize="1.125rem"
                  fontWeight="medium"
                  lineHeight="1.2em"
                >
                  Tapabana materiais
                </Text>
                <Badge
                py="1"
                  px="1"
                  bgColor="#424344"
                  textColor="yolisa.50"
                  fontSize="0.625rem"
                  variant="solid"
                  fontWeight="500"
                  rounded="sm"
                  mt="2"
                >
                  NIF: 1223555645LA9
                </Badge>
              </Flex>
            </Container>
          </Flex>
        </Flex>
      </Flex>
      <Controls />
    </>
  );
}
