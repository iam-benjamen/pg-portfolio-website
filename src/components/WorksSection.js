import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import archishowcase from "../assets/works/Archi-showcase.jpg";
import stillshowcase from "../assets/works/WIRELESS LOCKSMITH - Business Card.jpg";

const WorksSection = () => {
  return (
    <Box
      bgColor={"#141414"}
      h="max-content"
      display={"flex"}
      flexDir="column"
      alignItems={"center"}
      mt="-1px"
      p="2rem"
      gap="2rem"
      id="work-section"
    >
      <Box>
        <Text
          fontFamily={"Poppins"}
          textAlign={"center"}
          color={"#3d648f"}
          textDecor="underline"
          as={motion.p}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0.1, 0.5, 0.7, 1] }}
          transition={{ delay: 0.2, duration: 5 }}
        >
          Previous Works
        </Text>
        <Heading
          fontFamily={"Poppins"}
          textAlign={"center"}
          color={"white"}
          pb="1rem"
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0.1, 0.5, 0.7, 1] }}
          transition={{ delay: 0.2, duration: 5 }}
        >
          View some recent Projects.
        </Heading>
      </Box>
      <Box
        as={motion.div}
        whileInView={{ y: [30, 0] }}
        transition={{ duration: 0.5 }}
        display={"flex"}
        flexDir={["column", "column", "row"]}
        gap="1rem"
        justifyContent={"center"}
        alignItems="center"
        w={["100%","auto","auto"]}
      >
        <Box
          overflow="hidden"
          borderRadius={"md"}
          w={["100%", "100%", "30%"]}
          cursor="pointer"
          height={"15rem"}
          as={Link}
          to="/works"
        >
          <Image
            src={archishowcase}
            w="100%"
            h="100%"
            _hover={{ transform: "scale(1.1)" }}
            transition="ease-in-out"
            transitionDuration={".4s"}
            loading="lazy"
            objectFit={"cover"}
          />
        </Box>
        <Box
          overflow="hidden"
          borderRadius={"md"}
          w={["100%", "100%", "30%"]}
          cursor="pointer"
          height="15rem"
        >
          <iframe
            src="https://player.vimeo.com/video/703856477?h=f4b326ca7a&autoplay=0&color=3d648f&title=0&byline=0&portrait=0"
            width="421"
            height="240"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
        <Box
          overflow="hidden"
          borderRadius={"md"}
          w={["100%", "100%", "30%"]}
          cursor="pointer"
          height={"15rem"}
        >
          <Image
            src={stillshowcase}
            w="100%"
            h="100%"
            loading="lazy"
            objectFit={"cover"}
            _hover={{ transform: "scale(1.1)" }}
            transition="ease-in-out"
            transitionDuration={".4s"}
          />
        </Box>
      </Box>
      <Button
        as={Link}
        to="/works"
        _hover={{
          bgColor: "#3d648f",
          color: "white",
          transitionDuration: ".8s",
        }}
      >
        View More
      </Button>
    </Box>
  );
};

export default WorksSection;
