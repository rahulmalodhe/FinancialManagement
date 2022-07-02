import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import moment from 'moment';

import Navigation from "./Navigation";
import { NativeBaseProvider, Box, HStack, Button, Text, Container, Heading } from "native-base";
import { auth } from "../firebase";


export default function Home() {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const month = moment().format("MMMM")

    // signout functionality
    const signOutClick = () => {
        auth.signOut();
        navigate("/login");
    }
    return (
        <NativeBaseProvider>
            <Navigation />
            <Button alignSelf="flex-end" my={"-52px"} marginRight="15px" w={"100px"} onPress={signOutClick} size="sm" variant="outline" colorScheme="primary" _text={{ color: "emerald.500", fontSize: "14px" }}>Sign Out</Button>
            <Box>
                <Heading fontSize="5xl" my={"100px"} textAlign="center">
                    <Text color="emerald.500">Welcome<Text color={"white"}> to Finance Management</Text>{user?.email}</Text>
                </Heading>
            </Box>
            <Text color={"white"}>{month} this is the current month </Text>
        </NativeBaseProvider>
    );
}
