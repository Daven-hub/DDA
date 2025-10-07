import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "../Ux/Backtop"

export const Layout = () => {
    return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
          <BackToTop/>
        </>
    )
}