import React from "react";
import { NativeBaseProvider, Box, HStack, Text, Container,Heading} from "native-base";

export default function Navigation() {
    return (
        <NativeBaseProvider>
            <HStack flex={1} p={5} justifyContent="space-between" bg="gray.800" position="sticky">
                <Container>
                    <Heading fontSize="20cpx">
                       <Box _text=
                       {{ color:"white" }}>Financial</Box>
                        <Text color="emerald.500"> Management</Text>
                    </Heading>
                </Container>
            </HStack>
        </NativeBaseProvider>
    );
}
