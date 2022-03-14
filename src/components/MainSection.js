import { Box, Image, VStack, Heading, Text } from "@chakra-ui/react";
import mainPicture2 from "../assets/mainProject2.png";
import { useState } from "react";

const MainSection = () => {
  const titles = ["UX Designer", "Architect", "Graphics Designer", "Drummer"];
  const [first, setFirst] = useState(titles[0]);

  return (
    <Box bgColor="#101010" height="100vh" mt={"1rem"}>
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
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
        <VStack px={"1rem"} maxWidth="25rem" justifyContent={"center"} ml="-3rem">
          <Heading color="white" lineHeight={0.8} alignSelf="start" bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text">
            <Text fontSize="5xl">Adediran</Text>
            <Text fontSize="4xl">Ilerioluwa</Text>
          </Heading>
          <Text className="font-link" alignSelf="start" color="white">
            I am a {first}
          </Text>
          <Text
            color="white"
            pr={"0.5rem"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            delectus commodi veritatis neque adipisci repellat nobis debitis
            natus sint laboriosam expedita ducimus, sapiente perferendis!
            Nostrum ea excepturi est? Doloribus, eos!
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default MainSection;
