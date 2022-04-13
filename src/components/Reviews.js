import { Box, Image, Heading, Avatar, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import mainPicture from "../assets/sideView (1).png";
import commentIcon from "../assets/comments-solid.svg";

const ReviewsSection = () => {
  return (
    <Box h="max-content" bgColor={"#121212"} color="white">
      <Box
        w="80%"
        display={"flex"}
        m="auto"
        
        justifyContent="center"
        mt={"-1px"}
        flexDir={["column-reverse", "column-reverse", "row"]}
      >
        <Box
          w={["100%", "100%", "50%"]}
          border={"1px solid black"}
          padding={["1rem", "1.5rem", "3rem"]}
        >
          <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            module={(EffectFade, Pagination, Autoplay)}
            effect="fade"
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".swiper-pagination",
            }}
            allowTouchMove={true}
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading fontFamily={"Poppins"} lineHeight="1.3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, ipsa.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size={"md"}
                  />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Romada K. Velvin
                    </Heading>
                    <Text>Founder of KCO</Text>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </Box>
        <Box>
          <Image src={mainPicture} w="25rem" border={"1px solid black"}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
