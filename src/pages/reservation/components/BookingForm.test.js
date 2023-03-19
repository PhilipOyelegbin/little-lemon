import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"

test('Heading is present, all input field are required, time input field is empty, time input field is updated, sendReservation has not been called and submit button is disabled', () => {
    const sendReservation = jest.fn();
    render(<BookingForm onSubmit={sendReservation} />);

    // heading test
    const headingElement = screen.getByText("All fields are required");

    expect(headingElement).toBeInTheDocument();

    // validation test
    const formValidation = screen.getByLabelText("Full name", "Email", "Phone number", "Number of guests", "Date", "Time", "Select occasion");

    expect(formValidation).toBeRequired()

    // initial time and update time test
    const initialTimesElement = screen.getByLabelText("Time");
    fireEvent.change(initialTimesElement, {target: {value: []}});

    const updateTimesElement = screen.getByLabelText("Time");
    fireEvent.change(updateTimesElement, {target: {value: ["17:00", "18:00", "19:00", "20:00", "21:00"]}});

    expect(initialTimesElement).toBeInTheDocument();

    expect(updateTimesElement).toBeInTheDocument();

    // submit button disabled test
    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);

    expect(submitBtn).toBeDisabled();

    // sendReservation function test
    expect(sendReservation).not.toHaveBeenCalled();
})