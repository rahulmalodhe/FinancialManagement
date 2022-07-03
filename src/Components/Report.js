import React from "react";
import { useState } from "react";
import {
  Box,
  NativeBaseProvider,
  Text,
  Stack,
  Input,
  HStack,
  Heading,
  Button,
  FormControl,
  InputRightElement,
} from "native-base";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Report = ({ header, description }) => {
  const [salary, setSalary] = useState("");
  const [show, setShow] = React.useState(false);

  const handleClickSave = () => {
    
  }
  return (
    <NativeBaseProvider>
      <Box m={"10"} alignSelf="center">
        <HStack>
          <Box
            bg="emerald.700"
            size="600"
            rounded="lg"
            shadow={3}
            width="95vw"
            color={"white"}
            fontSize="5xl"
            p={30}
          >
            <Heading color={"white"} fontSize="4xl" p={30}>
              {header}
            </Heading>

            <Text color={"white"} fontSize="xl" p={30}>
              {description}
            </Text>

            <Stack space={5} w="75%" p={30} position={"absolute"} bottom={10}>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "white",
                    fontSize: "2xl",
                    fontWeight: 600,
                  }}
                >
                  Enter your salary in INR
                </FormControl.Label>
                <Box alignItems="flex-start" my={"5"}>
                  <Input
                    type="text"
                    w="100%"
                    maxW="300px"
                    py="0"
                    rounded="lg"
                    bgColor={"white"}
                    InputRightElement={
                      <Button
                        size="md"
                        rounded="none"
                        w="1/6"
                        h="full"
                        onPress={handleClickSave}
                      >
                        Save
                      </Button>
                    }
                    placeholder="Enter Salary"
                    onChange={(event)=>{setSalary(event.target.value)}}
                  />
                </Box>
    
              </FormControl>
            </Stack>
          </Box>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};
export default Report;
