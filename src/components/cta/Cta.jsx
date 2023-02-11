import { Link } from 'react-router-dom'
import './cta.css'

const InternalLinkBtn = ({url, label}) => {
  return (
    <Link to={url} role="button" className='btn'>{label}</Link>
  )
}

const ExternalLinkBtn = () => {
    return (
        <div>Cta</div>
    )
}

export {InternalLinkBtn, ExternalLinkBtn}
