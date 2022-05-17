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
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {useState} from "react";
import useHttp from "../../Hooks/useHttp";
import ModalResponse from "../ModalResponse/ModalResponse";
export default function SendEmail() {
    const [error,setError]=useState(false);
    const [nextPage,setNextPage]=useState(false);
    const {sendEmailForAlterPass}=useHttp();
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm();
    
    async function onSend(values) {
      const result = sendEmailForAlterPass(values);
      await result.then((resp)=>{
        if (resp.status === 200) {
          setError(false);
          setNextPage(true);
        }
      }
      ).catch(()=>setError(true))
      
    }
const onClose = function () {
  setError(false);
};
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
              Confirme o seu email
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
              Insira o email associado a sua conta para alteração da senha
            </chakra.p>
          </FadeIn>
        </VStack>
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
            <FormControl isInvalid={errors.username}>
              <FormLabel
                htmlFor="email"
                fontWeight="550"
                color="yolisa.p"
                pl="1"
              >
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
                {errors.username && errors.username.message}
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
                Enviar
              </Button>
            </FormControl>
          </FadeIn>
        </chakra.form>
      </Flex>
      {error && (
        <AlertDialog
          motionPreset="slideInBottom"
          onClose={onClose}
          isOpen={error && true}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Ocorreu um erro.</AlertDialogHeader>

            <AlertDialogBody>
              O email não foi encontrado, verifique se o email está correto.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={onClose}
                color="yolisa.50"
                bg="red.500"
                ml={3}
              >
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {nextPage && (
        <ModalResponse
          title="Email recebido com sucesso"
          content="Foi enviado um código de 6 dígitos para a alteração da sua senha, procede a seguir a recuperação da sua conta."
          link="/alter-pass"
          buttonText="Recuperar conta"
          colorButton="yolisa.buttonSecondary"
        />
      )}
    </>
  );
}
