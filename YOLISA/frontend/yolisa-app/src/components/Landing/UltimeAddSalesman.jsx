import { Box, chakra, Flex,  SimpleGrid,  Text, VStack } from "@chakra-ui/react";
import CardSalesman from "./CardSalesman";
import example1 from "../../assets/imgs/example1.jpg";
import example2 from "../../assets/imgs/example2.jpg";

export default function UltimeAddSalesman(){
    return (
      <Flex mt="7.5rem" direction="column" maxWidth="1100px" marginX="auto">
        <VStack w="full" display="flex" justifyContent="center">
          <Text
            color="yolisa.title"
            fontSize="2rem"
            fontWeight="medium"
            lineHeight="1.2em"
            textAlign="center"
          >
            Últimos vendedores
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
            mb="1.6rem"
          >
            Confira os últimos vendedores que se cadastraram na YOLISA
          </chakra.p>
        </VStack>

        <Box m="2" mt="1.6rem">
          <SimpleGrid
            w="full"
            columns={{ sm: 1, md: 2, lg: 4 }}
            spacing="4"
            minChildWidth={{ base: "240px", md: "260px", lg: "240px" }}
          >
            <CardSalesman
              imgSalesman={example1}
              nameSalesman="Loja Capacabana"
              locSalesman="Luanda"
              telSalesman="924249533"
            />
            <CardSalesman
              imgSalesman={example2}
              nameSalesman="Loja Capacabana"
              locSalesman="Luanda"
              telSalesman="924249533"
            />
            <CardSalesman
              imgSalesman={example1}
              nameSalesman="Loja Capacabana"
              locSalesman="Luanda"
              telSalesman="924249533"
            />
            <CardSalesman
              imgSalesman={example2}
              nameSalesman="Loja Capacabana"
              locSalesman="Luanda"
              telSalesman="924249533"
            />
          </SimpleGrid>
        </Box>
      </Flex>
    );
}