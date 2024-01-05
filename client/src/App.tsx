import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';
import { MainLayout } from "./layout";
import { mainClient } from "./utilities/client";
import { BASE_API_ENDPOINT } from "./utilities/config";
import { routes } from './utilities/routes';

const router = createBrowserRouter([
  {
    // parent route component
    element: <MainLayout />,
    // child route components
    children: [
      ...routes.map((route) => ({
        path: route.path,
        Component: route.Component,

      }))
    ],
  },
]);

function App() {
  useEffect(() => {
    // This is to kickstart the server in case it is sleeping due to an unpaid plan
    mainClient.get(BASE_API_ENDPOINT)
      .catch(() => { })
    scroll();
  }, []);


  return (
    <div className="">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  )
}

export default App
