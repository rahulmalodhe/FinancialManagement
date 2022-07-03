import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "./Navigation";

import { NativeBaseProvider, Box, HStack, Button, Text, Input, Heading, Link, VStack, FormControl } from "native-base";

import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase"

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => { 
                const user = auth.user;
                console.log("user")
                navigate("/home") 
            })
            .catch(error => console.log(error))

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
               navigate("/home")
            }

        });

        return unsubscribe
    }, [])
    return (
        <NativeBaseProvider>
            <Box safeArea flex={1} p={2} w="30%" mx="auto" my="50px">
                <Heading size="lg" color="emerald.400">
                    Welcome
                </Heading>
                <Heading color="white" size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={2} mt={5}>
                    <FormControl>
                        <FormControl.Label _text={{
                            color: "white",
                            fontSize: "sm",
                            fontWeight: 600,
                        }}>
                            Email ID
                        </FormControl.Label>
                        <Input onChange={(event) => setEmail(event.target.value)} type="email" name="email" />
                    </FormControl>
                    <FormControl mb={5}>
                        <FormControl.Label _text={{
                            color: "white",
                            fontSize: "sm",
                            fontWeight: 600
                        }}>
                            Password
                        </FormControl.Label>
                        <Input onChange={(event) => setPassword(event.target.value)} type="password" />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "700",
                            color: "emerald.500"
                        }} alignSelf="flex-end" mt={1}>
                            Forget Password?
                        </Link>
                    </FormControl>
                    <VStack space={2}>
                        <Button onPress ={login} colorScheme="primary" variant="outline" _text={{
                            color: "white"
                        }}>
                            Login
                        </Button>
                    </VStack>
                    <HStack justifyContent="center">
                        <Text fontSize="sm" color="white" fontWeight={400}>
                            I'm a new user.{" "}
                        </Text>
                        <Link href="/" _text={{
                            color: "emarald.500",
                            bold: true,
                            fontSize: "sm"
                        }}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </NativeBaseProvider>

    );
}
