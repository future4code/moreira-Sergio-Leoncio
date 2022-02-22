import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpLogin from "../pages/SignUpLogin/SignUpLogin";
import ListPost from "../pages/ListPost/ListPost";
import FeedPost from "../pages/FeedPost/FeedPost";
import ErrPage from "../pages/ErrPage/ErrPage";
import Header from "../components/Header/Header";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/Cadastro" element={<SignUpLogin/>}/>
                <Route path="/Inicio" element={<FeedPost/>}/>
                <Route path="/Lista" element={<ListPost/>}/>
                <Route path="*" element={<ErrPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas