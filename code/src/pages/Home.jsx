import { Container, Heading, Text } from "@chakra-ui/layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
      <Heading>This is Home</Heading>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, sunt.</Text>
      </Container>
    </>
  )
}