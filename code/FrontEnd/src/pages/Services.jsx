import {
  Container,
  Heading,
  Text,
  Flex,
  Box
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const ServiceSection = ({ title, description }) => {
  return (
    <Box mb="40px" flexBasis={["100%", "45%"]} p="20px" boxShadow="md" bg="white" borderRadius="lg">
      <Heading as="h2" size="md" mb="20px" textAlign="center">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const Section = ({ title, children }) => {
  return (
    <Box py="30px">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="40px" textAlign="center">
          {title}
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          {children}
        </Flex>
      </Container>
    </Box>
  );
};

export default function Services() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py="40px">
        <Flex justifyContent="space-between" flexWrap="wrap" direction={["column", "row"]} gap="20px">
          {/* Adjust the main Flex container */}
          <Section title="For Shippers">
            <ServiceSection
              title="Post Your Load"
              description="Easily list your freight details, including pickup/delivery locations, dimensions,
               weight, and special requirements. Our user-friendly interface simplifies providing comprehensive information."
            />
            <ServiceSection
              title="Get Matched"
              description="Our intelligent system connects you with reliable truckers. Utilizing advanced 
              algorithms, we ensure efficient and trustworthy matches for transporting your load."
            />
          </Section>

          <Section title="For Truckers">
            <ServiceSection
              title="Find a Load"
              description="Browse available loads matching your route, schedule, and equipment. Our platform 
              offers a comprehensive list to match your transportation needs."
            />
            <ServiceSection
              title="Secure a Deal"
              description="Directly communicate with shippers for transparent pricing. Facilitating fair 
              negotiations, our platform ensures transparency and reliable deals."
            />
          </Section>
        </Flex>
      </Container>
      <Footer />
    </>
  );
}