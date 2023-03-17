import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import SharedLayout from "../components/sharedLayout/SharedLayout";
import Home from './home/Home';
import Reservation from './reservation/Reservation';
import About from "./about/About";
import Menu from "./menu/Menu";
import Login from "./login/Login";

const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="reservation" element={<Reservation/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default Main