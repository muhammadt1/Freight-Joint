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
  Button,
} from "@chakra-ui/react";
import Navbar from "../components/DashboardNavBar/CarrierNavBar/CarrierNavBar";
import { useNavigate } from "react-router-dom";

export default function MarketPlace() {
  const [loads, setLoads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/marketplace", { withCredentials: true })
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
  
  // const handlePickLoad = (loadID) => {
  //   axios.post('http://localhost:3001/pickload', { loadID }, { withCredentials: true })
  //     .then(response => {
  //       console.log('Load picked successfully');
  //       // return axios.delete(`http://localhost:3001/deleteload/${loadID}`, { withCredentials: true });
  //     })
  //     // .then(deleteResponse => {
  //     //   console.log('Load deleted from marketplace successfully');
  //     //   setLoads(loads.filter(load => load._id !== loadID));
  //     // })
  //     .catch(error => {
  //       console.error('Error in the load handling process:', error);
  //     });
  // };
  const handlePickLoad = (loadID) => {
    axios.post('http://localhost:3001/pickload', { loadID }, { withCredentials: true })
      .then(response => {
        console.log('Load picked successfully');
        setLoads(currentLoads => currentLoads.filter(load => load._id !== loadID));
      })
      .catch(error => {
        console.error('Error in the load handling process:', error);
      });
  };
  return (
    <>
      <Flex>
      <Navbar activePage="marketPlace"/>    
        <Flex flex={1} justifyContent="center">
          <VStack mt={10}>
            <Text fontSize={25} fontWeight={"1000"} mt={2}>
              MarketPlace
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
                      <Tr key={load.loadID}>
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
                                <Text pb={2}><strong>Unit Requested: </strong>{load.selectedUnit}</Text>
                                <Text pb={2}><strong>Load Type: </strong>{load.selectedType}</Text>
                                <Text pb={2}><strong>Pick Date: </strong>{load.pickUpDate}</Text>
                                <Text pb={2}><strong>Pick Time: </strong>{load.pickUpTime}</Text>
                                <Text pb={2}><strong>Drop Date: </strong>{load.dropOffDate}</Text>
                                <Text pb={2}><strong>Drop Time: </strong>{load.dropOffTime}</Text>
                                <Text pb={2}><strong>Additional Information:</strong></Text>
                                <Text pb={2}>{load.additionalInfo}</Text>
                                <Button
                                  onClick={() => handlePickLoad(load._id)}
                                  float={"right"} bg={"#0866FF"} color={"white"}
                                  _hover={{background: '#42B72A'}}
                                >
                                  Pick this Load
                                </Button>
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