import { useState } from "react";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Providers } from "./pages/Providers";
import { Releases } from "./pages/Releases";
function App() {
  const [openMenu, setOpenMenu] = useState(true);
  
  return(
    <Home  
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
    />
    // <Releases
    //   openMenu={openMenu}
    //   setOpenMenu={setOpenMenu}
    //  />
  );
};

export default App
