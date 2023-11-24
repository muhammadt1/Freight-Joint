import React from 'react';
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from './logo.jsx';

export default function Navbar() {
    const location = useLocation();
    const menuStyle = (path) => ({
        p: 2,
        textAlign: "center",
        borderRadius: "md",
        m: 1,
        color: "black",
        fontSize: "17px",
        p: "15px",
        bg: location.pathname === path ? "#0866FF" : "transparent",
        color: location.pathname === path ? "white" : "#black",
        _hover: {
            bg: "#0866FF",
            fontSize: "17.5px",
            color: "white"
        }
    });

    return (
        <Flex
            bg="gray.200"
            p={4}
            align="center"
            wrap="wrap"
        >
            <NavLink to="/">
                <Logo cursor="pointer" />
            </NavLink>
            <Spacer />
            <Flex
                align="center"
                ml={{ base: 'auto', md: 0 }}
            >
                <NavLink to="/">
                    <Box as="button" sx={menuStyle('/')}>Home</Box>
                </NavLink>
                <NavLink to="/services">
                    <Box as="button" sx={menuStyle('/services')}>Services</Box>
                </NavLink>
                <NavLink to="/contact">
                    <Box as="button" sx={menuStyle('/contact')}>Contact</Box>
                </NavLink>
                <NavLink to="/login">
                    <Box as="button" sx={menuStyle('/login')}>Login</Box>
                </NavLink>
                <NavLink to="/register">
                    <Box as="button" sx={menuStyle('/register')}>Register</Box>
                </NavLink>
            </Flex>
        </Flex>
    );
}
