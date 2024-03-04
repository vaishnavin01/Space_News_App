import React from 'react';
import  {Link} from 'react-router-dom';
import img6 from '../assets/spacesearch.png';
import{BiMenuAltLeft} from 'react-icons/bi';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Image
} from '@chakra-ui/react'

const Header=()=>{
    const {isOpen,onOpen,onClose}=useDisclosure()
  return (
   
    <>
    <Button
    zIndex={'overlay'}
    position={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme='purple'
    width={'10'}
    
    height={'10'}
    borderRadius={'full'}
    onClick={onOpen}>
    <BiMenuAltLeft size={'20'}  />
      

    </Button>

   <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
   <DrawerOverlay/>
   

    <DrawerContent>
    <DrawerCloseButton/>
    <DrawerHeader>Flash View</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button  onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/upload'}>Blogs</Link>
                </Button>
            </VStack>
            <HStack margin={'5'}>
                <Button  onClick={onClose} colorScheme='purple'>
                    <Link to={'/login'}> Login</Link>
                </Button>

                <Button  onClick={onClose} colorScheme='purple' variant={'outline'} >
                    <Link to={'/signup'}>Signup</Link>
                </Button>
            </HStack>

            <Image src={img6} h={["20","300"]} filter={'hue-rotate(-120deg)'}/>
        </DrawerBody>

    </DrawerContent>

   </Drawer>
    </>
       
    
  );
}

export default Header;
