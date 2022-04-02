import { Box, Image } from "@chakra-ui/react";
// import logo1 from "../assets/partners/ELO - HEKKA Resources Limited - LOGO.png";
// import logo2 from "../assets/partners/Essoxebits Logo - PNG.png";
// import logo3 from "../assets/partners/InstaDailyDrum Logo - 2.png";
// import logo4 from "../assets/partners/OVERHPLUS - Logo (PNG).png";
// import logo5 from "../assets/partners/SMART Herds - Logo (MAIN).png";
// import logo6 from "../assets/partners/SONIA HAIR EXTENSIONS - LOGO.png";
// import logo7 from "../assets/partners/SoundTrip - LOGO (Final) - 2.png";
import arranged from "../assets/partners/Website - Partners.png"

const PartnersSection = () => {
  return (
    <Box
      h="max-content"
      bgColor={"#101010"}
    >
      <Image src={arranged} w={["100%","100%","80%"]} margin="auto" mt="-1px"/>
      {/* <Box
        display={"flex"}
        flexDir="row"
        justifyContent={"center"}
        gap="3rem"
        flexWrap={"wrap"}
      >
        <Image src={logo3} w="13rem" />
        <Image src={logo7} w="13rem" />
        <Image src={logo6} w="13rem" />
        <Image src={logo1} w="13rem" />
      </Box>
      <Box
        display={"flex"}
        flexDir="row"
        justifyContent={"center"}
        gap="3rem"
        flexWrap={"wrap"}
      >
        <Image src={logo5} w="13rem" />
        <Image src={logo4} w="13rem" />
        <Image src={logo2} w="13rem" />
      </Box> */}
    </Box>
  );
};

export default PartnersSection;
