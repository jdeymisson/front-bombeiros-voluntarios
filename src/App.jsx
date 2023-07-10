import { useState } from "react";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

function App() {
  const [openMenu, setOpenMenu] = useState(true);
  
  return(
    <Home 
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
    />
  );
};

export default App
