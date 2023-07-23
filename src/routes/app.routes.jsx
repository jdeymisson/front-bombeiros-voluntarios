import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";
import { Providers } from "../pages/Providers";
import { Releases } from "../pages/Releases";

export const AppRoutes = () => {
    const [openMenu, setOpenMenu] = useState(true);
    return(
    <Routes>
        <Route path="/" element={<Home
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
        />} />
        <Route path="/users" element={<Users
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
        />} />
        <Route path="/providers" element={<Providers
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
        />} />
        <Route path="/releases" element={<Releases
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
        />} />
    </Routes>
    );
};