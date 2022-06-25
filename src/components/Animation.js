import { Image,Box } from "@chakra-ui/react";
import mainLogo from "../assets/PGStudio Logo.jpg";

const Animation = () => {
    return (
        <Box bgColor={"#141414"} h="100vh" w="100%" display={"flex"}>
            <Image src={mainLogo} className="main-logo" m="auto" w="5rem" alignSelf={"center"}/>
        </Box>
    );
}

export default Animation;