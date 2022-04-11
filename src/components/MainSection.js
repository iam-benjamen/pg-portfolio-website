import { Box, Image, VStack, Heading, Text, Flex, HStack, Link } from "@chakra-ui/react";
import mainPicture2 from "../assets/partners/ME(Compressed).png";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import mail from "../assets/mail.svg";

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
      height={["100vh", "max-content", "max-content"]}
      alignItems={"center"}
      pt="5rem"
      gap="1rem"
    >
      <Box display={"flex"} flexDir={["column","column","row-reverse"]} gap={["0","0","2rem"]}>
        <Image
          src={mainPicture2}
          width={["-webkit-fill-available", "-webkit-fill-available", "37rem"]}
        />
        {/* <Icon className="rotating-ring" position="absolute" /> */}
        <Box display={"flex"} flexDir={["row","row","column"]} justifyContent={"center"} gap=".7rem" _before={{content:"''",height:"11rem", w:"1px", bgColor:"#3d648f", ml:"12px", mt:"5px"}}>
          <Box as={Link} href="https://github.com/iam-benjamen" isExternal>
            <Image
              src={github}
              cursor="pointer"
              w="1.7rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
          <Box as={Link} href="https://linkedin.com/in/iambenjamen" isExternal>
            <Image
              src={linkedin}
              cursor="pointer"
              w="1.5rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
          <Box as={Link} href="https://github.com/iam-benjamen" isExternal>
            <Image
              src={twitter}
              cursor="pointer"
              w="1.5rem"
              transitionDuration={".2s"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </Box>
          <Box as={Link} href="https://github.com/iam-benjamen" isExternal>
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
          color="InactiveBorder"
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
