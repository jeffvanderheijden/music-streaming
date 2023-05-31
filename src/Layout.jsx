import React from "react";
import Navigation from "./Components/Navigation/Navigation";

const Layout = ({
  children
}) => { 
  return (
    <main className="layout">
      <Navigation />
      {children}
    </main>
  )
}

export default Layout;