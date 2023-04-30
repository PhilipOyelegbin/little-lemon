import { useEffect, useReducer } from "react";
import { actions, initialState, reservationReducer } from "../../reducers/reservationResducer";
import BookingForm from "./components/BookingForm";
import './reservation.css'

const Reservation = () => {
  const [state, dispatch] = useReducer(reservationReducer, initialState)

  async function getReservation() {
    await fetch(`${process.env.REACT_APP_API_URL}/bookings`)
      .then(resp => resp.json())
      .then(data => dispatch({type: actions.getAllReservation, payload: data}))
  }

  async function postReservationForm(reservation) {
    await fetch(`${process.env.REACT_APP_API_URL}/bookings`, reservation)
      .then(resp => resp.json())
      .then(data => dispatch({type: actions.postReservation, payload: data}))
      .catch (error => console.log(error))
  }

  useEffect(() => {
    getReservation()
  }, [])

  return (
    <section className="reservation-section">
      <h2>Reservation</h2>
      <BookingForm state={state} dispatch={dispatch} postReservationForm={postReservationForm}/>
    </section>
  )
}

export default Reservation