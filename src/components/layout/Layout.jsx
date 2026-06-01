import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useNavbarVisibility } from "../../context/useNavbarVisibility"
import { ChatWidget } from "./ChatWidget"

export const Layout = () => {
    const {visible} = useNavbarVisibility();
    return(
        <>
        {visible && <Navbar />}
        <main>
            <Outlet />
        </main>
        <Footer />
        <ChatWidget />
        </>
    )
}
