import React from 'react';
import {AiOutlineSend} from 'react-icons/ai'
import {Box,Stack,VStack,HStack,Button,Heading,Input} from '@chakra-ui/react'

const Footer = () => {
  return <Box bgColor={'blackAlpha.900'} color={'white'} p={"5"} minH={'20'}>
    <Stack
    direction={['column','row']}>
    <VStack alignItems={'stretch'} w={"100%"}>
        <Heading size="md" textTransform={'uppercase'} textAlign={['center','left']}>subscribe to get updates</Heading>
        <HStack borderBottom={'2px solid white'} padding={'2'}>
            <Input
            placeholder='enter your name'
            border={'none'} 
            borderEndRadius={'none'}
            outline='none'
            focusBorderColor='none'
            />
            <Button p={"0"}
            colorScheme='purple'
            variant={'ghost'}
            borderRadius={'0,20px,20px,0'}>
                <AiOutlineSend sise={20}/>
            </Button>
        </HStack>

 
    </VStack>
    <VStack alignItems={'stretch'} w={"100%"}
    borderLeft={['none','1px solid white']}  
    borderRight={['none','1px solid white']} >
        <Heading textTransform={'uppercase'} textAlign={'center'}>@NASA</Heading>
       
    </VStack>

<VStack alignItems={'stretch'} w={"100%"}>
    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>social media</Heading>
    <Button variant={'link'} colorScheme='purple'>
            <a href="https://www.google.com">Youtube</a>
           
        </Button>
        <Button variant={'link'} colorScheme='purple'>
            <a href="https://www.google.com">Instagram</a>
           
        </Button>
        <Button variant={'link'} colorScheme='purple'>
            <a href="https://www.google.com">Facebook</a>
           
        </Button>

</VStack>
   
   

    </Stack>


  </Box>
   
}

export default Footer;
