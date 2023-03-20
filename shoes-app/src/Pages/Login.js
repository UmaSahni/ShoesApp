import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { LoginFun } from '../Redux/AuthReducer/action';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const isAuthTrue = useSelector((store)=>store.authReducer)
  
  const handleClick = () =>{
    const obj = {email, password}
    dispatch(LoginFun(obj)).then((res)=> navigate(location.state)  )
  }



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            
          <Stack spacing={4}>
           
          
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            
            <Stack spacing={10}>
             
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleClick}
                
                >
                Sign in
              </Button>
            
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}