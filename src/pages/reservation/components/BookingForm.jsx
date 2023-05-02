import { useState } from 'react';
import { FaExclamation } from 'react-icons/fa'
import { SuccessStatus, ErrorStatus } from './Status';
import restaurant from '../../../assets/restaurant.jpg';

const BookingForm = ({state, postReservationForm, getFilteredDate, status}) => {
    const [reservationData, setReservationData] = useState({
        full_name: "", email: "", phone: "", number_of_guests: "", date: "", time: "", occasion: ""
    })

    const disableBtn = (
        reservationData.full_name === "" || reservationData.email === "" || !reservationData.email.includes("@") || reservationData.phone === "" || reservationData.date === "" || reservationData.time === "" || reservationData.occasion === ""
    )

    const errorMsg = {
        full_name: "Required",
        email: "Required and must be a valid email",
        phone: "Required",
        number_of_guests: "Required, must be minimum of 1 and maximum of 12",
        date: "Required",
        time: "Required",
        occasion: "Required"
    }

    function handleChange(e){
        const {name, value} = e.target
        setReservationData({...reservationData, [name] : value})
    }

    function sendReservation(e) {
        e.preventDefault()
        postReservationForm(reservationData)
        setReservationData({
            full_name: "", email: "", phone: "", number_of_guests: "", date: "", time: "", occasion: ""
        })
    }

  return (
    <section className='reservation-form'>
        <form onSubmit={sendReservation}>
            <h4>Fill the form to make a reservation!</h4>
            <h6>All fields are required</h6>
            <fieldset>
                <legend>Contact</legend>
                <div className="form-control">
                    <label htmlFor="full_name">Full name</label>
                    <input type="text" name="full_name" id="full_name" value={reservationData.full_name} onChange={handleChange} required />
                    {reservationData.full_name === "" && <p className='error'><FaExclamation/>{errorMsg.full_name}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={reservationData.email} onChange={handleChange} required />
                    {(reservationData.email === "" || !reservationData.email.includes("@")) && <p className='error'><FaExclamation/>{errorMsg.email}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" name="phone" id="phone" value={reservationData.phone} onChange={handleChange} required />
                    {reservationData.phone === "" && <p className='error'><FaExclamation/>{errorMsg.phone}</p>}
                </div>
            </fieldset>
            <fieldset>
                <legend>Reservation</legend>
                <div className="form-control">
                    <label htmlFor="number_of_guests">Number of guests</label>
                    <input type="number" name="number_of_guests" id="number_of_guests" min="1" max="12" value={reservationData.number_of_guests} onChange={handleChange} />
                    {(reservationData.number_of_guests === "" || (1 < reservationData.number_of_guests && reservationData.number_of_guests > 12)) && <p className='error'><FaExclamation/>{errorMsg.number_of_guests}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" value={reservationData.date} onChange={handleChange} onSelect={() => getFilteredDate(reservationData.date)} required />
                    {reservationData.date === "" && <p className='error'><FaExclamation/>{errorMsg.date}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="time">Available time</label>
                    <select name="time" id="time" value={reservationData.time} onChange={handleChange}>
                        {state.availableTimes !== undefined && state.availableTimes?.map((availableTime, index)=>
                        <option key={index} value={availableTime}>{availableTime}</option>)}
                    </select>
                    {reservationData.time === "" && <p className='error'><FaExclamation/>{errorMsg.time}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="occasion">Select occasion</label>
                    <select name="occasion" id="occasion" value={reservationData.occasion} onChange={handleChange}>
                        <option value="">[Occasion]</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Others">Others</option>
                    </select>
                    {reservationData.occasion === "" && <p className='error'><FaExclamation/>{errorMsg.occasion}</p>}
                </div>
            </fieldset>
            <button type="submit" disabled={disableBtn} className='btn'>Make a Reservation</button>
        </form>
        <img src={restaurant} loading="lazy" className="banner-image" alt="" />

        {status.success && <SuccessStatus/>}
        {status.error && <ErrorStatus/>}
    </section>
  )
}

export default BookingForm