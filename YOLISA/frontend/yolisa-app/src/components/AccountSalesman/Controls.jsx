import {
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import CreatePost from "./CreatePost";
import Profile from "./Profile";
import ViewPosts from "./ViewPosts";

export default function Controls() {
  return (
    <>
      <Flex w="full" h="auto" pos="absolute" mt="-12">
        <Flex w="full" maxWidth="1100px" h="10rem" marginX="auto">
          <Container w="full" maxWidth="800px">
            <Tabs variant="unstyled">
              <Container
                display="flex"
                w="full"
                maxW="600px"
                justifyContent="center"
                marginX="auto"
              >
                <TabList>
                  <Tab
                    mx="2"
                    color="yolisa.50"
                    bg="#04124a"
                    _selected={{
                      color: "yolisa.50",
                      bg: "#142b89",
                    }}
                    fontWeight="600"
                    rounded="md"
                    fontSize="0.75rem"
                  >
                    Perfil
                  </Tab>
                  <Tab
                    mx="2"
                    bg="#04124a"
                    _selected={{
                      color: "yolisa.50",
                      bg: "#142b89",
                    }}
                    fontWeight="600"
                    color="yolisa.50"
                    rounded="md"
                    fontSize="0.75rem"
                  >
                    Publicações
                  </Tab>
                  <Tab
                    bg="#04124a"
                    _selected={{
                      color: "yolisa.50",
                      bg: "#142b89",
                    }}
                    fontWeight="600"
                    color="yolisa.50"
                    rounded="md"
                    fontSize="0.75rem"
                  >
                    Publicar
                  </Tab>
                </TabList>
              </Container>
              <Flex mt="4" w="full">
                <TabPanels>
                  <TabPanel>
                    <Profile/>
                  </TabPanel>
                  <TabPanel>
                    <ViewPosts />
                  </TabPanel>
                  <TabPanel>
                    <CreatePost />
                  </TabPanel>
                </TabPanels>
              </Flex>
            </Tabs>
          </Container>
        </Flex>
      </Flex>
    </>
  );
}
