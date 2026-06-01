import { useContext } from "react";

import { NavbarVisibilityContext } from "./NavbarVisibilityContextCore";

export const useNavbarVisibility = () => useContext(NavbarVisibilityContext);
