import restaurant from '../../../assets/restaurant.jpg';

const BookingForm = ({availableTimes, state, dispatch}) => {
  return (
    <section className='reservation-form'>
        <form >
            <h4>Fill the form to make a reservation!</h4>
            <h6>All fields are required</h6>
            <fieldset>
                <legend>Contact</legend>
                <div className="form-control">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="phone_number">Phone number</label>
                    <input type="tel" name="phone_number" id="phone_number" />
                </div>
            </fieldset>
            <fieldset>
                <legend>Reservation</legend>
                <div className="form-control">
                    <label htmlFor="guest">Number of guests</label>
                    <input type="number" name="guest" id="guest" min="1" max="12" />
                </div>
                <div className="form-control">
                    <label htmlFor="res-date">Date</label>
                    <input type="date" name="res-date" id="res-date" onClick={()=> dispatch({type: "date"})}/>
                </div>
                <div className="form-control">
                    <label htmlFor="res-time">Time</label>
                    <select name="time" id="res-time">
                        {state && state?.map((time, index)=>
                        <option value="" key={index}>{time}</option>)}
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="">Select Occasion</label>
                    <select name="" id="">
                        <option value="">Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
            </fieldset>
            <button type="submit" className='btn'>Make a Reservation</button>
        </form>
        <img src={restaurant} loading="lazy" className="banner-image" alt="" />
    </section>
  )
}

export default BookingForm