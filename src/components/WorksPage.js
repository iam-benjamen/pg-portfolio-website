import {
  Box,
  Image,
  Button,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import image from "../assets/ecaef.jpg";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const PortfolioProjects = () => {
  return (
    <Box bgColor={"white"} h="max-content" display={"flex"} flexDir="column" gap="1rem">
      <Box height={"30vh"} bgColor="#3d648f" zIndex={12}>
      <Button
          as={Link}
          to="/"
          ml="1rem"
          position={"absolute"}
          mt="1rem"  
          bgColor={"white"}
          color="#3d648f"
          _hover={{
            transform: "scale(1.05)",
          }}
        >
          Back Home
        </Button>
        <Image
          src={image}
          mx="auto"
          w={"12rem"}
          borderRadius="full"
          border={"8px solid white"}
          zIndex={999}
          mt="15vh"
        />
      </Box>

      <Box bgColor="white" pt="2rem" mb="-1px" mt="4rem">
        <Heading textAlign={"center"} fontFamily="Montserrat">
          Adediran Ilerioluwa.
        </Heading>
      </Box>
      <Box bgColor={"white"} pt="1rem">
        <Tabs align="center" variant="enclosed-colored">
          <TabList mb="1em" w={["70%", "80%", "100%"]}>
            <Tab _selected={{ color: "white", bg: "#3d648f" }}>
              <Heading fontSize={[".6rem","1rem","1rem"]} fontFamily="Montserrat">
                Architectural 
              </Heading>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3d648f" }}>
              <Heading fontSize={[".6rem","1rem","1rem"]} fontFamily="Montserrat">
                Graphics
              </Heading>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3d648f" }}>
              <Heading fontSize={[".7rem","1rem","1rem"]} fontFamily="Montserrat">
                Motion 
              </Heading>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box
                display={"flex"}
                flexDir={["column", "column", "row"]}
                gap="1rem"
                justifyContent={"center"}
                alignItems="center"
                flexWrap={"wrap"}
              >
                <Box
                  overflow="hidden"
                  borderRadius={"md"}
                  borderWidth="1px"
                  w={["85%", "85%", "20%"]}
                  cursor="pointer"
                >
                  <Image
                    src={"https://bit.ly/2Z4KKcF"}
                    w="100%"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="ease-in-out"
                    transitionDuration={".4s"}
                  />
                </Box>
                <Box
                  overflow="hidden"
                  borderRadius={"md"}
                  borderWidth="1px"
                  w={["85%", "85%", "20%"]}
                  cursor="pointer"
                >
                  <Image
                    src={"https://bit.ly/2Z4KKcF"}
                    w="100%"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="ease-in-out"
                    transitionDuration={".4s"}
                  />
                </Box>
                <Box
                  overflow="hidden"
                  borderRadius={"md"}
                  borderWidth="1px"
                  w={["85%", "85%", "20%"]}
                  cursor="pointer"
                >
                  <Image
                    src={"https://bit.ly/2Z4KKcF"}
                    w="100%"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="ease-in-out"
                    transitionDuration={".5s"}
                  />
                </Box>
                <Box
                  overflow="hidden"
                  borderRadius={"md"}
                  borderWidth="1px"
                  w={["85%", "85%", "20%"]}
                  cursor="pointer"
                >
                  <Image
                    src={"https://bit.ly/2Z4KKcF"}
                    w="100%"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="ease-in-out"
                    transitionDuration={".5s"}
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default PortfolioProjects;
