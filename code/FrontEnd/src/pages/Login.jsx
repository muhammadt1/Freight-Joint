import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container, Flex, Box, Input, Button, Text, Image, Card, FormControl
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", loginData, { withCredentials: true });
      console.log('Login successful:', response.data);
      const userType = response.data.userType;
      navigate(userType === 'shipper' ? '/activeloads' : '/myloads');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error);
    }
  };

  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" centerContent>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          textAlign={"center"}
          minH="80vh"
          pt={{ base: "4", md: "0" }}
        >
          <Box p="4" mr="50px">
            <Image
              width="300px"
              objectFit="cover"
              src="img/logo.svg"
              alt="Logo"
            />
            <Text mb="4">Connecting Shippers and Truckers Seamlessly</Text>
          </Box>
          <Box>
            <Card p="60px" ml= "50px" fontSize="15px" w="500px"> 
              <form onSubmit={handleSubmit}>
                <FormControl mt="8" id="username" isRequired>
                  <Input 
                    type="text" 
                    name="username"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={loginData.username} 
                  />
                </FormControl>
                <FormControl mt="6" id="password" isRequired>
                  <Input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleInputChange}
                    value={loginData.password}
                  />
                </FormControl>
                <Button type='submit' mt="4" bg="#0866FF" w="full" color="white" _hover={{ bg: "#42B72A" }}>
                  Log In
                </Button>
              </form>
              <Link to="/resetpassword" textAlign="center">
                <Button mt="4" variant="link" color="#0866FF" fontSize="14px">
                  Forgot Password?
                </Button>
              </Link>
              <Link to="/register">
                <Button mt="4" bg="#42B72A" w="80%" color="white" _hover={{ bg: "#42A72A" }}>
                  Create new account
                </Button>
              </Link>
            </Card>
              <Text textAlign="center" mt="2">
                <strong>Your Ultimate Loadboard Solution!</strong>
              </Text>
          </Box>
        </Flex>
      </Container>
      <Footer/>
    </>
  );
}
