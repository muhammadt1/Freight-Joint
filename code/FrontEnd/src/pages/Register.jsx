import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {
  Container, Flex, Box, VStack, Input, Button, Text, Image, Select
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Pete from "../../public/img/Pete.webp";
import Terms from "../components/TermsConditions";
import Privacy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";

export default function Registration() {
  const navigate = useNavigate();
  const [registrationType, setRegistrationType] = useState("shippers");
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  const [formData, setFormData] = useState({
    type: "shippers",
    companyName: "",
    contactName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegistrationChange = (value) => {
    setRegistrationType(value);
    setFormData({ ...formData, type: value });  
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Send the registrationType as part of the formData
        const registrationData = { ...formData, type: registrationType };
        const response = await axios.post("http://localhost:3001/register", registrationData);
        console.log("Registration Successful:", response.data);
        navigate('/login');
    } catch (error) {
        console.error("Error submitting form", error.response ? error.response.data : error);
    }
};


  const onOpenTerms = () => setTermsOpen(true);
  const onCloseTerms = () => setTermsOpen(false);

  const onOpenPrivacy = () => setPrivacyOpen(true);
  const onClosePrivacy = () => setPrivacyOpen(false);

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" centerContent>
        <form onSubmit={handleSubmit}>
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
                    <Input name="companyName" placeholder="Company Name" required onChange={handleChange} />
                    <Input name="contactName" placeholder="Primary Contact Name" required onChange={handleChange} />
                    <Input name="email" placeholder="Primary Contact Email" type="email" required onChange={handleChange} />
                    <Input name="phoneNumber" placeholder="Primary Phone Number" type="tel" required onChange={handleChange} />
                    <Input name="password" placeholder="Password" type="password" required onChange={handleChange} />
                    <Input name="confirmPassword" placeholder="Confirm Password" type="password" required onChange={handleChange} />
                  </VStack>
                ) : (
                  <VStack spacing="6" w="100%">
                    <Input name="companyName" placeholder="Company Name" required onChange={handleChange} />
                    <Input name="contactName" placeholder="Primary Contact Name" required onChange={handleChange} />
                    <Input name="email" placeholder="Primary Contact Email" type="email" required onChange={handleChange} />
                    <Input name="phoneNumber" placeholder="Primary Phone Number" type="tel" required onChange={handleChange} />
                    <Input name="password" placeholder="Password" type="password" required onChange={handleChange} />
                    <Input name="confirmPassword" placeholder="Confirm Password" type="password" required onChange={handleChange} />
                  </VStack>
                )}

                <Button
                  type="submit"
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
                  <Button ml="1" mr="2" variant="link" color="#0866FF" fontSize="14px" onClick={onOpenPrivacy}>
                    Privacy Policy
                  </Button>
                </Text>
              </VStack>
              <Text textAlign="center" mt="2">
                <strong>Your Ultimate Loadboard Solution!</strong>
              </Text>
            </Box>
          </Flex>
        </form>
      </Container>

      <Terms isTermsOpen={isTermsOpen} onCloseTerms={onCloseTerms} />
      <Privacy isPrivacyOpen={isPrivacyOpen} onClosePrivacy={onClosePrivacy} />
      <Footer/>
    </>
  );
}