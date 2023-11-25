import {
  Container,
  Heading,
  Text,
  Flex,
  Box,
  Image 
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Truck from "../../public/img/truck.webp"
import Trailer from "../../public/img/trailer.webp"
import Footer from "../components/Footer"

const PlaceholderBox = ({ width, height, backgroundColor }) => {
  return (
    <Box
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius="md"
      mb="20px"
    />
  );
};

const Section = ({ title, children }) => {
  return (
    <Box py="40px">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="40px" textAlign="center">
          {title}
        </Heading>
        {children}
      </Container>
    </Box>
  );
};

const FeatureBox = ({ title, description, width }) => {
  return (
    <Box
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      mb="20px"
      width={width}
      textAlign = "center"
    >
      <Heading size="md" mb="4">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Image src = {Truck} width="100%"/>
      <Section title="Welcome to Freight Joint">
        <Text fontSize="xl" textAlign="center">
          Welcome to Freight Joint, the innovative loadboard app designed to
          bridge the gap between shippers and truckers, creating a seamless and
          efficient logistics experience. With our cutting-edge technology, we
          bring together shippers with freight to move and truckers with the
          capacity to move it, ensuring a perfect match every time!
        </Text>
      </Section>

      <Section title="Key Features">
        <Flex justifyContent="space-between" flexWrap="wrap">
          <FeatureBox
            title="Real-Time Load Matching"
            description="Find the perfect freight or truck instantly with our real-time load matching feature."
            width={{ base: "100%", md: "30%" }}
          />
          <FeatureBox
            title="Transparent Pricing"
            description="Get instant quotes and competitive pricing, fostering transparency and trust between shippers and truckers."
            width={{ base: "100%", md: "30%" }}
          />
          <FeatureBox
            title="User-Friendly Interface"
            description="Navigate easily through our intuitive and user-friendly interface designed to save time and reduce hassle."
            width={{ base: "100%", md: "30%" }}
          />
        </Flex>
      </Section>

      <Section title="How Freight Joint Works">
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box flexBasis={{ base: "100%", md: "48%" }} mb="20px">
            <Heading size="md" mb="4" textAlign="center">
              For Shippers
            </Heading>
            <Text>
              <strong>Post Your Load:</strong> Simply list the details of your
              freight, including the pickup and delivery locations, dimensions,
              weight, and any special requirements.
            </Text>
            <Text mt="4">
              <strong>Get Matched:</strong> Our intelligent matching system
              will connect you with qualified truckers ready to transport your
              load.
            </Text>
          </Box>
          <Box flexBasis={{ base: "100%", md: "48%" }} mb="20px">
            <Heading size="md" mb="4" textAlign="center">
              For Truckers
            </Heading>
            <Text>
              <strong>Find a Load:</strong> Browse through available loads and
              find the ones that match your route, schedule, and equipment.
            </Text>
            <Text mt="4">
              <strong>Secure a Deal:</strong> Communicate directly with
              shippers and secure the best deals with transparent pricing.
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section title="Join the Freight Joint Community!">
        <Image src= {Trailer} mb= "20px" />
        <Text fontSize="xl" textAlign="center" mb="40px">
          <i>Whether you’re a shipper with freight to move or a trucker with empty
          space to fill, Freight Joint is your one-stop solution for all your
          logistics needs. Join our growing community and experience a new era
          of streamlined shipping and transportation. Let's drive the future of
          logistics together!</i>
        </Text>
      </Section>

      <Footer />
    </>
  );
}
