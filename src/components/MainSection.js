import {
  Box,
  Image,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import mainPicture2 from "../assets/partners/ME(Compressed).png";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import behance from "../assets/behance.svg";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram-logo.svg";
import { motion } from "framer-motion";

const MainSection = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Architectural Designer.",
        "Visual Designer.",
        "Graphics Designer.",
        "Content Creator.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <Box
      id="home"
      display="flex"
      flexDirection={["column-reverse", "column-reverse", "row"]}
      justifyContent="center"
      bgColor="#141414"
      height={["max-content", "max-content", "max-content"]}
      alignItems={"center"}
      pt="4rem"
      gap="1rem"
    >
      <Box
        display={"flex"}
        flexDir={["column", "column", "row-reverse"]}
        gap={["0", "0", "2rem"]}
      >
        <Image
          src={mainPicture2}
          width={["-webkit-fill-available", "-webkit-fill-available", "37rem"]}
        />
        <Box
          as={motion.div}
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{
            duration: 3,
            delay: 1.5,
            type: "spring",
            stiffness: 100,
          }}
          display={"flex"}
          flexDir={["row", "row", "column"]}
          justifyContent={"center"}
          alignItems="center"
          gap=".7rem"
          _before={{
            content: "''",
            height: { base: "1px", md: "10rem", lg: "10rem" },
            w: { base: "8rem", md: "1px", lg: "1px" },
            bgColor: "#3d648f",
            ml: "5px",
            mt: "5px",
          }}
          mb="2rem"
        >
          <Box
            as={motion.a}
            href="https://www.behance.net/promiseguy02"
            whileInView={{ y: [-30,0], transition:{
              duration: 0.5,
              type: "spring",
              stiffness: 10,
            } }}
            target="__blank"
            layout={true}
          >
            <Image
              src={behance}
              cursor="pointer"
              w="1.8rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
          <Box
            as={motion.a}
            href="http://www.linkedin.com/in/adediran-ilerioluwa"
            whileInView={{ y: [-30,0], transition:{
              duration: 0.4,
              type: "spring",
              stiffness: 10,
            } }}
            target="__blank"
            layout= {true}
          >
            <Image
              src={linkedin}
              cursor="pointer"
              w="1.5rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
          <Box
            as={motion.a}
            href="https://twitter.com/promiseguy03"
            whileInView={{ y: [-30,0], transition:{
              duration: 0.3,
              type: "spring",
              stiffness: 10,
            } }}
            layout= {true}
            target="__blank"
          >
            <Image
              src={twitter}
              cursor="pointer"
              w="1.5rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
          <Box
            as={motion.a}
            href="https://www.instagram.com/promiseguy02/"
    
            whileInView={{ y: [-30,0], transition:{
              duration: 0.2,
              type: "spring",
              stiffness: 10,
            } }}
            target="__blank"
            layout={true}
          >
            <Image
              src={instagram}
              cursor="pointer"
              w="1.5rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
          <Box
            as={motion.a}
            href="mailto:promiseguy02@gmail.com"
            whileInView={{ y: [-30,0], transition:{
              duration: 0.1,
              type: "spring",
              stiffness: 10,
            } }}
            
            target="__blank"
          >
            <Image
              src={mail}
              cursor="pointer"
              w="1.5rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
        </Box>
      </Box>
      <VStack
        as={motion.div}
        // initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.5, 0.7, 1] }}
        transition={{ delay: 5, duration: 10 }}
        px={"1rem"}
        maxWidth="25rem"
        justifyContent={"center"}
        ml={["1rem", "1rem", "-6rem"]}
        pt={["2rem", "2rem", "0rem"]}
      >
        <Heading
          color="white"
          lineHeight={0.8}
          alignSelf="start"
          bgGradient="radial(#3d648f,white, #3d648f)"
          bgClip="text"
          transition={"1s"}
          _hover={{ bgGradient: "linear(#3d648f,white, #3d648f)" }}
        >
          <Text
            fontFamily={"Poppins"}
            fontSize={["3rem", "3rem", "4rem"]}
            pt="3px"
          >
            Adediran
          </Text>
          <Text fontFamily={"Poppins"} fontSize={["2rem", "2rem", "3rem"]}>
            Ilerioluwa
          </Text>
        </Heading>
        <Text
          className="font-link"
          fontWeight={"bold"}
          fontSize="2xl"
          alignSelf="start"
          color="white"
        >
          <span ref={el} />
        </Text>
        <Text color="white" pr={"0.5rem"} textStyle="Quote">
          The public is more familiar with bad design than good design. It is,
          in effect, conditioned to prefer bad design, because that is what it
          lives with.
        </Text>
      </VStack>
    </Box>
  );
};

export default MainSection;
