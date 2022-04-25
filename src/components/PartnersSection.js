import { Box, Image } from "@chakra-ui/react";
import arranged from "../assets/partners/Website - Partners.png"

const PartnersSection = () => {
  return (
    <Box
      h="max-content"
      bgColor={"#101010"}
      py="3rem"
      mt="-1px"
      px="1rem"
      
    >
      <Image src={arranged} w={["100%","100%","60%"]} margin="auto" mt="-5px"/>
    </Box>
  );
};

export default PartnersSection;
