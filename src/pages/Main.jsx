import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import SharedLayout from "../components/sharedLayout/SharedLayout";
import Home from '../pages/home/Home';
import Reservation from '../pages/reservation/Reservation';

const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="reservation" element={<Reservation/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default Main