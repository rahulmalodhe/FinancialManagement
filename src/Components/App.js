import React from "react";
import { NativeBaseProvider } from "native-base";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import SignUp from './Signup';
import Login from './Login';

export default function App() {
  return (
    <NativeBaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
    </NativeBaseProvider>
  );
}