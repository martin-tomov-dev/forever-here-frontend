import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import Layout from "./layouts";
import store from "./store";
import { themeConfig } from "./configs/themeConfig";
import { routeConfig } from "./configs/routeConfig";

const theme = createTheme(themeConfig);
const router = createBrowserRouter(routeConfig);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
