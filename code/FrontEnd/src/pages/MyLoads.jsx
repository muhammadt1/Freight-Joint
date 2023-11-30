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

export default function MyLoads() {
  const [loads, setLoads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/MyLoads", { withCredentials: true })
      .then((response) => {
        setLoads(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching loads:", error);
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      });
  }, [navigate]);

//   const handlePickLoad = (loadID) => {
//     axios
//       .post(
//         "http://localhost:3001/pickload",
//         { loadID },
//         { withCredentials: true }
//       )
//       .then((response) => {
//         console.log("Load picked successfully");
//       })
//       .catch((error) => {
//         console.error("Error picking load:", error);
//       });
//   };

const handlePickLoad = (loadID) => {
  axios.delete(`http://localhost:3001/deleteload/${loadID}`, { withCredentials: true })
    .then(response => {
      console.log('Load deleted from marketplace successfully');
      setLoads(currentLoads => currentLoads.filter(load => load._id !== loadID));
    })
    .catch(error => {
      console.error('Error in the load deletion process:', error);
    });
};

  
  return (
    <>
      <Flex>
        <Navbar activePage="myLoads" />
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
                      <Tr key={load._id}>
                        <Td colSpan={4}>
                          <Accordion allowToggle width="100%">
                            <AccordionItem width="100%">
                              <h2>
                                <AccordionButton width="100%">
                                  <Box flex="1" textAlign="left">
                                    {load.loadDetails.pickUpLocation} -{" "}
                                    {load.loadDetails.dropOffLocation}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <Text pb={2}>
                                  <strong>Unit Requested: </strong>
                                  {load.loadDetails.selectedUnit}
                                </Text>
                                <Text pb={2}>
                                  <strong>Load Type: </strong>
                                  {load.loadDetails.selectedType}
                                </Text>
                                <Text pb={2}>
                                  <strong>Pick Date: </strong>
                                  {load.loadDetails.pickUpDate}
                                </Text>
                                <Text pb={2}>
                                  <strong>Pick Time: </strong>
                                  {load.loadDetails.pickUpTime}
                                </Text>
                                <Text pb={2}>
                                  <strong>Drop Date: </strong>
                                  {load.loadDetails.dropOffDate}
                                </Text>
                                <Text pb={2}>
                                  <strong>Drop Time: </strong>
                                  {load.loadDetails.dropOffTime}
                                </Text>
                                <Text pb={2}>
                                  <strong>Additional Information:</strong>
                                  {load.loadDetails.additionalInfo}
                                </Text>
                                <Button
                                  onClick={() => handlePickLoad(load._id)}
                                  float={"right"}
                                  bg={"#0866FF"}
                                  color={"white"}
                                  _hover={{ background: "#42B72A" }}
                                >
                                  Deliver
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
