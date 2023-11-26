import Navbar from "../components/DashboardNavBar/ShipperNavBar/ShipperNavBar";
import axios from "axios";
import {
  Card,
  Input,
  Stack,
  HStack,
  VStack,
  SimpleGrid,
  Radio,
  RadioGroup,
  Button,
  Textarea,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function PostLoad() {
  const [formData, setFormData] = useState({
    selectedUnit: "Dry Van",
    selectedType: "LTL",
    pickUpLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    dropOffLocation: "",
  });

  const handleInputChange = (event, name = null) => {
    let value;
    if (name) {
      value = event;
    } else {
      ({ name, value } = event.target);
    }
    setFormData({ ...formData, [name]: value });
  };
  

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
    setFormData({ ...formData, additionalDocuments: selectedFile });
  };

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const result = await axios.post("http://localhost:3001/postload", {
            selectedUnit: formData.selectedUnit,
            selectedType: formData.selectedType,
            pickUpLocation: formData.pickUpLocation,
            pickUpDate: formData.pickUpDate,
            pickUpTime: formData.pickUpTime,
            dropOffDate: formData.dropOffDate,
            dropOffTime: formData.dropOffTime,
            dropOffLocation: formData.dropOffLocation,
        });

        console.log(result);

        if (result.data === "Already registered") {
            alert("Load is already posted");
        } else {
            alert("Posted Successfully");
        }
    } catch (err) {
        console.error(err);
    }
};
  return (
    <>
      <Flex>
        <Navbar activePage="postLoad" />
        <Flex flex={1} justifyContent="center">
          <VStack mt={10}>
            <Text fontSize={25} fontWeight={"1000"} mt={2}>
              Post a Load
            </Text>
            <Card
              width="100%"
              mb={20}
              alignItems={"center"}
              maxWidth={1500}
              justifyContent={"center"}
              p={10}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Stack>
                    <Text fontWeight={"500"}>Pick Up Location</Text>
                    <Input
                      type="text"
                      name="pickUpLocation"
                      value={formData.pickUpLocation}
                      onChange={handleInputChange}
                    />
                  </Stack>

                  <HStack>
                    <SimpleGrid columns={4} spacing={4}>
                      <Stack>
                        <Text fontWeight={"500"}>Pick Up Date</Text>
                        <Input
                          placeholder="Select Date and Time"
                          size="md"
                          type="date"
                          name="pickUpDate"
                          value={formData.pickUpDate}
                          onChange={handleInputChange}
                        />
                      </Stack>

                      <Stack>
                        <Text fontWeight={"500"}>Pick Up Time</Text>
                        <Input
                          placeholder="Select Date and Time"
                          size="md"
                          type="time"
                          name="pickUpTime"
                          value={formData.pickUpTime}
                          onChange={handleInputChange}
                        />
                      </Stack>
                      <Stack>
                        <Text fontWeight={"500"}>Drop off Date</Text>
                        <Input
                          placeholder="Select Date and Time"
                          size="md"
                          type="date"
                          name="dropOffDate"
                          value={formData.dropOffDate}
                          onChange={handleInputChange}
                        />
                      </Stack>

                      <Stack>
                        <Text fontWeight={"500"}>Drop off Time</Text>
                        <Input
                          placeholder="Select Date and Time"
                          size="md"
                          type="time"
                          name="dropOffTime"
                          value={formData.dropOffTime}
                          onChange={handleInputChange}
                        />
                      </Stack>
                    </SimpleGrid>
                  </HStack>

                  <Stack>
                    <Text fontWeight={"500"}>Drop Off Location</Text>
                    <Input
                      type="text"
                      name="dropOffLocation"
                      value={formData.dropOffLocation}
                      onChange={handleInputChange}
                    />
                  </Stack>

                  <Stack>
                    <Text fontWeight={"500"}>Unit Requested</Text>
                    <RadioGroup
                      name="selectedUnit"
                      value={formData.selectedUnit}
                      onChange={(value) => handleInputChange(value, 'selectedUnit')}
                    >
                      <SimpleGrid columns={4} spacing={4}>
                        <Radio colorScheme="blue" value="Dry Van">
                          Dry Van
                        </Radio>
                        <Radio colorScheme="blue" value="Flat Bed">
                          Flat Bed
                        </Radio>
                        <Radio colorScheme="blue" value="Reefer">
                          Reefer
                        </Radio>
                        <Radio colorScheme="blue" value="Low Boy">
                          Low Boy
                        </Radio>
                        <Radio colorScheme="blue" value="Step Deck">
                          Step Deck
                        </Radio>
                        <Radio colorScheme="blue" value="Tank">
                          Tank
                        </Radio>
                        <Radio colorScheme="blue" value="Conestega">
                          Conestega
                        </Radio>
                        <Radio colorScheme="blue" value="Double Drop">
                          Double Drop
                        </Radio>
                        <Radio colorScheme="blue" value="Car Carriers">
                          Car Carriers
                        </Radio>
                        <Radio colorScheme="blue" value="Side kit">
                          Side kit
                        </Radio>
                        <Radio colorScheme="blue" value="Dump">
                          Dump
                        </Radio>
                        <Radio colorScheme="blue" value="Live Floor">
                          Live Floor
                        </Radio>
                        <Radio colorScheme="blue" value="End Dump">
                          End Dump
                        </Radio>
                        <Radio colorScheme="blue" value="Side Dump">
                          Side Dump
                        </Radio>
                        <Radio colorScheme="blue" value="OverLoad">
                          OverLoad
                        </Radio>
                        <Radio colorScheme="blue" value="Rocky Mountain">
                          Rocky Mountain
                        </Radio>
                        <Radio colorScheme="blue" value="Twinpike">
                          Twinpike
                        </Radio>
                        <Radio colorScheme="blue" value="LHV">
                          LHV
                        </Radio>
                        <Radio colorScheme="blue" value="Super V">
                          Super V
                        </Radio>
                      </SimpleGrid>
                    </RadioGroup>
                  </Stack>

                  <Stack>
                    <Text fontWeight={"500"}>Type of Load</Text>
                    <RadioGroup
                      name="selectedType"
                      value={formData.selectedType}
                      onChange={(value) => handleInputChange(value, "selectedType")}
                    >
                      <SimpleGrid columns={4} spacing={0}>
                        <Radio colorScheme="blue" value="LTL">
                          LTL
                        </Radio>
                        <Radio colorScheme="blue" value="Full Load">
                          Full Load
                        </Radio>
                      </SimpleGrid>
                    </RadioGroup>
                  </Stack>

                  <Stack>
                    <Text fontWeight={"500"}>Additional Information</Text>
                    <Textarea
                      type="text"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                    />
                  </Stack>
                  <HStack mt={4}></HStack>
                </Stack>
                <Button
                  type="submit"
                  bg="#0866FF"
                  color={"white"}
                  size="md"
                  _hover={{ bg: "#42B72A" }}
                >
                  Submit
                </Button>
              </form>
            </Card>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}