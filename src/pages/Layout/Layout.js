import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Layout(props) {
    return(
        <>
        <Navbar />
        {props.children}
        <Footer />
        </>
    )
}

export default Layout