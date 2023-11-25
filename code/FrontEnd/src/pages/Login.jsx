import { Link } from 'react-router-dom';
import {
  Container,
  Flex,
  Box,
  Input,
  Button,
  Text,
  Image,
  Card,
  FormControl,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleForgotPassword = () => {
    push('/resetpassword');
  };
  
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
                <FormControl mt="8" id="name" isRequired>
                  <Input type="text" placeholder="Email or Phone number"/>
                </FormControl>
                <FormControl mt="6" id="email" isRequired>
                  <Input type="password" placeholder="Password" />
                </FormControl>
                <Button mt="4" bg="#0866FF" w="full" color="white" _hover={{ bg: "#42B72A" }}>
                  Log In
                </Button>
              </form>
              <Link to="/resetpassword" textAlign="center">
                <Button mt="4" variant="link" color="#0866FF" fontSize="14px">
                  Forgot Password?
                </Button>
              </Link>
              <form onSubmit={handleSubmit}>
                <Button mt="4" bg="#42B72A" w="80%" color="white" _hover={{ bg: "#42A72A" }}>
                  Create new account
                </Button>
              </form>
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