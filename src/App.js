import React, { useState } from "react";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core";
import HomePage from "./HomePage";

const useStyles = makeStyles({
  root: {},
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#c4302b",
      },
      secondary: {
        main: "#065fd4",
      },
      background: {
        default: darkMode ? "#232323" : "#FFF",
        dark: darkMode ? "#181818" : "#F4F6F8",
        paper: darkMode ? "#232323" : "#FFF",
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <HomePage darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}
export default App;
