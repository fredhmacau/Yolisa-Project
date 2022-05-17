
import {
  Flex,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import { WrapItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import useHttp from "../../../Hooks/useHttp";
import { useForm } from "react-hook-form";

import FadeIn from "../../Landing/animetions/FadeIn";
import { useState, useRef, useEffect } from "react";
import { VisuallyHidden } from "@chakra-ui/react";
import { FormErrorMessage } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { AlertTitle } from "@chakra-ui/react";
import { AlertDescription } from "@chakra-ui/react";

export default function AlterImage({ status }) {
  const [error, setError] = useState(false);
  const [salesman, setSalesman] = useState("");
  const [open, setOpen] = useState(status);
  const [picture, setPicture] = useState("");
  const [imageData, setImageData] = useState(null);
  const btnSubmit = useRef(null);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { getSalesmanInfo, alterImagem } = useHttp();

  const CheckFile = (e) => {
    if (e.target.files[0]) {
      setImageData(e);
      btnSubmit.current.removeAttribute("disabled");
      setPicture(URL.createObjectURL(e.target.files[0]));
    }
  };
  const onAlterImage = async function (values) {
    if (imageData != null) {
      const response = alterImagem(imageData);
      await response
        .then((resp) => {
          if (resp.status === 200) {
            setOpen(false);
          }
        })
        .catch((error) => setError(true));
    }
  };
  useEffect(() => {
    const result = getSalesmanInfo();
    result.then((resp) => {
      if (resp.status === 200) {
        setSalesman(`${resp.data.business_name}`);
      }
    });
  }, []);

  return (
    <>
      <FadeIn>
        <Portal>
          <Flex
            w="100%"
            h="100vh"
            justifyContent="center"
            align="center"
            pos="absolute"
            zIndex={0}
            top={0}
            bottom={0}
            left={0}
            right={0}
            display={open ? "flex" : "none"}
            bg="#131924b5"
          >
            <Flex
              w="100%"
              h="100%"
              direction="column"
              justifyContent="center"
              align="center"
              bg="#131924b5"
            >
              <chakra.form
                onSubmit={handleSubmit(onAlterImage)}
                maxWidth={{ base: "1000px", md: "500px" }}
                mt="1.6rem"
                rounded="md"
                shadow="md"
                w={{ base: "100%", md: "60%" }}
                bg="#ffffff"
                p="8"
                marginX="auto"
                onChange={CheckFile}
              >
                <FadeIn>
                  <Flex w="full" marginX="auto" mb="4">
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
                            <AlertTitle>Ocorreu um erro</AlertTitle>
                            <AlertDescription>
                              Tamanho ou formato do ficheiro inválido.
                            </AlertDescription>
                          </Flex>
                        </Alert>
                      </Flex>
                    )}
                    <Wrap mt="4" marginX="auto">
                      <WrapItem>
                        <Avatar
                          ring="2"
                          ringColor="#f8fafc"
                          size="2xl"
                          src={
                            !picture
                              ? `http://127.0.0.1:8000/api/v1/salesman/acount/${localStorage.getItem(
                                  "token"
                                )}/img/get_img`
                              : picture
                          }
                          name={`${salesman}`}
                        />
                      </WrapItem>
                    </Wrap>
                  </Flex>
                  <FormControl isInvalid={errors.imageSalesman}>
                    <FormLabel
                      htmlFor="imageSalesman"
                      fontWeight="550"
                      color="#6783f9"
                      pl="1"
                      cursor="pointer"
                      textAlign="center"
                    >
                      Carregar Imagem
                      <VisuallyHidden>
                        <Input
                          id="imageSalesman"
                          color="yolisa.p"
                          type="file"
                          accept="image/*"
                          {...register("imageSalesman", {
                            required: "Ficheiro insuportável",
                          })}
                        />
                      </VisuallyHidden>
                    </FormLabel>
                    <FormErrorMessage>
                      {errors.imageSalesman && errors.imageSalesman.message}
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
                      disabled
                      ref={btnSubmit}
                    >
                      Adicionar imagem
                    </Button>
                  </FormControl>
                </FadeIn>
              </chakra.form>
            </Flex>
          </Flex>
        </Portal>
      </FadeIn>
    </>
  );
}
