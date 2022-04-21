import { Box, Image, Heading, Avatar, Text } from "@chakra-ui/react";
import mainPicture from "../assets/sideView (1).png";
import commentIcon from "../assets/comments-solid.svg";
import jamesfarrell from "../assets/Clients/jamesfarrrell.jpeg";
import adeleye from "../assets/Clients/adeleye.jpeg";
import jackson from "../assets/Clients/jackson.jpeg";
import martin from "../assets/Clients/martin.jpeg";
import oyelola from "../assets/Clients/oyelola.jpeg";
import samson from "../assets/Clients/samson.jpeg";
import sonia from "../assets/Clients/sonia.jpeg";
import Slider from "react-slick";


const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
  };
  return (
    <Box h="max-content" bgColor={"#101010"} color="white">
      <Box
        w="80%"
        display={"flex"}
        m="auto"
        justifyContent="center"
        mt={"-1px"}
        flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
      >
        <Box
          w={{ base: "100%", md: "27rem" }}
          // border={".5px solid black"}
          padding={["1rem", "1.5rem", "2rem"]}
          margin={("auto", "auto", 0)}
          alignSelf="center"
        >
          <Slider {...settings} zIndex={-23}>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"1.5rem"}
                >
                  Amazing Job! Promiseguy is the very best - This is my 3rd time
                  working with him and I will continue to work with him. Top
                  quality, you won't be disappointed!
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar name="James Farrell" src={jamesfarrell} size={"md"} />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      James Farrell
                    </Heading>
                    <Text>Service Delivery Executive at Cisco</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"1.5rem"}
                >
                  Promiseguy is extremely professional he went beyond my
                  expections each time I had a project . He was always on time
                  and super creative. I highly recommend him.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar name="Marthin Ngouem" src={martin} size={"md"} />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Marthin Ngouem
                    </Heading>
                    <Text>Houston, Texas. USA</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"2rem"}
                >
                  Mr Promise is very creative and talented graphic designer, he
                  has mastered his craft making him one of the best
                  professionals I have worked with, I recommend him.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem" pb="3rem">
                  <Avatar name="Jackson Jacobs" src={jackson} size={"md"} />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Jackson Jacobs
                    </Heading>
                    <Text>CEO SoundTrip -USA</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"1.5rem"}
                >
                  I enjoyed working with Ilerioluwa Adediran. He has good
                  communication skill and knowledgeable about Architectural
                  Designs and Visualization. I look forward to working with him
                  again.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar name="Adeleye Adeyemo" src={adeleye} size={"md"} />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Adeleye Adeyemo
                    </Heading>
                    <Text>CEO, Elo-Hekka Resources Ltd. Nigeria</Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"1.5rem"}
                >
                  With the extraordinary high-quality work rendered, I am
                  impressed by the professionalism Ilerioluwa Adediran put in
                  what he does, attention to details and promptness to project
                  delivery.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar name="Oyelola T.D." src={oyelola} size={"md"} />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Oyelola T.D.
                    </Heading>
                    <Text>
                      Project Architect, Pleasantview Design and Renovation.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"1.5rem"}
                >
                  I am well impressed with Promise's services thus far and his
                  quality of delivery with unique style of creativity he puts in
                  to every of his job!!! I can go to sleep after giving him an
                  illustration of what I want and I have always trust and
                  believe his creativity for real.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar name="Samson Okuro" src={samson} size={"md"} />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Samson Okuro
                    </Heading>
                    <Text>CEO, Instadailydrum</Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"1.5rem"}
                >
                  Promise is an intellegent Graphics Designer. He handles one's
                  business as if it is his. He tries to make sure your business
                  grow (doing more than the ordinary).
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar name="Sonia Uche" src={sonia} size={"md"} />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Sonia Uche
                    </Heading>
                    <Text>CEO - Sonia Hair Extensions & Actress</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>
        <Box>
          <Image
            src={mainPicture}
            w={"27rem"}
            border={"1px solid black"}
            margin="auto"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
