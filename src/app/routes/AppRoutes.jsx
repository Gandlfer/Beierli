import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import Layout from "./Layout";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}