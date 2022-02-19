import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CatPage } from "../pages/CatPage";
import { DogPage } from "../pages/DogPage";
import { Home } from "../pages/Home";

export const RoutesRender: React.FC = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cats" element={<CatPage />} />
                <Route path="/dogs" element={<DogPage />} />
            </Routes>
        </BrowserRouter>
    );
}