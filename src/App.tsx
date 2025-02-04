import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Counter from "./components/Counter";
import Auth from "./pages/Auth";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ position: "absolute", top: 20, left: 20 }}>
          <Counter />
        </Box>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
