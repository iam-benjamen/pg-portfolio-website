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
import { motion } from "framer-motion";

import { Archi, Graphics, videoLinks } from "../utils/links";

const PortfolioProjects = () => {
  

  return (
    <Box
      bgColor={"white"}
      h="max-content"
      display={"flex"}
      flexDir="column"
      gap="1rem"
    >
      <Box height={["21vh", "30vh", "30vh"]} bgColor="#3d648f" zIndex={12}>
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
          w={["9rem", "10rem", "12rem"]}
          borderRadius="full"
          border={"8px solid white"}
          zIndex={999}
          mt={["10vh", "15vh", "15vh"]}
        />
      </Box>

      <Box bgColor="white" mb="-1px" mt="4rem" pt="1rem">
        <Heading textAlign={"center"} fontFamily="Montserrat">
          Adediran Ilerioluwa.
        </Heading>
      </Box>
      <Box bgColor={"white"} pt="1rem">
        <Tabs align="center" variant="enclosed-colored">
          <TabList mb="1em" w={["70%", "80%", "100%"]}>
            <Tab _selected={{ color: "white", bg: "#3d648f" }}>
              <Heading
                fontSize={[".8rem", "1rem", "1rem"]}
                fontFamily="Montserrat"
              >
                Architecture
              </Heading>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3d648f" }}>
              <Heading
                fontSize={[".8rem", "1rem", "1rem"]}
                fontFamily="Montserrat"
              >
                Motion
              </Heading>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3d648f" }}>
              <Heading
                fontSize={[".8rem", "1rem", "1rem"]}
                fontFamily="Montserrat"
              >
                Graphics
              </Heading>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box
                as={motion.div}
                whileInView={{ y: [30, 0] }}
                transition={{ type: "tween", duration: 0.3 }}
                display={"flex"}
                flexDir={"row"}
                gap="1rem"
                justifyContent={"center"}
                alignItems="center"
                flexWrap={"wrap"}
              >
                {Object.keys(Archi).map((keyOuter) => {
                  return Object.keys(Archi[keyOuter]).map((keyInner) => {
                    return (
                      <>
                        {" "}
                        <Box
                          key={`${keyInner}-${keyOuter}`}
                          overflow="hidden"
                          borderRadius={"md"}
                          borderWidth="1px"
                          w={["45%", "45%", "20%"]}
                          cursor="pointer"
                        >
                          <Image
                            src={Archi[keyOuter][keyInner]}
                            w="100%"
                            h={["8rem","9rem","12rem"]}
                            _hover={{ transform: "scale(1.1)" }}
                            transition="ease-in-out"
                            transitionDuration={".4s"}
                            loading="lazy"
                            objectFit={"cover"}
                            // onClick={onOpen}
                          />
                        </Box>
                        {/* <Modal isOpen={isOpen} onClose={onClose}> */}
                          {/* <ModalOverlay /> */}
                          {/* <ModalContent>
                            <ModalCloseButton /> */}
                            {/* <ModalBody>
                              <Image src={Archi[keyOuter][keyInner]} />
                            </ModalBody>
                          </ModalContent>
                        // </Modal> */}
                      </>
                    );
                  });
                })}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                as={motion.div}
                whileInView={{ y: [30, 0] }}
                transition={{ type: "tween", duration: 0.3 }}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems="center"
                flexWrap={"wrap"}
                px="1rem"
                gap={["0rem","0rem","1rem"]}
              >
                {videoLinks.map(function (imageLink, index) {
                  return (
                    <Box
                      key={index}
                      overflow="hidden"
                      borderRadius={"md"}
                      w={["100%", "100%", "30%"]}
                      cursor="pointer"
                      height="15rem"
                    >
                      <iframe
                        src={imageLink}
                        width="100%"
                        height="240"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </Box>
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                as={motion.div}
                whileInView={{ y: [30, 0] }}
                transition={{ type: "tween", duration: 0.3 }}
                display={"flex"}
                flexDir={"row"}
                gap="1rem"
                justifyContent={"center"}
                alignItems="center"
                flexWrap={"wrap"}
              >
                {Object.keys(Graphics).map((Outer) => {
                  return Object.keys(Archi[Outer]).map((Inner) => {
                    return (
                      <Box
                        key={`${Inner}-${Outer}`}
                        overflow="hidden"
                        borderRadius={"md"}
                        borderWidth="1px"
                        w={["45%", "45%", "20%"]}
                        cursor="pointer"
                      >
                        <Image
                          src={Graphics[Outer][Inner]}
                          w="100%"
                          h={["8rem","10rem","12rem"]}
                          _hover={{ transform: "scale(1.1)" }}
                          transition="ease-in-out"
                          transitionDuration={".4s"}
                          loading="lazy"
                          objectFit={"cover"}
                        />
                      </Box>
                    );
                  });
                })}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default PortfolioProjects;
