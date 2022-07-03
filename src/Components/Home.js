import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import MonthCard from "./MonthCard";

import { useAuthState } from "react-firebase-hooks/auth";

import { NativeBaseProvider, Box, HStack, Button, Text, Container, Heading, Center } from "native-base";
import { auth } from "../firebase";

import image1 from "../images/bitmap.png"


export default function Home() {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    // signout functionality
    const signOutClick = () => {
        auth.signOut();
        navigate("/login");
    }
    return (
        <NativeBaseProvider>
            <Navigation />
            <Button alignSelf="flex-end" my={"-52px"} marginRight="15px" w={"100px"} onPress={signOutClick} size="sm" variant="outline" colorScheme="primary" _text={{ color: "emerald.500", fontSize: "14px" }}>Sign Out</Button>
            <Box marginBottom={"50px"}>
                <Heading fontSize="5xl" marginTop={"100px"} textAlign="center">
                    <Text color={"white"}>Welcome to<Text color="emerald.500"> Finance Management</Text></Text>
                </Heading>
                <Text m="10px" textAlign="center" color="white" fontSize={"xl"} > The one stop solution to your Personal Finance</Text>
            </Box>
            <MonthCard/>
            <Box>
                <Heading fontSize="4xl" textAlign="center" p="10">
                    <Text color={"white"}>About<Text color="emerald.500"> us</Text></Text>
                </Heading>
                <HStack space={2} justifyContent="space-evenly" marginTop={"20px"}>
                    <Center h="45%" w="45%" rounded="md" shadow={3}>
                        <img src={image1} width="100%" height="100%"/>
                    </Center>
                    <Center h="40" w="45%" rounded="md" shadow={3} marginTop="150px">
                        <Heading fontSize="4xl" textAlign="center" p={"10"}>
                            <Text color={"white"}>Track <Text color="emerald.500">Your Money</Text></Text>
                        </Heading>
                        <Text textAlign="center" fontSize={"xl"} color={"white"} lineHeight="2xl" width={"80%"}>If you don’t know where your money is going, how can you manage your money? While planning and budgeting is important, unless you are aware of your income and expenses you will still not be able to effectively manage your finances. Save your money and manage all your expenses easily</Text>
                    </Center>
                </HStack>;

                <HStack space={2} justifyContent="space-evenly" marginTop={"50px"}>
                    <Center h="40" w="45%" rounded="md" shadow={3} marginTop="150px">
                        <Heading fontSize="4xl" textAlign="center" p={"10"}>
                            <Text color={"white"}>Track <Text color="emerald.500">Your Money</Text></Text>
                        </Heading>
                        <Text textAlign="center" fontSize={"xl"} color={"white"} lineHeight="2xl" width={"80%"}>If you don’t know where your money is going, how can you manage your money? While planning and budgeting is important, unless you are aware of your income and expenses you will still not be able to effectively manage your finances. Save your money and manage all your expenses easily</Text>
                    </Center>
                    <Center h="45%" w="45%" rounded="md" shadow={3}>
                        <img src={image1} width="100%" height="100%"/>
                    </Center>
                </HStack>;

                <HStack space={2} justifyContent="space-evenly" marginTop={"50px"}>
                    <Center h="45%" w="45%" rounded="md" shadow={3}>
                        <img src={image1} width="100%" height="100%"/>
                    </Center>
                    <Center h="40" w="45%" rounded="md" shadow={3} marginTop="150px">
                        <Heading fontSize="4xl" textAlign="center" p={"10"}>
                            <Text color={"white"}>Track <Text color="emerald.500">Your Money</Text></Text>
                        </Heading>
                        <Text textAlign="center" fontSize={"xl"} color={"white"} lineHeight="2xl" width={"80%"}>If you don’t know where your money is going, how can you manage your money? While planning and budgeting is important, unless you are aware of your income and expenses you will still not be able to effectively manage your finances. Save your money and manage all your expenses easily</Text>
                    </Center>
                </HStack>;
            </Box>
        </NativeBaseProvider>
    );
}
