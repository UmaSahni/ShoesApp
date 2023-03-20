import { Box, Button, ButtonGroup, Card, CardBody, CardFooter,useBreakpointValue, Container, Divider, GridItem, Heading, Image, SimpleGrid, Stack, Text, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const RroductCard = ({title,image, price, brand, discount, gender , id }) => {
   
    return (
    <GridItem >
        <Card maxW='20rem'>
  <CardBody>
   <Box height={"15rem"} width={"100%"} >
    <Center>
    <Image
      src={image}
      alt={title}
      borderRadius='lg'
    //   width={"100%"}
    //   height="100%"
    />
    </Center>
    </Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      {/* <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text> */}
      <Text color='blue.600' fontSize='2xl'>
       ${price}
      </Text>
      <Text> <b>Brand</b>  {brand}</Text>
      <Text> <b>Discount</b>  {discount}% OFF</Text>
      <Text> <b>Gender</b>  {gender}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to="/edit" >
      <Button variant='solid' colorScheme='blue'>
       Edit Now
      </Button>
      </Link>
      <Button variant='ghost' colorScheme='blue'>
        See More
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </GridItem>
  )
}

export default RroductCard