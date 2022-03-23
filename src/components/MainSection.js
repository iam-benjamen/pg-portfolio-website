import { Box, Image, VStack, Heading, Text } from "@chakra-ui/react";
import mainPicture2 from "../assets/mainProject2.png";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const MainSection = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Product Designer.",
        "Graphics Designer.",
        "Content Creator.",
        "Architectural Designer.",
      ],
      typeSpeed: 40,
      backSpeed: 50,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={["column-reverse", "column-reverse", "row"]}
      justifyContent="center"
      bgColor="#101010"
      height="100vh"
      alignItems={"center"}
    >
      <Box>
        <Image
          src={mainPicture2}
          width={["-webkit-fill-available", "-webkit-fill-available", "37rem"]}
        />
      </Box>
      <VStack
        px={"1rem"}
        maxWidth="25rem"
        justifyContent={"center"}
        ml={["1rem", "1rem", "-3rem"]}
        pt={["2rem", "2rem", "0rem"]}
      >
        <Heading
          color="white"
          lineHeight={0.8}
          alignSelf="start"
          bgGradient="linear(to-l, #FFFFFF, #3d648f)"
          bgClip="text"
        >
          <Text fontFamily={"Montserrat"} fontSize={["3rem", "3rem", "4rem"]}>
            Adediran
          </Text>
          <Text fontFamily={"Montserrat"} fontSize={["2rem", "2rem", "3rem"]}>
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
          in effect,conditioned to prefer bad design, because that is what it
          lives with.
        </Text>
      </VStack>
    </Box>
  );
};

export default MainSection;
