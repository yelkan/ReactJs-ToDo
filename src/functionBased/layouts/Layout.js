import React from "react";
import Navbar from "../components/Navbar";

const Layout = (props) => {
    const {children} = props;
    return (
    <div>
        <Navbar/>
        {children}
    </div>
    );
}

export default Layout;