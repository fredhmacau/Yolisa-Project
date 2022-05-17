import {
  Avatar,
  Badge,
  Box,
  Button,
  chakra,
  Flex,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { Link as BrowserLink } from "react-router-dom";
import axios from "axios"
import {useState,useEffect} from "react"
import { VStack } from "@chakra-ui/react";


export default function Profile() {
  
  return (
    <>
      <FadeIn>
        <Flex w="full" p="2" mt="1rem">
          <Flex
            w="full"
            direction="column"
            h="auto"
            bg="#e8effb"
            rounded="md"
            shadow="md"
            p="18"
          >
            <VStack
              w="full"
              mt="1rem"
              marginX="auto"
              display="flex"
              justifyContent="center"
              mb="4"
            >
              <FadeIn>
                <Text
                  color="yolisa.title"
                  fontSize="1.375rem"
                  fontWeight="medium"
                  lineHeight="1em"
                  textAlign="center"
                >
                  Bem-vindo ao seu perfil
                </Text>
                <chakra.p
                  mt="2"
                  color="yolisa.p"
                  w="full"
                  maxW="400px"
                  marginX="auto"
                  textAlign="center"
                  lineHeight="1.2em"
                  letterSpacing="wide"
                  fontSize="0.875rem"
                >
                  Agora podes publicar informações sobre seus produtos à venda
                  no seu estabelecimento. Também podes atualizar o seu perfil e
                  acessar as suas publicações.
                </chakra.p>
              </FadeIn>
            </VStack>

            <Box w="full" maxWidth="400px" marginX="auto">
              <BrowserLink to="/acount-salesman/edit-profile">
                <Box
                  mt="0.4rem"
                  _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
                  bg="yolisa.button"
                  color="yolisa.50"
                  type="button"
                  w="full"
                  variant="ghost"
                  rounded="md"
                  p="2"
                  textAlign="center"
                  fontWeight={600}
                >
                  Editar informações do Perfil
                </Box>
              </BrowserLink>
              <BrowserLink to="/acount-salesman/edit-contact">
                <Box
                  mt="0.4rem"
                  _hover={{ bg: "#04124a", color: "yolisa.50" }}
                  bg="#04124a"
                  color="yolisa.50"
                  type="button"
                  w="full"
                  variant="ghost"
                  rounded="md"
                  p="2"
                  textAlign="center"
                  fontWeight={600}
                >
                  Editar meus contactos
                </Box>
              </BrowserLink>
            </Box>
          </Flex>
        </Flex>
      </FadeIn>
    </>
  );
}
