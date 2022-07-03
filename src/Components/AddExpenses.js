import React, { useState, useCallback } from "react";
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { Heading, Center, ScrollView, Text, Input, HStack, FlatList, Pressable, Button, Box, NativeBaseProvider } from 'native-base'
import { auth, db } from '../firebase'
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

export default function AddExpenses() {
    const [expenses, setExpenses] = useState('')
    const [desc, setDesc] = useState('')
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        if (!expenses || !desc) {
            return alert('Please add amount and desc')

        }
        await addDoc(collection(db, "expenses"), {
            expenses,
            desc,
            createdAt: new Date(),
            completed: false,
        });
        navigate('/allExpense')
    };

    return (
        <NativeBaseProvider>
            <Navigation />
            <Heading fontSize="5xl" textAlign="center" p={"10"}>
                <Text color={"white"}>Add Your <Text color="emerald.500">Expenses</Text></Text>
            </Heading>
            <Box flex={1} m={5} mx={"auto"}>
                <Input my={5}
                    borderColor='white'
                    keyboardType='numeric'
                    h="50px"
                    placeholderTextColor='white'
                    onChangeText={(text) => setExpenses(text)}
                    w={"450px"}
                    placeholder="Amount" value={expenses} />
                <Input my={5}
                    onChangeText={(text) => setDesc(text)}
                    borderColor='white'
                    h="50"
                    placeholderTextColor='white'
                    value={desc}
                    w={"450px"}
                    onSubmitEditing={() => { }}

                    placeholder="Description" />
                <Button my={5} bg={"emerald.400"}
                    _text={{ color: 'white' }}
                    name='Press' onPress={handleSubmit} w={{
                        base: "55%",
                        md: "25%"

                    }}> Enter</Button>

            </Box>

        </NativeBaseProvider>
    );

}