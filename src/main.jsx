import React from "react"
import ReactDOM from "react-dom/client"
import theme from "./styles/theme.js"

import GlobalStyles from "../src/styles/globais.js";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { AuthProvider } from './hooks/authProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
