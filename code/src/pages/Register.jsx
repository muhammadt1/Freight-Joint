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
  Select
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Pete from "../../public/img/Pete.webp";
import Terms from "../components/TermsConditions"

export default function Registration() {
  const [registrationType, setRegistrationType] = useState("shippers");
  const [isTermsOpen, setTermsOpen] = useState(false); // State to manage Terms modal visibility

  const handleRegistrationChange = (value) => {
    setRegistrationType(value);
  };

  // Function to open Terms modal
  const onOpenTerms = () => setTermsOpen(true);

  // Function to close Terms modal
  const onCloseTerms = () => setTermsOpen(false);

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
              width="1000px"
              objectFit="cover"
              src={Pete} 
              alt="Pete"
              boxShadow="1px 1px 10px #000"
            />
            <Text mb="4" mt="20px">
              Connecting Shippers and Truckers Seamlessly
            </Text>
          </Box>

          <Box p="60px" ml="50px" fontSize="15px" w="100%">
            <VStack spacing="6">
              <Select
                value={registrationType}
                onChange={(e) => handleRegistrationChange(e.target.value)}
                w="100%"
              >
                <option value="shippers">Register for Shippers</option>
                <option value="truckers">Register for Truckers</option>
              </Select>

              {registrationType === "shippers" ? (
                <VStack spacing="6" w="100%">
                  <Input placeholder="Company Name" required />
                  <Input placeholder="Primary Contact Name" required/>
                  <Input placeholder="Primary Contact Email" type="email" required/>
                  <Input placeholder="Primary Phone Number" type="tel" required />
                  <Input placeholder="Password" type="password" required/>
                  <Input placeholder="Confirm Password" type="password" required/>
                </VStack>
              ) : (
                <VStack spacing="6" w="100%">
                  <Input placeholder="Legal Company Name" required/>
                  <Input placeholder="Doing Business As" required/>
                  <Input placeholder="Company Address" required/>
                  <Input placeholder="Email" type="email" required/>
                  <Input placeholder="Phone Number" type="tel" required/>
                  <Input placeholder="DOT #" required/>
                  <Input placeholder="MCV #" required/>
                </VStack>
              )}

              <Button
                bg="#0866FF"
                w="100%"
                color="white"
                _hover={{ bg: "#42B72A" }}
              >
                Register
              </Button>
              <Text fontSize="sm" textAlign="center">
                By registering, you agree to our 
                <Button ml="2" mr="1" variant="link" color="#0866FF" fontSize="14px" onClick={onOpenTerms}>
                  Terms of Service
                </Button>
                and 
                <Button ml="1" mr="2" variant="link" color="#0866FF" fontSize="14px">
                  Privacy Policy
                </Button>
              </Text>
            </VStack>
            <Text textAlign="center" mt="2">
              <strong>Your Ultimate Loadboard Solution!</strong>
            </Text>
          </Box>
        </Flex>
      </Container>

      <Terms isTermsOpen={isTermsOpen} onCloseTerms={onCloseTerms} />
    </>
  );
}

