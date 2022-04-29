import { chakra, Flex, Text, VStack } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import ModalResponse from "../ModalResponse/ModalResponse";


export default function FormNewAccount() {
 
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const onRegister = function (values) {
    
    console.log(values)
    
  };
  
  
 
    

  return (
    <>
    <Flex
      w="full"
      h="100vh"
      color="yolisa.title"
      direction="column"
      align="center"
      bg="#f8fafc"
    >
      <VStack
        w="full"
        mt="2.5rem"
        marginX="auto"
        display="flex"
        justifyContent="center"
      >
        <FadeIn>
          <Text
            color="yolisa.title"
            fontSize="2rem"
            fontWeight="medium"
            lineHeight="1.2em"
            textAlign="center"
          >
            Criar uma conta na YOLISA
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
          >
            Junta-se a nossa comunidade e alcanse mais clientes divulgando na
            nossa plataforma
          </chakra.p>
        </FadeIn>
      </VStack>
      <chakra.form
        mt="1rem"
        shadow="md"
        rounded="md"
        maxWidth={{ base: "1000px", md: "600px" }}
        w={{ base: "100%", md: "80%" }}
        bg="#ffffff"
        p="8"
        h="auto"
        onSubmit={handleSubmit(onRegister)}
      >
        <FadeIn>
          <Stack direction={{ base: "column", md: "row" }}>
            <FormControl color="yolisa.p" isInvalid={errors.username}>
              <FormLabel htmlFor="username" pl="1">
                Nome de usuario:
              </FormLabel>
              <Input
                type="text"
                id="username"
                {...register("username", {
                  required:
                    "Valores inválidos (Usa combinações de números e letras)",
                  minLength: 4,
                  maxLength: 20,
                  pattern: "/^[a-z0-9]{MIN_CHARS,MAX_CHARS}$/i",
                })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl color="yolisa.p" isInvalid={errors.bussinesName}>
              <FormLabel htmlFor="bussinesName" pl="1">
                Nome da empresa:
              </FormLabel>
              <Input
                type="text"
                id="bussinesName"
                {...register("bussinesName", {
                  required: "Valores inválidos",
                  minLength: 4,
                  maxLength: 80,
                })}
              />
              <FormErrorMessage>
                {errors.bussinesName && errors.bussinesName.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <FormControl color="yolisa.p" mt="1rem" isInvalid={errors.email}>
            <FormLabel htmlFor="email" pl="1">
              Email:
            </FormLabel>
            <Input
              type="email"
              id="email"
              {...register("email", {
                required: "Email inválido",
                minLength: 4,
                maxLength: 80,
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Stack mt="1rem" direction={{ base: "column", md: "row" }}>
            <FormControl color="yolisa.p" isInvalid={errors.nif}>
              <FormLabel htmlFor="nif" pl="1">
                NIF:
              </FormLabel>
              <Input
                type="number"
                id="nif"
                {...register("nif", {
                  required: "Valores inválidos",
                  maxLength: 15,
                })}
              />
              <FormErrorMessage>
                {errors.nif && errors.nif.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl color="yolisa.p" isInvalid={errors.password}>
              <FormLabel htmlFor="password" pl="1">
                Palavra-passe:
              </FormLabel>
              <Input
                type="password"
                id="password"
                {...register("password", {
                  required: "Caracteres insuficientes",
                  minLength: 8,
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <FormControl color="yolisa.p" mt="1rem" isInvalid={errors.desc}>
            <FormLabel pl="1" htmlFor="desc">
              Descrição da empresa:
            </FormLabel>
            <Textarea
              id="desc"
              maxHeight="100"
              maxWidth="full"
              {...register("desc", { required: true })}
              isRequired
            ></Textarea>
            <FormErrorMessage>
              {errors.desc && errors.desc.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="1rem">
            <Button
              type="submit"
              isLoading={isSubmitting}
              w="full"
              color="yolisa.50"
              _hover={{ bg: "yolisa.bg", color: "yolisa.50" }}
              bg="yolisa.button"
            >
              Cadastrar-se
            </Button>
          </FormControl>
        </FadeIn>
      </chakra.form>
    </Flex>
    
    </>
  );
}
