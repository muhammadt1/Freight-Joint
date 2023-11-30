import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  VStack,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Card,
} from "@chakra-ui/react";
import Navbar from "../components/DashboardNavBar/ShipperNavBar/ShipperNavBar";
import { useNavigate } from "react-router-dom";

export default function ActiveLoads() {
  const [loads, setLoads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/activeloads", { withCredentials: true })
      .then((response) => {
        setLoads(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching loads:", error);
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      });
  }, [navigate]);
  
  return (
    <>
      <Flex>
        <Navbar activePage="activeLoads" />
        <Flex flex={1} justifyContent="center">
          <VStack mt={10}>
            <Text fontSize={25} fontWeight={"1000"} mt={2}>
              My Active Loads
            </Text>
            <Card alignItems={"center"} maxWidth="100%" p={10}>
              {isLoading ? (
                <Text>Loading...</Text>
              ) : (
                <Table variant="simple" spacing={6} width="300px">
                  <Thead>
                    <Tr>
                      <Th textAlign={"center"}>Pick Up - Drop Off</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {loads.map((load) => (
                      <Tr key={load._id}>
                        <Td colSpan={4}>
                          <Accordion allowToggle width="100%">
                            <AccordionItem width="100%">
                              <h2>
                                <AccordionButton width="100%" >
                                  <Box flex="1" textAlign="left">
                                    {load.pickUpLocation} - {load.dropOffLocation}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <p><strong>Unit: </strong>{load.selectedUnit}</p>
                                <p><strong>Type: </strong>{load.selectedType}</p>
                                <p><strong>Pick Date: </strong>{load.pickUpDate}</p>
                                <p><strong>Pick Time: </strong>{load.pickUpTime}</p>
                                <p><strong>Drop Date: </strong>{load.dropOffDate}</p>
                                <p><strong>Drop Time: </strong>{load.dropOffTime}</p>
                                <p><strong>Additional Information:</strong></p>
                                <p>{load.additionalInfo}</p>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              )}
            </Card>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}


