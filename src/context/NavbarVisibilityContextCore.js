import { createContext, useContext } from "react";

export const NavbarVisibilityContext = createContext(null);
export const useNavbarVisibility = () => useContext(NavbarVisibilityContext);