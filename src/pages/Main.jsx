import {useRoutes} from "react-router-dom";
import SharedLayout from "../components/sharedLayout/SharedLayout";
import Home from '../pages/home/Home';
import Reservation from '../pages/reservation/Reservation';

const Main = () => {
  function PageRoute() {
    const router = useRoutes([
      {path: "/", element: <Home />},
      {path: "/reservation", element: <Reservation />},
    ]);
    return router;
  }

  return (
    <SharedLayout>
      <PageRoute/>
    </SharedLayout>
  )
}

export default Main