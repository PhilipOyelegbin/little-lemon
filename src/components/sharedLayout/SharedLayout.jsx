import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const SharedLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      <ScrollRestoration getKey={(location) => {
        return location.pathname
      }}/>
    </>
  )
}

export default SharedLayout