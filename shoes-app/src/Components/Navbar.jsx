import React, { useState } from 'react'
import { Box, Flex, Spacer, Button, Stack, ButtonGroup, Center, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <Center>
    <Flex  p={4}>
  <Box>
    <Link to={"/"}  >
    <Image  width={50} h={50} src="https://img.freepik.com/free-vector/detailed-click-collect-sign_23-2148779344.jpg?size=338&ext=jpg&ga=GA1.1.28179787.1675066578&semt=ais" />
    </Link>
  </Box>
  <Spacer />
  <ButtonGroup>
    
    <Link to={"/"} >
    <Button colorScheme='blue' variant='ghost'>Home</Button>
    </Link>
    
    <Link to={"/product"} >
    <Button   colorScheme='blue' variant='ghost'>Product</Button>
    </Link>
    
    <Link to={"/admin"}>
    <Button   colorScheme='blue' variant='ghost'>Admin</Button>
    </Link>

    <Link to={"/login"}>
    <Button   colorScheme='blue' variant='ghost'>Login</Button>
    </Link>
  
  </ButtonGroup>
</Flex>
</Center>
  )
}

export default Navbar