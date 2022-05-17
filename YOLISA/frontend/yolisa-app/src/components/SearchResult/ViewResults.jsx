import { Box } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Flex, Container, VStack, Text } from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import Result from "./Result";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState,forwardRef } from "react";
import useHttp from "../../Hooks/useHttp";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

export default function ViewResult() {
  const [byResult, setByResult] = useState([]);
  const [notResult, setNotResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const { viewResults } = useHttp();
  const params = useParams();
  const pageNumber = 3;
  const restantPage = (current - 1) * pageNumber;
  const posts = byResult.slice(restantPage, restantPage + pageNumber);
  const Prev = forwardRef((props, ref) => (
    <IconButton
      ref={ref}
      {...props}
      icon={<RiArrowLeftSLine />}
      size="lg"
      variant="ghost"
      color="yolisa.50"
    />
  ));
  const Next = forwardRef((props, ref) => (
    <IconButton
      ref={ref}
      {...props}
      icon={<RiArrowRightSLine />}
      size="lg"
      variant="ghost"
      color="yolisa.50"
    />
  ));
  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
  };
  

  useEffect(() => {
    const result = viewResults(params.query);

    result
      .then((resp) => {
        if (resp.status === 200) {
          setByResult([...resp.data]);
          setLoading(false);
          setNotResult(false)
        }
      })
      .catch(() => {
        setNotResult(true)
      setLoading(false)});
  }, [params.query]);

  return (
    <>
      {loading ? (
        <Flex
          w="full"
          h="full"
          mt="6rem"
          align="center"
          justifyContent="center"
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Flex w="full" h="auto" pos="absolute" mt="-24">
          <Container w="full" maxW="800px">
            <Flex
              w="full"
              maxWidth="800px"
              rounded="md"
              bg="#e8effb"
              marginX="auto"
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
                  {notResult ? (
                    <Text
                      color="yolisa.title"
                      fontSize="1.375rem"
                      fontWeight="medium"
                      lineHeight="1em"
                      textAlign="center"
                      mb="2rem"
                    >
                      Sua pesquisa não produziu resultados
                    </Text>
                  ) : (
                    <>
                      <Text
                        color="yolisa.title"
                        fontSize="1.375rem"
                        fontWeight="medium"
                        lineHeight="1em"
                        textAlign="center"
                        mb="2rem"
                      >
                        Resultados ({byResult.length})
                      </Text>
                      {posts.map((post) => (
                        <Result
                          key={post.post_id}
                          imageProduct={`http://127.0.0.1:8000/api/v1/visitant/info/post/${post.post_id}/img`}
                          postId={post.post_id}
                          productName={post.product_name}
                          salesmanName={post.business_name}
                          provinceName={post.province_focus}
                          phoneNumber={post.phone_number}
                          price={post.price}
                          idSalesman={post.id}
                          descProduct={post.desc_product}
                        />

                      ))}
                      <Flex w="full" mt="2rem" justifyContent="center" align="center">
                      <Pagination
                        current={current}
                        total={byResult.length}
                        pageSize={pageNumber}
                        onChange={(page) => setCurrent(page)}
                        itemRender={itemRender}
                        paginationProps={{
                          display: "flex",
                          width: "full",
                          justifyContent: "center",
                          
                        }}
                        baseStyles={{ bg: "#04124a", color: "yolisa.50" }}
                        activeStyles={{ bg: "#142b89" }}
                        hoverStyles={{ bg: "yolisa.buttonSecondary" }}
                      />
                      </Flex>
                    </>
                  )}

                  <Box w="full"></Box>
                </FadeIn>
              </VStack>
            </Flex>
          </Container>
        </Flex>
      )}
    </>
  );
}
