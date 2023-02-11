import Footer from "../footer/Footer"
import Header from "../header/Header"

const SharedLayout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default SharedLayout