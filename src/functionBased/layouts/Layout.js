import React from "react";
import ResponsiveAppBar from "../components/AppBar";

function Layout(props) {
    const { children } = props;
    return (
        <div>
            {/* <Navbar/> */}
            <ResponsiveAppBar />
            {children}
        </div>
    );
}

export default Layout;