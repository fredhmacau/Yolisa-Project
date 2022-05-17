import { Button } from "@chakra-ui/react";
import { Flex,VStack,chakra,Image,Box} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { useNavigate } from "react-router-dom";
import notFound from "./notfound-icon.png"

export default function TryErrors(){
    const go=useNavigate()
    return (
      <Flex
        w="full"
        h="100vh"
        color="yolisa.title"
        direction="column"
        align="center"
        bg="#f8fafc"
      >
        <Flex w="full" h="full" justifyContent="center" align="center">
          <VStack
            w="full"
            mt="2.5rem"
            marginX="auto"
            display="flex"
            
            justifyContent="center"
          >
            <FadeIn>
             <Box w="full" alignItems="center" pl="30px" justifyContent="center"  marginX="auto">
               <Image  src={notFound} w="400" h="200"/>
             </Box>
              <chakra.p
                mt="2"
                color="yolisa.p"
                w="full"
                maxW="600px"
                marginX="auto"
                textAlign="center"
                lineHeight="1.2em"
                letterSpacing="wide"
              >
                A página que tentas acessar não foi encontrada!
              </chakra.p>
              <Button
              mt="6"
                onClick={()=>go(-1)}
                w="full"
                maxWidth="400px"
                color="yolisa.50"
                _hover={{ bg: "yolisa.bg", color: "yolisa.50" }}
                bg="yolisa.button"
                
              >
                Voltar
              </Button>
            </FadeIn>
          </VStack>
        </Flex>
      </Flex>
    );
}