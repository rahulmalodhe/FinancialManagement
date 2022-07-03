import React, { useEffect, useState } from "react";
import moment from "moment";
import { auth, db } from "../firebase";
import { getAuth } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import {
  Text,
  NativeBaseProvider,
  Badge,
  Box,
  Heading,
  ArrowForwardIcon,
  Row,
} from "native-base";

export default function MonthCard() {
  const [months, setMonths] = useState([]);
  const [found, setFound] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const month = moment().format("MMMM");

    const monthRef = collection(db, "month");
    console.log("This is month ref", monthRef);
    onSnapshot(monthRef, (snap) => {
      let months = [];
      snap.docs.forEach((doc) => {
        months.push({ ...doc.data(), id: doc.id });
      });
      setMonths(months);
      console.log("this is months", months);

      let found = months.some((el) => el.month === month);
      setFound(found);
    });
    console.log("found", found);
    if (!found) {
      createMonth();
    }
  }, [found]);

  // createMonth
  const createMonth = async () => {
    try {
      const docRef = await addDoc(collection(db, "month"), {
        month: moment().format("MMMM"),
        year: moment().format("YYYY"),
        day: moment().format("D"),
      });
      console.log("month with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding month: ", e);
    }
  };

  // function open investment screen
  const openInvestment = () => {
    console.log("investment screen ");
    navigate("/investments");
  };
  if (found) {
    const month = moment().format("MMMM");
    return (
      <NativeBaseProvider>
        <Box
          bg="emerald.600"
          p="12"
          rounded="lg"
          _text={{
            fontSize: "2xl",
            fontWeight: "medium",
            color: "warmGray.50",
            textAlign: "left",
          }}
          w="40rem"
          h="15rem"
          alignSelf={"center"}
        >
          <Box
            onClick={openInvestment}
            flex={1}
            flexDirection="row"
            justifyContent={"space-between"}
          >
            <Heading fontSize={"5xl"} color={"white"}>
              {month}
            </Heading>
            <ArrowForwardIcon
              color="white"
              strokeWidth={4}
              style={{
                cursor: "pointer",
                width: "20px",
                height: "20px",
                marginTop: "15px",
              }}
            />
          </Box>

          <Text
            position={"absolute"}
            bottom={"10"}
            fontSize={"md"}
            color={"white"}
          >
            Click here to View or edit your Personal finance
          </Text>
        </Box>
        ;
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <Text>This is the false page</Text>
      </NativeBaseProvider>
    );
  }
}
