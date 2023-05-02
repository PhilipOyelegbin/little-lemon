import { useEffect, useReducer, useState } from "react";
import { actions, initialState, reservationReducer } from "../../reducers/reservationResducer";
import BookingForm from "./components/BookingForm";
import './reservation.css'

const Reservation = () => {
  const [state, dispatch] = useReducer(reservationReducer, initialState)
  const [status, setStatus] = useState({success: false, error: false})


  async function getReservation() {
    await fetch(`${process.env.REACT_APP_API_URL}/bookings`)
      .then(resp => resp.json())
      .then(data => dispatch({type: actions.getAllReservation, payload: data}))
  }

  async function postReservationForm(reservation) {
    await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)})
      .then(resp => resp.json())
      .then(data => {
        dispatch({type: actions.postReservation, payload: data})
        let sec = 10;
        let timer = setInterval(function(){
          setStatus({success: true})
          sec--;
          if(sec < 0) {
            setStatus({success: false})
            clearInterval(timer);
          }
        }, 1000);
      })
      .catch(error => {
        let sec = 10;
        let timer = setInterval(function(){
          setStatus({error: true})
          sec--;
          if(sec < 0) {
            setStatus({error: false})
            clearInterval(timer);
          }
        }, 1000);
      })
  }

  async function getFilteredDate(date) {
    await fetch(`${process.env.REACT_APP_API_URL}/bookings`)
      .then(resp => resp.json())
      .then(data => {
        const filtered = data?.filter(booked => {return booked.date === date})?.map(bookings => {return bookings.time})
        const openHours = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7]
        let timeStamp = openHours?.filter(timeList => !filtered.includes(timeList))
        dispatch({type: actions.updateTime, payload: timeStamp})
      })
  }

  useEffect(() => {
    getReservation()
  }, [])

  return (
    <section className="reservation-section">
      <h2>Reservation</h2>
      <BookingForm state={state} dispatch={dispatch} postReservationForm={postReservationForm} getFilteredDate={getFilteredDate} status={status}/>
    </section>
  )
}

export default Reservation