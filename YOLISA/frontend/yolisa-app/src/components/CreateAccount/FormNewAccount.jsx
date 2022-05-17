import { chakra, Flex, Text} from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FadeIn from "../Landing/animetions/FadeIn";
import logo from "../../YOLISA-logo.png";
import { useState,useEffect} from "react";
import ModalResponse from "../ModalResponse/ModalResponse";
import schemaNewSalesman from "./schemaValidation";
import { SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { AvatarGroup } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import useHttp from "../../Hooks/useHttp";

export default function FormNewAccount() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [dataSalesman,setDataSalesman]=useState([]);
  const { registerSalesman,viewTotalSalesman } = useHttp();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schemaNewSalesman) });

  const onRegister =async function (values) {
    const response= registerSalesman(values);
    await response.then((resp)=>{
      if(resp.status===201){
      
        setSuccess(true);
        setError(false);
    } 
      
    }).catch((err)=>{
      
      setError(true);
      setSuccess(false);
    
    })
  };
  useEffect(()=>{
    const result=viewTotalSalesman();
    result.then((resp)=>{
      if (resp.status===200) {
        setDataSalesman([...resp.data]);
        
      }
    });
  },[])
  
  return (
    <>
      <SimpleGrid w="full" h="auto" bg="#f8fafc" columns={{ base: 1, lg: 2 }}>
        <Flex h={{ base: "auto", lg: "100vh" }} bg="#f8fafc">
          <Flex
            w={{ base: "full", lg: "50%" }}
            h={{ base: "auto", lg: "100vh" }}
            bg="yolisa.bg"
            align="center"
            justifyContent="center"
            direction="column"
            position={{ base: "unset", lg: "fixed" }}
          >
            <FadeIn>
              <Image src={logo} marginX="auto" h="6rem" />
              <Text
                color="yolisa.50"
                fontSize="2rem"
                fontWeight="semibold"
                lineHeight="1.2em"
                textAlign="center"
                mt="-4"
              >
                Criar uma conta vendedor
              </Text>
              <chakra.p
                mt="2"
                color="yolisa.50"
                w="full"
                maxW="600px"
                marginX="auto"
                textAlign="center"
                lineHeight="1.2em"
                letterSpacing="wide"
              >
                Crie uma conta vendedor na nossa plataforma e podes publicar
                informações sobre os seus materiais escolares à venda.
              </chakra.p>

              <Flex
                w="full"
                alignItems="center"
                mt="1.5rem"
                justifyContent="center"
                marginX="auto"
                mb="1.5rem"
              >
                <AvatarGroup size="md" max={dataSalesman.slice(0,3).length}>
                  {dataSalesman.map((salesman, index) => (
                    <Avatar
                      key={salesman.id}
                      name={salesman.business_name}
                      src={`http://127.0.0.1:8000/api/v1/visitant/info/salesman/${salesman.id}/img/get_img`}
                    />
                  ))}
                </AvatarGroup>
              </Flex>
            </FadeIn>
          </Flex>
        </Flex>
        <Flex h={{ base: "auto" }} w="full" bg="#f8fafc">
          <Flex
            bg="#f8fafc"
            align="center"
            justifyContent="center"
            direction="column"
            w={{ base: "100%" }}
            p="2"
          >
            <chakra.form
              shadow="md"
              rounded="md"
              w="full"
              bg="#ffffff"
              p="10"
              h="auto"
              onSubmit={handleSubmit(onRegister)}
            >
              <FadeIn>
                {error && (
                  <Flex w="full" mt="2" mb="3">
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
                        <AlertTitle>Ocorreu um erro!</AlertTitle>
                        <AlertDescription>
                          Nome de usuário ou email já existente
                        </AlertDescription>
                      </Flex>
                    </Alert>
                  </Flex>
                )}
                <FormControl color="yolisa.p" isInvalid={errors.username}>
                  <FormLabel htmlFor="username" pl="1">
                    Nome de usuário:
                  </FormLabel>
                  <Input type="text" id="username" {...register("username")} />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  mt="1rem"
                  color="yolisa.p"
                  isInvalid={errors.businessName}
                >
                  <FormLabel htmlFor="businessName" pl="1">
                    Nome do estabelecimento:
                  </FormLabel>
                  <Input
                    type="text"
                    id="businessName"
                    {...register("businessName")}
                  />
                  <FormErrorMessage>
                    {errors.businessName && errors.businessName.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  color="yolisa.p"
                  mt="1rem"
                  isInvalid={errors.email}
                >
                  <FormLabel htmlFor="email" pl="1">
                    Email:
                  </FormLabel>
                  <Input type="email" id="email" {...register("email")} />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl mt="1rem" color="yolisa.p" isInvalid={errors.nif}>
                  <FormLabel htmlFor="nif" pl="1">
                    NIF:
                  </FormLabel>
                  <Input
                    type="number"
                    id="nif"
                    {...register("nif", { maxLength: 9 })}
                  />
                  <FormErrorMessage>
                    {errors.nif && errors.nif.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack mt="1rem" direction={{ base: "column", md: "row" }}>
                  <FormControl color="yolisa.p" isInvalid={errors.password}>
                    <FormLabel htmlFor="password" pl="1">
                      Senha:
                    </FormLabel>
                    <Input
                      type="password"
                      id="password"
                      {...register("password")}
                    />
                    <FormErrorMessage>
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    mt="1rem"
                    color="yolisa.p"
                    isInvalid={errors.confPass}
                  >
                    <FormLabel htmlFor="confPass" pl="1">
                      Confirmar senha:
                    </FormLabel>
                    <Input
                      type="password"
                      id="confPass"
                      {...register("confPass")}
                    />
                    <FormErrorMessage>
                      {errors.confPass && errors.confPass.message}
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
                <FormControl color="yolisa.p" mt="1rem" isInvalid={errors.desc}>
                  <FormLabel pl="1" htmlFor="descBusiness">
                    Descrição do estabelecimento:
                  </FormLabel>
                  <Textarea
                    id="descBusiness"
                    maxHeight="100"
                    maxWidth="full"
                    {...register("descBusiness")}
                    isRequired
                  ></Textarea>
                  <FormErrorMessage>
                    {errors.descBusiness && errors.descBusiness.message}
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
        </Flex>
      </SimpleGrid>
      {success && (
        <ModalResponse
          title="Cadastrado com sucesso"
          content="O seu cadastro na nossa plataforma ocorreu com sucesso. Inicie uma sessão na sua conta e aproveite os recursos para vendedores"
          link="/login"
          buttonText="Iniciar sessão"
          colorButton="yolisa.buttonSecondary"
        />
      )}
    </>
  );
}
