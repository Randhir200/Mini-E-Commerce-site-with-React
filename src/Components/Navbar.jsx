import React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return (
    <Box m='0 20px' p='10px 0'>
      <Flex gap='5'>
        <Text fontSize='16px'>Navbar</Text>
        <Spacer />
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/cart'>Cart</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
