import { Box, chakra, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import CardProductsRecents from "./CardProdutsRecents";
import example from "../../assets/imgs/banner4.png"

export default function UltimePosts(){
    return (
      <>
        <Flex
          mt="7.5rem"
       
          direction="column"
          maxWidth="1100px"
          marginX="auto"
        >
          <VStack w="full" display="flex" justifyContent="center">
            <Text
              color="yolisa.title"
              fontSize="2rem"
              fontWeight="medium"
              lineHeight="1.2em"
              textAlign="center"
            >
              Últimos Materiais
            </Text>
            <chakra.p
              mt="2"
              color="yolisa.p"
              w="full"
              maxW="600px"
              marginX="auto"
              textAlign="center"
              lineHeight="1.2em"
              letterSpacing="wide"
              mb="2.6rem"
            >
              Confira os últimos materiais escolares publicados na YOLISA
            </chakra.p>
          </VStack>
          <Box m="2">
            <SimpleGrid
              mt="1.6rem"
              h="560"
              w="full"
              columns={{ sm: 1, md: 2, lg: 2 }}
              spacing="4"
            >
              <CardProductsRecents
                imgProduct={example}
                nameProduct="Lapis Alcmes"
                nameSalesman="Loja capabana"
                locSalesman="luanda"
                telSalesman="923534543"
                dateCreateProduct="12/04/2021"
                descProduct="Como uma plataforma com foco exclusivo a vendedores de
                  materiais escolares em angola, conheça quantos vendedores
                  estão reunidos aqui na nossa plataforma."
              />
              <CardProductsRecents
                imgProduct={example}
                nameProduct="Lapis Alcmes"
                nameSalesman="Loja capabana"
                locSalesman="luanda"
                telSalesman="923534543"
                dateCreateProduct="12/04/2021"
                descProduct="Como uma plataforma com foco exclusivo a vendedores de
                  materiais escolares em angola, conheça quantos vendedores
                  estão reunidos aqui na nossa plataforma."
              />
              <CardProductsRecents
                imgProduct={example}
                nameProduct="Lapis Alcmes"
                nameSalesman="Loja capabana"
                locSalesman="luanda"
                telSalesman="923534543"
                dateCreateProduct="12/04/2021"
                descProduct="Como uma plataforma com foco exclusivo a vendedores de
                  materiais escolares em angola, conheça quantos vendedores
                  estão reunidos aqui na nossa plataforma."
              />
              <CardProductsRecents
                imgProduct={example}
                nameProduct="Lapis Alcmes"
                nameSalesman="Loja capabana"
                locSalesman="luanda"
                telSalesman="923534543"
                dateCreateProduct="12/04/2021"
                descProduct="Como uma plataforma com foco exclusivo a vendedores de
                  materiais escolares em angola, conheça quantos vendedores
                  estão reunidos aqui na nossa plataforma."
              />
            </SimpleGrid>
          </Box>
        </Flex>
        
      </>
    );
}