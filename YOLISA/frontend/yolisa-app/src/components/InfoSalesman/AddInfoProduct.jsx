import {Flex,Container,Box,Text,VStack,chakra} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";

export default function AddInfoProduct(){
    return (
      <>
        <Flex w="full" h="full" mt="2rem">
          <Flex
            w="full"
            maxWidth="1100px"
            justifyContent="center"
            marginX="auto"
            direction="column"
          >
            <Container
              w="full"
              bg="#e8effb"
              rounded="md"
              h="auto"
              maxHeight="full"
              maxWidth="800px"
              marginX="auto"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Flex
                w="full"
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  w="full"
                  display="flex"
                  flexDirection="column"
                  maxW="800px"
                  marginX="auto"
                  p="6"
                >
                  <VStack
                    w="full"
                    mt="1rem"
                    marginX="auto"
                    display="flex"
                    justifyContent="center"
                    mb="4"
                  >
                    
                      <Text
                        color="yolisa.title"
                        fontSize="1.375rem"
                        fontWeight="medium"
                        lineHeight="1em"
                        textAlign="center"
                        mb="1rem"
                      >
                        Um pouco sobre o vendedor!
                      </Text>
                      {/*  */}
                      <FadeIn>
                        <Flex w="full" p="2" >
                          
                            <Flex w="full" direction="column" h="auto">
                              <Flex
                                w="full"
                                direction="row"
                                marginX="auto"
                                maxWidth="800px"
                                py="2"
                                px="8"
                                bg="#f8fafc"
                                rounded="md"
                                
                              >
                                
                            
                                <chakra.p
                                  color="yolisa.title"
                                  fontSize="0.875rem"
                                  fontWeight="medium"
                                  lineHeight="1.2em"
                                  px="3"
                                  noOfLines={4}
                                >
                                  Como uma plataforma com foco exclusivo a
                                  vendedores de materiais escolares em angola,
                                  conheça quantos vendedores estão reunidos aqui
                                  na nossa plataforma. Como uma plataforma com
                                  foco exclusivo a vendedores de materiais
                                  escolares em angola, conheça quantos
                                  vendedores estão reunidos aqui na nossa
                                  plataforma.
                                </chakra.p>

                                
                            
                            </Flex>
                            </Flex>
                          
                        </Flex>
                      </FadeIn>
                      {/*  */}
                   
                  </VStack>
                </Box>
              </Flex>
            </Container>
          </Flex>
        </Flex>
      </>
    );
}