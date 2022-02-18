import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import CreateTripPage from "../Pages/CreateTripPage";

const Rotas = (props) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/List" element={<ListTripsPage tripsList={props.tripsList}/>} />

                <Route path="/AppForm" element={<ApplicationFormPage tripsList={props.tripsList} />} />

                <Route path="/Login" element={<LoginPage />} />

                <Route path="/Admin" element={<AdminHomePage tripsList={props.tripsList}/>}/>

                <Route path="/Trip" element={<TripDetailsPage/>}/>

                <Route path="/Create" element={<CreateTripPage/>}/>
                
                <Route element={<div>Página não encontrada!</div>} />

            </Routes>
        </Router>
    );
}
export default Rotas;