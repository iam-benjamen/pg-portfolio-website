import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

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
          View some recent works.
        </Heading>
      </Box>
      <Box
        display={"flex"}
        flexDir={["column", "column", "row"]}
        gap="1rem"
        justifyContent={"center"}
        alignItems="center"
        
      >
        <Box overflow="hidden" borderRadius={"md"} borderWidth="1px" w="25%">
          <Image src={"https://bit.ly/2Z4KKcF"} w="100%" />
          <Box w="100%" bg={"white"} px="1rem">
            <Text color="black" fontFamily={"Montserrat"}>
              Just a sample of what I can get done soon.
            </Text>
          </Box>
        </Box>
        <Box overflow="hidden" borderRadius={"md"} borderWidth="1px" w="25%">
          <Image src={"https://bit.ly/2Z4KKcF"} w="100%" />
          <Box w="100%" bg={"white"} px="1rem">
            <Text fontFamily={"Montserrat"} color="black">
              Just a sample of what I can get done soon.
            </Text>
          </Box>
        </Box>
        <Box overflow="hidden" borderRadius={"md"} borderWidth="1px" w="25%">
          <Image src={"https://bit.ly/2Z4KKcF"} w="100%" />
          <Box w="100%" bg={"white"} px="1rem">
            <Text fontFamily={"Montserrat"} color="black">
              Just a sample of what I can get done soon.
            </Text>
          </Box>
        </Box>
      </Box>
      <Button as={Link} to="/works">View More</Button>
    </Box>
  );
};

export default WorksSection;
