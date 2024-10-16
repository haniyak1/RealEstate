import React from "react"
import Header from "../common/header/Header"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom" 

const Pages = () => {
  return (
    <Router> 
      <Header />
      <Route exact path='/' component={Home} />
      <Footer />
    </Router>
  )
}

export default Pages
