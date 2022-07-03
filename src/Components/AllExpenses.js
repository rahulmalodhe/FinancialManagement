import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import {
  NativeBaseProvider,
  Center,
  ScrollView,
  Text,
  Input,
  HStack,
  FlatList,
  Pressable,
  Button,
  Box,
  Heading,
} from "native-base";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

export default function AllExpenses() {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [desc, setDesc] = useState(0);

  const addExpense = () => {
    navigate("/addExpense");
  };

  const allExpense = () => {
    navigate("/allExpense");
  };

  useEffect(() => {
    const q = query(collection(db, "expenses"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let expenses = [];
      querySnapshot.forEach((doc) => {
        expenses.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expenses);
    });
    return () => unsub();
  }, []);
  const toggleComplete = async (expenses) => {
    await updateDoc(doc(db, "expenses", expenses.id), {});
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "expenses", id));
  };

  const renderItem = () => {
    return (
      <Pressable
        p={5}
        m={2}
        backgroundColor={"green.50"}
        borderRadius={20}
        style={{
          shadowColor: "#1AA37A",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <Text>{expenses}</Text>
      </Pressable>
    );
  };

  return (
    <NativeBaseProvider>
      <Navigation />
      <Heading fontSize="5xl" textAlign="center" p={"10"}>
        <Text color={"white"}>
          All Your <Text color="emerald.500">Expenses</Text>
        </Text>
      </Heading>
      <Button
        mx={"auto"}
        bg={"emerald.500"}
        _text={{ color: "white" }}
        name="Press"
        onPress={addExpense}
        w={500}
        textAlign={"center"}
      >
        Enter
      </Button>
      <Pressable
        p={5}
        m={2}
        backgroundColor={"green.50"}
        borderRadius={20}
        style={{
          shadowColor: "#1AA37A",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <Text>{expenses}</Text>
      </Pressable>

      <Box flex={1} m={5}>
        <Heading>Your Expenses</Heading>

        <Button
          mt="5"
          backgroundColor="#1AA37A"
          _text={{ color: "black" }}
          name="Press"
          onPress={() => navigate("/addExpense")}
          w={{
            base: "55%",
            md: "25%",
          }}
        >
          {" "}
          Add
        </Button>
      </Box>
      <FlatList
        mt={2}
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(e) => e.id}
      />
    </NativeBaseProvider>
  );
}
