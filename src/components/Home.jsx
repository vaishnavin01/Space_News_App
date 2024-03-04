import React from 'react';
import { Box, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/space1.jpg';
import img2 from '../assets/space2.jpg';
import img3 from '../assets/space3.jpg';
import img4 from '../assets/space4.jpg';
import img5 from '../assets/space5.jpeg';
const headingoptions = {
  pos: "absolute",
  left: "50%",
  top: "5",
  transform: "translateX(-50%)",
  textTransform: "uppercase",
  p: "1",
  size: "1xl",
};
const Home = () => {
  return (
    <Box>
      <Mycarousel />
    </Box>
  );
};

const Mycarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} showArrows={false}>
      <Box w='full' h={'100vh'} position="relative">
        <Image src={img1} h={"100vh"} />
        <Heading bgColor={"black"} color={"white"} {...headingoptions}>
        </Heading>
      </Box>

      <Box w='full' h={'100vh'} position="relative">
        <Image src={img2} h={"100vh"} />
        <Heading bgColor={"black"} color={"white"} {...headingoptions}>
        </Heading>
      </Box>

      <Box w='full' h={'100vh'} position="relative">
        <Image src={img3} h={"100vh"} />
        <Heading bgColor={"black"} color={"white"} {...headingoptions}>
        </Heading>
      </Box>

      <Box w='full' h={'100vh'} position="relative">
        <Image src={img4} h={"100vh"} />
        <Heading bgColor={"black"} color={"white"} {...headingoptions}>
        </Heading>
      </Box>
      <Box w='full' h={'100vh'} position="relative">
        <Image src={img5} h={"100vh"} />
        <Heading bgColor={"black"} color={"white"} {...headingoptions}>
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
