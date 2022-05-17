import {
  chakra,
  Flex,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Textarea,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  
 

} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { useForm } from "react-hook-form";
import { useState} from "react";

import { VisuallyHidden } from "@chakra-ui/react";
import useHttp from "../../Hooks/useHttp";

export default function CreatePost() {

  const {
   handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const {registerPost}=useHttp()
  const [erros, setErros] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectImg,setSelectImg]=useState(null);
  const selectImageLocal=(e)=>{
    if (e.target.files[0]){
      setSelectImg(e)
    }
  }

  const onSend =async function (values) {
      console.log(values,selectImg)
      await registerPost(values,selectImg)
      .then((resp)=>{
        if (resp.status===201){
          setErros(false)
          setSuccess(true)
        }
      })
      .catch((errors)=>setErros(true))
    
  };
  const onClose=function(){
    setSuccess(false)
  }

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
                  Publique os seus produtos
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
                  fontSize="0.875rem"
                >
                  Deixe que os clientes encontrem o seu produto
                </chakra.p>
              </FadeIn>
            </VStack>
            {erros && (
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
                    <AlertIcon />
                    <AlertTitle>Ocorreu um erro!</AlertTitle>
                    <AlertDescription>
                      Ocorreu um erro ao publicar informações, por favor tente
                      novamente
                    </AlertDescription>
                  </Flex>
                </Alert>
              </Flex>
            )}
            <Flex w="full" direction="column" h="auto">
              <Flex
                w="full"
                direction="row"
                marginX="auto"
                maxWidth="600px"
                bg="#f8fafc"
                rounded="md"
              >
                <chakra.form
                  onSubmit={handleSubmit(onSend)}
                  maxWidth={{ base: "1000px", md: "900px" }}
                  rounded="md"
                  w={{ base: "100%" }}
                  h="auto"
                  bg="#f8fafc"
                  p="8"
                >
                  <FadeIn>
                    <FormControl isInvalid={errors.productName}>
                      <FormLabel
                        htmlFor="productName"
                        fontWeight="550"
                        color="yolisa.p"
                        pl="1"
                      >
                        Nome do material:
                      </FormLabel>
                      <Input
                        id="productName"
                        color="yolisa.p"
                        type="text"
                        {...register("productName", {
                          required: "Este campo não pode estar vázio",
                        })}
                      />
                      <FormErrorMessage>
                        {errors.productName && errors.productName.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl mt="1rem" isInvalid={errors.price}>
                      <FormLabel
                        htmlFor="price"
                        fontWeight="550"
                        color="yolisa.p"
                        pl="1"
                      >
                        Preço do material:
                      </FormLabel>
                      <Input
                        id="price"
                        {...register("price", {
                          required: "Este campo não pode estar vázio",
                        })}
                        color="yolisa.p"
                        type="text"
                        required
                      />
                      <FormErrorMessage>
                        {errors.price && errors.price.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      color="yolisa.p"
                      mt="1rem"
                      isInvalid={errors.descProduts}
                    >
                      <FormLabel pl="1" htmlFor="descProduts">
                        Descrição do material:
                      </FormLabel>
                      <Textarea
                        id="descProduts"
                        maxHeight="100"
                        maxWidth="full"
                        {...register("descProduts", { required: true })}
                        isRequired
                      ></Textarea>
                      <FormErrorMessage>
                        {errors.descProduts && errors.descProduts.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <Flex
                        w="full"
                        h="5rem"
                        justifyContent="center"
                        align="center"
                        bg="#e7eaef"
                        border="2px dashed #808181"
                        rounded="md"
                        mt="1rem"
                        cursor="pointer"
                      >
                        <Flex
                          w="full"
                          h="full"
                          align="center"
                          justifyContent="center"
                        >
                          <Flex fontSize="sm" alignItems="baseline">
                            <chakra.label
                              htmlFor="fileImg"
                              cursor="pointer"
                              rounded="md"
                              fontSize="md"
                              pos="relative"
                              textAlign="center"
                            >
                              {selectImg !== null ? (
                                <span>{selectImg.target.files[0].name}</span>
                              ) : (
                                <span>
                                  Clique aqui para carregar uma imagem do
                                  produto
                                </span>
                              )}

                              <VisuallyHidden>
                                <input
                                  id="fileImg"
                                  name="fileImg"
                                  onChange={selectImageLocal}
                                  type="file"
                                  accept="image/*"
                                  multiple={false}
                                />
                              </VisuallyHidden>
                            </chakra.label>
                          </Flex>
                        </Flex>
                      </Flex>
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
                          Publicar informações
                      </Button>
                    </FormControl>
                  </FadeIn>
                </chakra.form>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </FadeIn>
      {success && (
        <AlertDialog
          motionPreset="slideInBottom"
          
          onClose={onClose}
          isOpen={success && true}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Publicadas com sucesso.</AlertDialogHeader>
            
            <AlertDialogBody>
              As informações sobre o seu produto foram publicadas com sucesso!
            </AlertDialogBody>
            <AlertDialogFooter>
              
              <Button onClick={onClose} color="yolisa.50" bg="yolisa.buttonSecondary" ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
