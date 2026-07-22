import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import Home from "../pages/Home";
import AvaNewsPage from "../pages/AvaResidence";
import { Test } from "../pages/Test";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/news/ava-at-palm-jumeirah" element={<AvaNewsPage />} />
            <Route path="/test" element={<Test />} />
            </Route>
        </Routes>
    )
} 
