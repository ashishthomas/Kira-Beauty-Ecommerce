import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootRoutes } from "./routes/RootRoutes";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const router = createBrowserRouter([...RootRoutes]);
  const theme = createTheme({
    typography: {
      fontFamily: `'Arial', sans-serif`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
