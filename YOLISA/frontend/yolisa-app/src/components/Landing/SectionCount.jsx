import { chakra, Flex, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import ban from "../../assets/imgs/banner4.jpg";
export default function SectionCount() {
  return (
    <Flex mt="7.5rem" bg="yolisa.bg" maxWidth="1100px" marginX="auto">
      <Stack direction="row"h={{base:"600",md:"380"}} shadow="md" w="full" bg="#04091e4f">
        <Flex
          w="50%"
          display={{ base: "none", md: "flex" }}
          
          bgImage={ban}
          bgRepeat="no-repeat"
          bgPos="center"
          bgSize="cover"
        >
          <Flex w="full" h="full" bg="#19243878"></Flex>
        </Flex>
        <Flex w={{ base: "full", md: "50%" }} direction="column">
          <Flex
            w="full"
            pt="8"
            px="3"
            direction="column"
            justify="start"
            align="flex-start"
          >
            <Text
              color="yolisa.50"
              fontSize="1.5rem"
              fontWeight="medium"
              lineHeight="1.2em"
            >
              Conheça nossos valores
            </Text>
            <chakra.p
              mt="4"
              color="yolisa.50"
              w="full"
              maxW="600px"
              fontSize="0.875rem"
              textAlign="left"
              lineHeight="1.2em"
              maxWidth="450px"
              
              fontWeight="300"
            >
              Como uma plataforma com foco exclusivo a vendedores de materiais
              escolares em angola, conheça quantos vendedores estão reunidos
              aqui na nossa plataforma.
            </chakra.p>
            <SimpleGrid
              w="full"
              mt="6"
              h="220"
              columns={{ base: 1, md: 2 }}
              gap="3"
            >
              <Flex py="9" direction="column">
                <Text
                  color="yolisa.button"
                  fontSize="2rem"
                  fontWeight="500"
                  lineHeight="1.2em"
                >
                  +36
                </Text>
                <chakra.p
                  mt="4"
                  color="#cac6c6"
                  w="full"
                  maxW="600px"
                  fontSize="0.75rem"
                  textAlign="left"
                  lineHeight="1.2em"
                  maxWidth="210px"
                >
                  Vendedores já se juntaram a nossa plataforma para publicar os
                  seus produtos e atrairem mais clientes ao seu estabelecimento
                  ou loja.
                </chakra.p>
              </Flex>
              {/* Second */}
              <Flex py="9" direction="column">
                <Text
                  color="yolisa.button"
                  fontSize="2rem"
                  fontWeight="500"
                  lineHeight="1.2em"
                >
                  +136
                </Text>
                <chakra.p
                  mt="4"
                  color="#cac6c6"
                  w="full"
                  maxW="600px"
                  fontSize="0.75rem"
                  textAlign="left"
                  lineHeight="1.2em"
                  maxWidth="210px"
                >
                  Produtos já foram publicados na nossa plataforma por diversos
                  vendedores cadastrados na nossa plataforma.
                </chakra.p>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
