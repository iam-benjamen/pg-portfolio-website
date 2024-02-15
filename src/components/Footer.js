import { Box, Text, HStack, Image, Link } from "@chakra-ui/react";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import mail from "../assets/mail.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      w={"100%"}
      h="5rem"
      display={"flex"}
      flexDir="column"
      justifyContent={"center"}
      alignItems="center"
      bgColor={"#141414"}
      color="white"
      mt="-1px"
    >
      <Text
        as={motion.div}
        whileInView={{ opacity: [0.1, 0.5, 0.7, 1], y: [-10, 0] }}
        transition={{ duration: 1 }}
        textAlign="center"
        fontWeight={"medium"}
      >
        &copy; {`${new Date().getFullYear()}`} PGStudio <br />
        Made with &#128151; by Areo Benjamen.
      </Text>
      <HStack gap=".7rem">
        <Box
          as={Link}
          href="https://github.com/iam-benjamen"
          target="__blank"
          isExternal
        >
          <Image
            src={github}
            cursor="pointer"
            w="2rem"
            transitionDuration={".2s"}
            _hover={{ transform: "scale(1.2)" }}
          />
        </Box>
        <Box as={Link} href="https://linkedin.com/in/areo-benjamen" isExternal>
          <Image
            src={linkedin}
            cursor="pointer"
            w="1.5rem"
            transitionDuration={".2s"}
            _hover={{ transform: "scale(1.2)" }}
          />
        </Box>
        <Box as={Link} href="https://twitter.com/areobenjamen" isExternal>
          <Image
            src={twitter}
            cursor="pointer"
            w="1.5rem"
            transitionDuration={".2s"}
            _hover={{ transform: "scale(1.2)" }}
          />
        </Box>
        <Box as={Link} href="mailto:areotimileyin1@gmail.com" isExternal>
          <Image
            src={mail}
            cursor="pointer"
            w="1.5rem"
            transitionDuration={".2s"}
            _hover={{ transform: "scale(1.2)" }}
          />
        </Box>
      </HStack>
      {/* <Text>pgstudios.com &copy; 2022 </Text> */}
    </Box>
  );
};

export default Footer;
