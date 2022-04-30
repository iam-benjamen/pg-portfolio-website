import { SRLWrapper } from "simple-react-lightbox";
import { Graphics } from "../utils/links";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// const options = {
//   buttons: { showDownloadButton: false, showThumbnailsButton: false },
//   progressBar: {},
// };
const StillWorks = () => {
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
        {Object.keys(Graphics).map((Outer) => {
          return Object.keys(Graphics[Outer]).map((Inner) => {
            return (
              <Box
                key={`${Inner}-${Outer}`}
                overflow="hidden"
                borderRadius={"md"}
                borderWidth="1px"
                w={["45%", "45%", "20%"]}
                cursor="pointer"
              >
                <Image
                  src={Graphics[Outer][Inner]}
                  w="100%"
                  h={["8rem", "10rem", "12rem"]}
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

export default StillWorks;
