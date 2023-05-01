import { FaCheckCircle, FaExclamation } from "react-icons/fa"

function SuccessStatus() {
  return (
    <div className="success-status">
      <FaCheckCircle/>
      <p>Sent successfully</p>
    </div>
  )
}

function ErrorStatus() {
  return (
    <div className="error-status">
      <FaExclamation/>
      <p>Reservation failed</p>
    </div>
  )
}

export {SuccessStatus, ErrorStatus}