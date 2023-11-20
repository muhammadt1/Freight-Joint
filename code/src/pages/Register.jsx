import { useState } from "react";
import {
  Container,
  Flex,
  Box,
  VStack,
  Input,
  Button,
  Text,
  Image,
  Select,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

export default function Registration() {
  const [registrationType, setRegistrationType] = useState("shippers");

  const handleRegistrationChange = (value) => {
    setRegistrationType(value);
  };

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
              src="img/logo.svg" // Replace with your logo image URL
              alt="Logo"
            />
            <Text mb="4" fontSize="20px">
              Connecting Shippers and Truckers Seamlessly
            </Text>
          </Box>

          <Box p="60px" ml="50px" fontSize="15px" w="100%">
            <VStack spacing="6">
              <Select
                value={registrationType}
                onChange={(e) => handleRegistrationChange(e.target.value)}
                fontSize="20px"
                w="100%"
              >
                <option value="shippers">Register for Shippers</option>
                <option value="truckers">Register for Truckers</option>
              </Select>

              {registrationType === "shippers" ? (
                <VStack spacing="6" w="100%">
                  <Input placeholder="Company Name" fontSize="20px" />
                  <Input placeholder="Primary Contact Name" fontSize="20px" />
                  <Input placeholder="Primary Contact Email" type="email" fontSize="20px" />
                  <Input placeholder="Primary Phone Number" type="tel" fontSize="20px" />
                  <Input placeholder="Password" type="password" fontSize="20px" />
                  <Input placeholder="Confirm Password" type="password" fontSize="20px" />
                </VStack>
              ) : (
                <VStack spacing="6" w="100%">
                  <Input placeholder="Legal Company Name" fontSize="20px" />
                  <Input placeholder="Doing Business As" fontSize="20px" />
                  <Input placeholder="Company Address" fontSize="20px" />
                  <Input placeholder="Email" type="email" fontSize="20px" />
                  <Input placeholder="Phone Number" type="tel" fontSize="20px" />
                  <Input placeholder="DOT #" fontSize="20px" />
                  <Input placeholder="MCV #" fontSize="20px" />
                </VStack>
              )}

              <Button
                bg="#0866FF"
                w="100%"
                color="white"
                fontSize="20px"
                _hover={{ bg: "#808080" }}
              >
                Register
              </Button>
              <Text fontSize="sm" textAlign="center">
                By registering, you agree to our Terms of Service and Privacy Policy.
              </Text>
            </VStack>
            <Text fontWeight="500" textAlign="center" mt="2">
              Your Ultimate Loadboard Solution!
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
