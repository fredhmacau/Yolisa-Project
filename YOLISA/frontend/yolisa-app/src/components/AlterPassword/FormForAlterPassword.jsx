import {
  Flex,
  VStack,
  chakra,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Image
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";
import logo from "../../YOLISA-logo.png";
import { useState } from "react";
import useHttp from "../../Hooks/useHttp";
import { Alert } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { AlertTitle } from "@chakra-ui/react";
import { AlertDescription } from "@chakra-ui/react";
import ModalResponse from "../ModalResponse/ModalResponse"
export default function FormForAlterPassword() {
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const {registerAlterPassword}=useHttp()
  async function onSend(values) {
      const result=registerAlterPassword(values)
      await result.then((resp)=>{
        if (resp.status===200){
          setSuccess(true)
          setError(false)
        }
      }).catch(()=>{
        setError(true)
        setSuccess(false)
      })
  }

  return (
    <>
    <Flex w="full" h="100vh" direction="column" align="center" bg="#f8fafc">
      <VStack
        w="full"
        mt="6.5rem"
        marginX="auto"
        display="flex"
        justifyContent="center"
      >
        <FadeIn>
          <Image src={logo} mb="0.5rem" marginX="auto" h="4rem" />
          <Text
            color="yolisa.title"
            fontSize="2rem"
            fontWeight="medium"
            lineHeight="1.2em"
            textAlign="center"
          >
            Alterar a senha
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
            Confirme inicialmente o código enviado para o seu email
          </chakra.p>
        </FadeIn>
      </VStack>
      {error && (
        <Flex w="full" marginX="auto" mb="4" mt="2" maxW="600px">
          <Alert
            w="full"
            display="flex"
            rounded="md"
            status="error"
            variant="solid"
            justifyContent="center"
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <AlertIcon/>
              <AlertTitle>Ocorreu um erro!</AlertTitle>
              <AlertDescription>
                Código de confirmação ou email inválido!
              </AlertDescription>
            </Flex>
          </Alert>
        </Flex>
      )}
      <chakra.form
        onSubmit={handleSubmit(onSend)}
        maxWidth={{ base: "1000px", md: "500px" }}
        mt="1.6rem"
        rounded="md"
        shadow="md"
        w={{ base: "100%", md: "60%" }}
        h="auto"
        bg="#ffffff"
        p="8"
      >
        <FadeIn>
          <FormControl isInvalid={errors.codigo}>
            <FormLabel
              htmlFor="codigo"
              fontWeight="550"
              color="yolisa.p"
              pl="1"
            >
              Código:
            </FormLabel>
            <Input
              id="codigo"
              color="yolisa.p"
              type="number"
              {...register("codigo", {
                required: "Código inválido",
                maxLength: 6,
              })}
            />
            <FormErrorMessage>
              {errors.codigo && errors.codigo.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="1rem" isInvalid={errors.email}>
            <FormLabel htmlFor="email" fontWeight="550" color="yolisa.p" pl="1">
              Email:
            </FormLabel>
            <Input
              id="email"
              color="yolisa.p"
              type="email"
              {...register("email", {
                required: "Email inválido",
                
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="1rem" isInvalid={errors.newpassword}>
            <FormLabel htmlFor="email" fontWeight="550" color="yolisa.p" pl="1">
              Nova palavra-passe:
            </FormLabel>
            <Input
              id="newpassword"
              color="yolisa.p"
              type="password"
              {...register("newpassword", {
                required: "Caracteres insuficientes",
                
              })}
            />
            <FormErrorMessage>
              {errors.newpassword && errors.newpassword.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <Button
              mt="1.4rem"
              _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
              bg="yolisa.button"
              color="yolisa.50"
              type="submit"
              w="full"
              isLoading={isSubmitting}
            >
              Alterar senha
            </Button>
          </FormControl>
        </FadeIn>
      </chakra.form>
    </Flex>
    {success && (
      
        <ModalResponse
          title="Senha alterada com sucesso!"
          content="A sua senha foi alterada com sucesso, inicie sessão com a nova senha"
          link="/login"
          buttonText="Iniciar sessão"
          colorButton="yolisa.buttonSecondary"
        />
      )}
    </>
  );
}
