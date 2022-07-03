import React from "react";
import { NativeBaseProvider } from "native-base";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import SignUp from './Signup';
import Login from './Login';
import Investments from './Investments'
import SeeReport from "./SeeReport";
import AddExpenses from "./AddExpenses";
import AllExpenses from "./AllExpenses";

export default function App() {
  return (
    <NativeBaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/investments" element={<Investments />}></Route>
            <Route path="/report" element={<SeeReport />}></Route>
            <Route path="/allExpense" element={<AllExpenses />}></Route>

            <Route path="/addExpense" element={<AddExpenses />}></Route>




          </Routes>
        </BrowserRouter>
    </NativeBaseProvider>
  );
}