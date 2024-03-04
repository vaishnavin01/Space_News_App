import React from "react";
import {
  Box,
  Center,
  Image,
  Text,
  HStack,
  Heading,
  VStack
} from "@chakra-ui/react";

function Card({ item }) {
  return (
    <Box
      w="100%"
      h="400px"
      bg="#e1d8ee"
      p="5"
      display="flex"
      justifyContent="center"
    >
      <Center
        bg="#1f1122"
        w="100%"
        p="2px"
      >
        <Box
          w="100%"
          p="10"
          bg="#e1d8ee"
          color="#1f1122"
          cursor="pointer"
          _hover={{ bg: "#e0c6b2" }}
          h="100%"
          onClick={() => window.location.href = item.url}
        >
          <HStack spacing="8" align="center">
            <Image  h={'250px'} w={'300px'} src={item.imageUrl} alt={item.title} />
            <VStack>
            <Heading as="h3" fontWeight="Bold" textTransform="capitalize">
              {item.title}
            </Heading>
            <Text  as="h6" m={'8px'} >
              {item.summary}

            </Text>

            </VStack>
           
          </HStack>
        </Box>
      </Center>
    </Box>
  );
}

export default Card;
