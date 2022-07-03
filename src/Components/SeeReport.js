import React from "react";
import { useState, useEffect} from "react";
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
  Alert,
} from "native-base";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

export default function SeeReport() {
  const [amt, setAmt] = useState([]);

  useEffect(() => {
    const amt = JSON.parse(localStorage.getItem("salary"));
    if (amt) {
      setAmt(amt);
    }
  }, []);
  return (
    <NativeBaseProvider>
        <Box>
            <Text my="20px" fontWeight="600" alignSelf= "center" fontSize="5xl" color={"emerald.400"}>Report Card</Text>
        </Box>
      <Box w="95%" bg="#242B2E" borderRadius={"lg"} alignSelf="center" p="10">
        <Text fontSize={"xl"} color={"white"}> Your salary for the current month is <Text position={"absolute"} right="60px" color="emerald.400">{amt}</Text></Text>
      </Box>
        
    </NativeBaseProvider>
  );
}
