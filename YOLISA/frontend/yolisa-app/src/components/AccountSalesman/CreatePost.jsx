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
} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone";


export default function CreatePost() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSend = (values) => {
    console.log(values);
  };

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
                        color="yolisa.p"
                        type="text"
                        {...register("price", {
                          required: "Este campo não pode estar vázio",
                         
                        })}
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
                      <Dropzone
                        onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                        accept="image/*"
                        multiple={false}
                        maxSize={1000000}
                        minSize={0}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <Flex
                            w="full"
                            h="5rem"
                            justifyContent="center"
                            align="center"
                            bg="#e7eaef"
                            border="2px dashed #808181"
                            rounded="md"
                            mt="1rem"
                          >
                            <Flex
                              w="full"
                              h="full"
                              align="center"
                              justifyContent="center"
                              {...getRootProps()}
                            >
                              <Input
                                {...getInputProps()}
                                {...register("imgProdut", { required: true })}
                                accept="imagens/*"
                              />
                              <p>
                                Clique ou arraste uma imagem aqui do material
                              </p>
                            </Flex>
                          </Flex>
                        )}
                      </Dropzone>
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
                        Publicar produto
                      </Button>
                    </FormControl>
                  </FadeIn>
                </chakra.form>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </FadeIn>
    </>
  );
}
