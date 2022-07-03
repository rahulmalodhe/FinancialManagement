import React from "react";
import {
  Box,
  NativeBaseProvider,
  ZStack,
  Center,
  Button,
  HStack,
} from "native-base";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

import Report from "./Report";

export default function Investments() {
  return (
    <NativeBaseProvider>
      <Navigation />
      <Box>
        <HStack space={2} mt={"-53px"} alignSelf="center">
          <Button colorScheme="emerald" variant="link">
            Add expenses
          </Button>
          <Button colorScheme="emerald" variant="link">
            Investments
          </Button>
          <Button colorScheme="emerald" variant="link">
            See Report
          </Button>
        </HStack>
        <Report header={"Add Salary"} description={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem"}/>
      </Box>
    </NativeBaseProvider>
  );
}
