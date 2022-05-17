import {
  Text,
  Flex,
  VStack,
  chakra,
  Box,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ViewPost from "./ViewPost";
import { useState, useEffect, forwardRef } from "react";
import useHttp from "../../Hooks/useHttp";
import Pagination from "@choc-ui/paginator";
import { Spinner } from "@chakra-ui/react";
export default function ViewPosts() {
  const [salesmanPost, setSalesmanPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(1);
  const pageNumber = 3;
  const restantPage = (current - 1) * pageNumber;
  const posts = salesmanPost.slice(restantPage, restantPage + pageNumber);
  const Prev = forwardRef((props, ref) => (
    <IconButton
      ref={ref}
      {...props}
      icon={<RiArrowLeftSLine/>}
      size="lg"
      variant="ghost"
      color="yolisa.50"
    />
  ));
  const Next = forwardRef((props, ref) => (
    <IconButton
      ref={ref}
      {...props}
      icon={<RiArrowRightSLine/>}
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

  const { viewPostSalesman } = useHttp();
  const displayPosts = posts.map((post) => (
    <ViewPost
      key={post.id}
      idPost={post.id}
      imagePost={`http://127.0.0.1:8000/api/v1/salesman/acount/post/view_img/${post.id}`}
      productName={post.product_name}
      price={post.price}
      descProduct={post.desc_product}
    />
  ));

  useEffect(() => {
    const result = viewPostSalesman();
    result
      .then((resp) => {
        if (resp.status === 200) {
          setSalesmanPost([...resp.data]);
          setLoading(false);
          setError(false);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  },[]);

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
                    Visualize suas últimas publicações
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
                    Visualize os últimos produtos que foram publicados por sí
                  </chakra.p>
                </FadeIn>
              </VStack>
              <Flex p="6" w="full" direction="column" h="auto">
                {error ? (
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
                    Sem publicações para visualizar
                  </chakra.p>
                ) : (
                  <>
                    {displayPosts}
                    <Flex w="full" mt="2rem" justifyContent="center" align="center">
                      <Pagination
                        current={current}
                        total={salesmanPost.length}
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
              </Flex>
              <Box w="full"></Box>
            </Flex>
          </Flex>
        </FadeIn>
      )}
    </>
  );
}
