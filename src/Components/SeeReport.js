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
      <Box >
        <Text color={"white"}> Your salary is <Text color="emerald.400">{amt}</Text></Text>
      </Box>
        
    </NativeBaseProvider>
  );
}
