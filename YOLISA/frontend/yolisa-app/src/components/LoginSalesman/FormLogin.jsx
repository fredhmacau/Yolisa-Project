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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Image,

} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import LinkRestorePass from "./LinkRestorePass";
import { Link as BrowserLink, useNavigate } from "react-router-dom";
import FadeIn from "../Landing/animetions/FadeIn";
import logo from "../../YOLISA-logo.png";
import { useState } from "react";
import useHttp from "../../Hooks/useHttp";
export default function FormLogin() {
  const [error, setError] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const {singInSalesman} =useHttp()
  
  const navigate = useNavigate();

   const onLogin=async function (values) {
    const result= singInSalesman(values)
    await result.then(resp=>{
      if (resp.status===200) {
        localStorage.setItem("token", resp.data.access_token);
        navigate("/check/acount-salesman");
      
        
      }
    }).catch((error)=>setError(true));
     
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
          <Image src={logo} mb="0.5rem" marginX="auto"  h="4rem"/>
          <Text
            color="yolisa.title"
            fontSize="2rem"
            fontWeight="medium"
            lineHeight="1.2em"
            textAlign="center"
          >
            Inicie sessão para continuar
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
            Para aceder ao seu perfil, insira os seus dados de acesso.
          </chakra.p>
        </FadeIn>
      </VStack>
      {error && (
        <Flex w="full" mt="2" maxW="500px">
          <Alert
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
              <AlertIcon />
              <AlertTitle>Dados inválidos</AlertTitle>
              <AlertDescription>
                Verifique os dados inseridos e tente novamente.
              </AlertDescription>
            </Flex>
          </Alert>
        </Flex>
      )}
      <chakra.form
        onSubmit={handleSubmit(onLogin)}
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
          <FormControl isInvalid={errors.username}>
            <FormLabel
              htmlFor="username"
              fontWeight="550"
              color="yolisa.p"
              pl="1"
            >
              Nome de usuário:
            </FormLabel>
            <Input
              id="username"
              color="yolisa.p"
              type="text"
              {...register("username", {
                required: "Este campo não pode estar vázio",
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="1.4rem" isInvalid={errors.password}>
            <FormLabel
              htmlFor="password"
              fontWeight="550"
              color="yolisa.p"
              pl="1"
            >
              Palavra-passe:
            </FormLabel>
            <Input
              id="password"
              color="yolisa.p"
              type="password"
              {...register("password", {
                required: "Este campo não pode estar vázio",
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <LinkRestorePass
            link="/send-email"
            label="Esqueces-te a palavra-passe?"
          />
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
              Entrar
            </Button>
          </FormControl>
          <FormControl>
            <BrowserLink to="/create-account">
              <Button
                mt="0.4rem"
                _hover={{ bg: "yolisa.bg", color: "yolisa.50" }}
                bg="yolisa.bg"
                color="yolisa.50"
                type="button"
                w="full"
               
              >
                Criar conta de vendedor
              </Button>
            </BrowserLink>
          </FormControl>
        </FadeIn>
      </chakra.form>
    </Flex>
    </>
  );
}
