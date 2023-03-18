import { useEffect, useReducer } from "react";
import BookingForm from "./components/BookingForm";
import './reservation.css'

function availableTimes(state, action) {
  if(action.type === "date") {return state}
  return state;
}

const Reservation = () => {
  const initializeTimes = []
  // const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]

  const [state, dispatch] = useReducer(availableTimes, initializeTimes)

  function updateTimes() {
    return state
  }

  useEffect(() => {
    fetch(document.getElementsByName("script").keys("src"))
  .then(resp => console.log(resp))
  }, [])

  return (
    <section className="reservation-section">
      <h2>Reservation</h2>
      <BookingForm availableTimes={availableTimes} state={state} dispatch={dispatch}/>
    </section>
  )
}

export default Reservation