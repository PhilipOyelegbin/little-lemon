import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../api";
import BookingForm from "./components/BookingForm";
import './reservation.css'

const updateTimes = fetchAPI(new Date())

function availableTimes(state, action) {
  if(action.type === updateTimes) {
    return updateTimes
  }
  return state;
}

const Reservation = () => {
  const initializeTimes = []

  const [state, dispatch] = useReducer(availableTimes, initializeTimes)

  return (
    <section className="reservation-section">
      <h2>Reservation</h2>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} state={state} dispatch={dispatch} submitData={submitAPI}/>
    </section>
  )
}

export default Reservation