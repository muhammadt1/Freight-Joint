import {
    Box,
    Text
} from "@chakra-ui/react";

export default function Footer() {
    return (
      <Box as="footer" mt="20px" textAlign="center" py="20px" bg = "gray.200">
        <Text> Freight Joint — Empowering Logistics, Simplifying Success!</Text>
        <Text>&copy; 2023 Freight Joint. All rights reserved.</Text>
    </Box>
    )
  }