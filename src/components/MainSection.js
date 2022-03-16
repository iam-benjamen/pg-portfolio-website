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
        "Architect.",
        "Content Creator.",
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
    <Box bgColor="#101010" height="100vh">
      <Box
        display="flex"
        flexDirection={["column-reverse", "column-reverse", "row"]}
        justifyContent="center"
      >
        <Box>
          <Image
            src={mainPicture2}
            width={[
              "-webkit-fill-available",
              "-webkit-fill-available",
              "37rem",
            ]}
          />
        </Box>
        <VStack
          px={"1rem"}
          maxWidth="25rem"
          justifyContent={"center"}
          ml={["1rem", "1rem", "-3rem"]}
        >
          <Heading
            color="white"
            lineHeight={0.8}
            alignSelf="start"
            bgGradient="linear(to-l, #FFFFFF, #3d648f)"
            bgClip="text"
          >
            <Text fontFamily={"Montserrat"} fontSize="5xl">Adediran</Text>
            <Text fontFamily={"Montserrat"} fontSize="4xl">Ilerioluwa</Text>
          </Heading>
          <Text
            className="font-link"
            fontWeight={"bold"}
            fontSize="2xl"
            alignSelf="start"
            color="white"
            pt={"1.5rem"}
          >
            I Am A <span ref={el} />
          </Text>
          <Text color="white" pr={"0.5rem"} textStyle="Quote">
            The public is more familiar with bad design than good design. It is,
            in effect, conditioned to prefer bad design, because that is what it
            lives with. The new becomes threatening, the old reassuring.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default MainSection;
