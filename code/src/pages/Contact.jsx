import {
  Container,
  Heading,
  Link,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Box,
  Divider
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function Contact() {
  const contactEmail = "freightjoint@ense374.com";
  const contactPhoneNumber = "+1 (123) 456-7890";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return ( 
    <>
      <Navbar />
      <Container maxW="container.lg" py={"40px"}>
        <Heading as="h1" my="4" textAlign="center">
          Contact Us
        </Heading>
        <Flex justifyContent={{ base: "center", md: "space-between" }} flexDirection={{ base: "column", md: "row" }} alignItems="flex-start">
          <Box width={{ base: "100%", md: "50%" }} mb={{ base: "4", md: "0" }} pr={{ base: "0", md: "4" }} textAlign="right">
            <form onSubmit={handleSubmit}>
              <FormControl mt="6" id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name"/>
              </FormControl>
              <FormControl mt="4" id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl mt="4" id="subject" isRequired>
                <FormLabel>Subject</FormLabel>
                <Input placeholder="Subject" />
              </FormControl>
              <FormControl mt="4" id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button mt="6" bg="#0866FF" type="submit" color="white" _hover={{background: "#42B72A"}}>
                Send Message
              </Button>
            </form>
          </Box>
          <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
          <Flex 
            direction="column" 
            alignItems="center"
            justifyContent="center"
            width={{ base: "100%", md: "45%" }}
          >
            <Box>
              <Heading as="h4" fontSize="lg" mb="2" mt="30px">
                Email Us
              </Heading>
              <Link href={`mailto:${contactEmail}`} color="#0866FF">
                {contactEmail}
              </Link>
              <Divider my="4" />
              <Heading as="h4" fontSize="lg" mb="2">
                Call Us
              </Heading>
              <Link href={`tel:${contactPhoneNumber}`} color="#0866FF">
                {contactPhoneNumber}
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
      <Footer />
    </>
  );
}