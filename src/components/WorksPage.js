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
import { ArrowLeftIcon } from "@chakra-ui/icons";

const Archi = [
  [
    "https://images2.imgbox.com/59/58/t6HnIsis_o.jpg",
    "https://images2.imgbox.com/85/fe/u7AkVLas_o.jpg",
    "https://images2.imgbox.com/14/bf/VuflmFQ1_o.jpg",
    "https://images2.imgbox.com/90/db/s2IzwSYv_o.jpg",
    "https://images2.imgbox.com/d1/1a/1hCRhjVG_o.jpg",
    "https://images2.imgbox.com/37/85/CbzacOpL_o.jpg",
    "https://images2.imgbox.com/20/e9/6pHopXFh_o.jpg",
    "https://images2.imgbox.com/96/0d/h1FJ1KVZ_o.jpg",
  ],
];

const Graphics = [
  [
    "https://images2.imgbox.com/b4/9f/VNwxM8v3_o.jpg",
    "https://images2.imgbox.com/d2/d8/dfWMthAl_o.jpg",
    "https://images2.imgbox.com/99/ea/JUGSNSR0_o.jpg",
    "https://images2.imgbox.com/01/c8/bMI7aduS_o.jpg",
    "https://images2.imgbox.com/c0/9e/r4INwXZA_o.jpg",
    "https://images2.imgbox.com/e4/e7/l4SxEcSV_o.jpg",
    "https://images2.imgbox.com/ad/40/PtA8KGTb_o.jpg",
    "https://images2.imgbox.com/8a/2f/S3HXFsMI_o.jpg",
  ],
];

const videoLinks = [
  "https://player.vimeo.com/video/703856477?h=f4b326ca7a&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/703948978?h=0b87330533&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/703950716?h=29eb05a0e5&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/703950446?h=1ad37ec745&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/703950237?h=96806d6af8&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/703950901?h=822129ba2b&title=0&byline=0&portrait=0",
  "https://player.vimeo.com/video/703948729?h=ca121e4c7b&title=0&byline=0&portrait=0",
];
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

      <Box bgColor="white" mb="-1px" mt="4rem">
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
                {Archi[0].map(function (archi, index) {
                  return (
                    <Box
                      key={index}
                      overflow="hidden"
                      borderRadius={"md"}
                      borderWidth="1px"
                      w={["45%", "45%", "20%"]}
                      cursor="pointer"
                    >
                      <Image
                        src={archi}
                        w="100%"
                        h="100%"
                        _hover={{ transform: "scale(1.1)" }}
                        transition="ease-in-out"
                        transitionDuration={".4s"}
                        loading="lazy"
                        objectFit={"cover"}
                      />
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
                justifyContent={"center"}
                alignItems="center"
                flexWrap={"wrap"}
                px="1rem"
                gap="1rem"
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
                {Graphics[0].map(function (archi, index) {
                  return (
                    <Box
                      key={index}
                      overflow="hidden"
                      borderRadius={"md"}
                      borderWidth="1px"
                      w={["45%", "45%", "20%"]}
                      cursor="pointer"
                    >
                      <Image
                        src={archi}
                        w="100%"
                        h="100%"
                        _hover={{ transform: "scale(1.1)" }}
                        transition="ease-in-out"
                        transitionDuration={".4s"}
                        loading="lazy"
                        objectFit={"cover"}
                      />
                    </Box>
                  );
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
