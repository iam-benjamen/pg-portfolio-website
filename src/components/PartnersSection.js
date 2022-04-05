import { Box, Image } from "@chakra-ui/react";
import arranged from "../assets/partners/Website - Partners.png"

const PartnersSection = () => {
  return (
    <Box
      h="max-content"
      bgColor={"#101010"}
    >
      <Image src={arranged} w={["100%","100%","80%"]} margin="auto" mt="-1px"/>
    </Box>
  );
};

export default PartnersSection;
