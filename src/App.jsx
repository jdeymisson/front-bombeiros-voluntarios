import { useState } from "react";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
function App() {
  const [openMenu, setOpenMenu] = useState(true);
  
  return(
    // <Home 
    //   openMenu={openMenu}
    //   setOpenMenu={setOpenMenu}
    // />
    <SignUp />
  );
};

export default App
