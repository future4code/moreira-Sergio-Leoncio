import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Router, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/List/" element={<ListTripsPage />} />

                <Route path="/AppForm" element={<ApplicationFormPage />} />

                <Route path="/Login" element={<LoginPage />} />

                <Route element={<div>Página não encontrada!</div>} />

            </Routes>
        </Router>
    );
}
export default Rotas;