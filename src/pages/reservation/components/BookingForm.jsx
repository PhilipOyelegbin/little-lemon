import { useState } from 'react';
import { FaExclamation } from 'react-icons/fa'
import restaurant from '../../../assets/restaurant.jpg';
import Status from './Status';

const BookingForm = ({state, postReservationForm}) => {
    const [reservationData, setReservationData] = useState({
        full_name: "", email: "", phone_number: "", guest: "", res_date: new Date().getDate(), res_time: "", occasion: ""
    })

    console.log(reservationData);

    const [status, setStatus] = useState(false)

    const disableBtn = (
        reservationData.full_name === "" || reservationData.email === "" || !reservationData.email.includes("@") || reservationData.phone_number === "" || reservationData.res_date === "" || reservationData.res_time === "" || reservationData.occasion === ""
    )

    const errorMsg = {
        full_name: "Required",
        email: "Required and must be a valid email",
        phone_number: "Required",
        guest: "Required, must be minimum of 1 and maximum of 12",
        res_date: "Required",
        res_time: "Required",
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
            full_name: "", email: "", phone_number: "", guest: "", res_date: "", res_time: "", occasion: ""
        })
        var sec = 10;
        var timer = setInterval(function(){
            setStatus(true)
            sec--;
            if (sec < 0) {
                setStatus(false)
                clearInterval(timer);
            }
        }, 1000);
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
                    <label htmlFor="phone_number">Phone number</label>
                    <input type="tel" name="phone_number" id="phone_number" value={reservationData.phone_number} onChange={handleChange} required />
                    {reservationData.phone_number === "" && <p className='error'><FaExclamation/>{errorMsg.phone_number}</p>}
                </div>
            </fieldset>
            <fieldset>
                <legend>Reservation</legend>
                <div className="form-control">
                    <label htmlFor="guest">Number of guests</label>
                    <input type="number" name="guest" id="guest" min="1" max="12" value={reservationData.guest} onChange={handleChange} />
                    {(reservationData.guest === "" || (1 < reservationData.guest && reservationData.guest > 12)) && <p className='error'><FaExclamation/>{errorMsg.guest}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="res_date">Date</label>
                    <input type="date" name="res_date" id="res_date" value={reservationData.res_date} onChange={handleChange} required />
                    {reservationData.res_date === "" && <p className='error'><FaExclamation/>{errorMsg.res_date}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="res_time">Time</label>
                    <select name="res_time" id="res_time" value={reservationData.res_time} onChange={handleChange}>
                        {state.length > 0 && state?.map((reservation, index)=>
                        <option key={index} value={reservation.time}>{reservation.time}</option>)}
                    </select>
                    {reservationData.res_time === "" && <p className='error'><FaExclamation/>{errorMsg.res_time}</p>}
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

        {status && <Status/>}
    </section>
  )
}

export default BookingForm