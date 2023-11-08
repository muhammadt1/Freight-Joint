import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from './logo.jsx';

export default function Navbar() {
    const menuStyle = {
        p: 2,
        
        textAlign: "center",
        borderRadius: "md",
        m: 1,
        color: "black",
        fontSize: "20px",
        p: "15px",
        _hover: {
            bg: "#0866FF",
            fontSize: "21px",
            color: "white"
        }
    }

    return (
        <Flex
            bg="gray.200"
            p={4}
            align="center"
            wrap="wrap"
        >
            <Link to="/">
                <Logo cursor="pointer" />
            </Link>
            <Spacer />
            <Flex
                align="center"
                ml={{ base: 'auto', md: 0 }}
            >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Box as="button" {...menuStyle}>Home</Box>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                    <Box as="button" {...menuStyle}>Services</Box>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Box as="button" {...menuStyle}>Contact</Box>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Box as="button" {...menuStyle}>Login</Box>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <Box as="button" {...menuStyle}>Register</Box>
                </Link>
            </Flex>
        </Flex>
    );
}