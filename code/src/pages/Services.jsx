import { Container, Heading, Text, Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const ServiceSection = ({ title, description }) => {
  return (
    <Box mb="40px">
      <Heading as="h2" size="xl" mb="20px">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const Section = ({ title, children }) => {
  return (
    <Box py="60px">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="40px" textAlign="center">
          {title}
        </Heading>
        {children}
      </Container>
    </Box>
  );
};

export default function Services() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py="60px">
        <Section title="For Shippers">
          <Flex justifyContent="space-between" flexWrap="wrap">
            <ServiceSection
              title="Post Your Load"
              description="Easily list your freight details, including pickup/delivery locations, dimensions, weight, and special requirements. Our user-friendly interface simplifies providing comprehensive information."
            />
            <ServiceSection
              title="Get Matched"
              description="Our intelligent system connects you with reliable truckers. Utilizing advanced algorithms, we ensure efficient and trustworthy matches for transporting your load."
            />
          </Flex>
        </Section>

        <Section title="For Truckers">
          <Flex justifyContent="space-between" flexWrap="wrap">
            <ServiceSection
              title="Find a Load"
              description="Browse available loads matching your route, schedule, and equipment. Our platform offers a comprehensive list to match your transportation needs."
            />
            <ServiceSection
              title="Secure a Deal"
              description="Directly communicate with shippers for transparent pricing. Facilitating fair negotiations, our platform ensures transparency and reliable deals."
            />
          </Flex>
        </Section>

        {/* Additional sections for other aspects */}
      </Container>
    </>
  );
}
