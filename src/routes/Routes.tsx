import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { PetPage } from "../pages/PetPage";

export const RoutesRender: React.FC = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<PetPage />} />
            </Routes>
        </BrowserRouter>
    );
}