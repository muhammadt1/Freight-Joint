import { Flex, Text, Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Navbar from "../components/DashboardNavBar/ShipperNavBar/ShipperNavBar";
import {
  Card,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ActiveLoads() {
  const [loads, setLoads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/activeloads")
      .then((response) => {
        setLoads(response.data);
      })
      .catch((error) => {
        console.error("Error fetching loads:", error);
      });
  }, []);

  return (
    <>
      <Flex>
        <Navbar activePage="activeLoads" />
        <Flex flex={1} justifyContent="center">
          <VStack mt={10}>
            <Text fontSize={25} fontWeight={"1000"} mt={2}>
              Active Loads
            </Text>
            <Card alignItems={"center"} maxWidth={1500} p={10}>
              <Table variant="simple" spacing={6}>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"}>Pick Up - Drop Off</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {loads.map((load) => (
                    <Tr key={load._id}>
                      <Td colSpan={4}>
                        <Accordion allowToggle>
                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  {load.pickUpLocation} - {load.dropOffLocation}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <p>Unit: {load.selectedUnit}</p>
                              <p>Type: {load.selectedType}</p>
                              <p>Pick Date: {load.pickUpDate}</p>
                              <p>Pick Time: {load.pickUpTime}</p>
                              <p>Drop Date: {load.dropOffDate}</p>
                              <p>Drop Time: {load.dropOffDate}</p>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Card>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
