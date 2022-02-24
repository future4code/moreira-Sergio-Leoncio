import React from "react";
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpLogin from "../pages/SignUpLogin/SignUpLogin";
import ListPost from "../pages/ListPost/ListPost";
import FeedPost from "../pages/FeedPost/FeedPost";
import ErrPage from "../pages/ErrPage/ErrPage";


const Rotas = ({setRightButtonText}) => {
    return (       
           
            <Routes>
                <Route path="/" element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
                <Route path="/Cadastro" element={<SignUpLogin setRightButtonText={setRightButtonText}/>}/>
                <Route path="/Inicio" element={<FeedPost/>}/>
                <Route path="/Lista" element={<ListPost/>}/>
                <Route path="*" element={<ErrPage/>}/>
            </Routes>
        
    )
}

export default Rotas