import { lazy, Suspense } from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import SharedLayout from "../components/sharedLayout/SharedLayout";

const Home = lazy(() => import("./home/Home"))
const Reservation = lazy(() => import("./reservation/Reservation"))
const About = lazy(() => import("./about/About"))
const Menu = lazy(() => import("./menu/Menu"))

const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="reservation" element={<Reservation/>}/>
      </Route>
    )
  );

  return (
    <Suspense fallback={<h1 className="loader">Please wait...</h1>}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default Main