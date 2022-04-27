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
        display={"flex"}
        flexDir={["column", "column", "row"]}
        gap="1rem"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          overflow="hidden"
          borderRadius={"md"}
          borderWidth="2px"
          w={["85%", "85%", "30%"]}
          cursor="pointer"
          height={"80%"}
          as={Link}
          to = "/works"
        >
          <Image
            src={archishowcase}
            w="100%"
            _hover={{ transform: "scale(1.1)" }}
            transition="ease-in-out"
            transitionDuration={".4s"}
            loading="lazy"
          />
        </Box>
        <Box
          overflow="hidden"
          borderRadius={"md"}
          borderWidth="1px"
          w={["85%", "85%", "30%"]}
          cursor="pointer"
          
        >
          <Image src={"https://bit.ly/2Z4KKcF"} w="100%" loading="lazy"/>
        </Box>
        <Box
          overflow="hidden"
          borderRadius={"md"}
          borderWidth="2px"
          w={["85%", "85%", "30%"]}
          cursor="pointer"
        >
          <Image src={stillshowcase} w="100%" loading="lazy"/>
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
