import {
  Container,
  Flex,
  Box,
  VStack,
  Input,
  Button,
  Text,
  Image,
  Card,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" centerContent>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
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
            <Text mb="4" fontSize= "20px">Connecting Shippers and Truckers Seamlessly</Text>
          </Box>

          <Card p="60px" ml= "50px" fontSize="15px" w="500px">
            <VStack spacing="6">
              <Input placeholder="Email or phone number" fontSize= "20px"/>
              <Input placeholder="Password" type="password" fontSize= "20px"/>
              <Button bg="#0866FF" w="full" color= "white" fontSize= "20px">
                Log In
              </Button>
              <Button variant="link" colorScheme="blue">Forgot Password?</Button>
              <Button bg="#42B72A" w="80%" color="white" fontSize= "20px">
                Create new account
              </Button>
            </VStack>
            <Text fontWeight= "500" textAlign="center" mt= "2">Your Ultimate Loadboard Solution!</Text>
          </Card>
        </Flex>
      </Container>
    </>
  );
}