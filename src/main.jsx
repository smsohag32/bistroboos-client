import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </>
);
