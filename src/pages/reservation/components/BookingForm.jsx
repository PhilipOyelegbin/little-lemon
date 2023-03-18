import { useState } from 'react';
import restaurant from '../../../assets/restaurant.jpg';

const BookingForm = ({availableTimes, state, dispatch}) => {
    const [reservationData, setReservationData] = useState({
        full_name: "", email: "", phone_number: "", guest: "", res_date: "", res_time: "", occasion: ""
    })

    const disableBtn = (
        reservationData.full_name === "" || reservationData.email === "" || !reservationData.email.includes("@") || reservationData.phone_number === "" || reservationData.res_date === "" || reservationData.res_time === "" || reservationData.occasion === ""
    )

    function handleChange(e){
        const {name, value} = e.target
        setReservationData({...reservationData, [name] : value})
    }

    function sendReservation(e) {
        e.preventDefault()
        console.log(reservationData);
        setReservationData({
            full_name: "", email: "", phone_number: "", guest: "", res_date: "", res_time: "", occasion: ""
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
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" value={reservationData.full_name} onChange={handleChange} required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={reservationData.email} onChange={handleChange} required />
                </div>
                <div className="form-control">
                    <label htmlFor="phone_number">Phone number</label>
                    <input type="tel" name="phone_number" id="phone_number" value={reservationData.phone_number} onChange={handleChange} required />
                </div>
            </fieldset>
            <fieldset>
                <legend>Reservation</legend>
                <div className="form-control">
                    <label htmlFor="guest">Number of guests</label>
                    <input type="number" name="guest" id="guest" min="0" max="12" value={reservationData.guest} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="res_date">Date</label>
                    <input type="date" name="res_date" id="res_date" value={reservationData.res_date} onChange={handleChange} onClick={()=> dispatch({type: "date"})} required />
                </div>
                <div className="form-control">
                    <label htmlFor="res_time">Time</label>
                    <select name="res_time" id="res_time" value={reservationData.res_time} onChange={handleChange}>
                        {state && state?.map((time, index)=>
                        <option key={index} value="">{time}</option>)}
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="purpose">Select Occasion</label>
                    <select name="occasion" id="occasion" value={reservationData.occasion} onChange={handleChange}>
                        <option value="">Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </fieldset>
            <button type="submit" disabled={disableBtn} className='btn'>Make a Reservation</button>
        </form>
        <img src={restaurant} loading="lazy" className="banner-image" alt="" />
    </section>
  )
}

export default BookingForm