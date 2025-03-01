import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import Body from "./src/components/Body";
import "./index.css";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./src/app/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}
