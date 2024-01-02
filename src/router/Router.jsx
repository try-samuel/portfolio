import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
