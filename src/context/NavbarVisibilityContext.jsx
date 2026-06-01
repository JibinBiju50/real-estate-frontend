import { useState } from "react";

import { NavbarVisibilityContext } from "./NavbarVisibilityContextCore";

export const NavbarVisibilityProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <NavbarVisibilityContext.Provider
            value={{ visible, setVisible }}
        >
            {children}
        </NavbarVisibilityContext.Provider>
    );
};
