import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";
import { Archi } from "../utils/links";

const ArchiWorks = () => {
  return (
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
      {Object.keys(Archi).map((keyOuter) => {
        return Object.keys(Archi[keyOuter]).map((keyInner) => {
          return (
            <Box
              key={`${keyInner}-${keyOuter}`}
              overflow="hidden"
              borderRadius={"md"}
              borderWidth="1px"
              w={["45%", "45%", "20%"]}
              cursor="pointer"
            >
              <Image
                src={Archi[keyOuter][keyInner]}
                w="100%"
                h={["8rem", "9rem", "12rem"]}
                _hover={{ transform: "scale(1.1)" }}
                transition="ease-in-out"
                transitionDuration={".4s"}
                loading="lazy"
                objectFit={"cover"}
              />
            </Box>
          );
        });
      })}
    </Box>
  );
};

export default ArchiWorks;
