import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CardInfo from "./CardInfo";
import iconSearch from "../../assets/icons/search.svg";
import iconAbout from "../../assets/icons/about.svg";
import iconRegister from "../../assets/icons/registration.svg";
import iconInfo from "../../assets/icons/note.svg";
export default function SectionInformation() {

    
  return (

 
    <Flex
      mt="7.5rem"
      direction="column"
      w="full"
      maxWidth="1100px"
      marginX="auto"
     
    >
      <Box w="full">
        <Text
          color="yolisa.title"
          fontSize="2rem"
          fontWeight="medium"
          lineHeight="1.2em"
          textAlign="center"
        >
          O que encontrar na YOLISA?
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
          Confira os recursos disponibilizados na nossa plataforma!
        </chakra.p>
      </Box>

      <Box m="2">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing="6">
          <CardInfo
            iconCard={iconSearch}
            titleCard="Pesquisa de materiais"
            descCard="Podes pesquisar o material que necessitas e obtem informações sobre estabelecimentos que o vendem."
          />
          <CardInfo
            iconCard={iconRegister}
            titleCard="Recursos para vendedor"
            descCard="Podes registar-se como vendedor e partilhar informções sobre os materiais disponiveis no teu estabelecimento."
          />
          <CardInfo
            iconCard={iconInfo}
            titleCard="Filtros dos resultados"
            descCard="Os resultados das pesquisas realizadas na nossa plataforma são filtrados com base em províncias de Angola."
          />
          <CardInfo
            iconCard={iconAbout}
            titleCard="Sobre um vendedor"
            descCard="Saiba mais sobre um vendedor, informações como contacto, outros produtos à venda, bem como o seu NIF."
          />
        </SimpleGrid>
      </Box>
    </Flex>

  );
}
