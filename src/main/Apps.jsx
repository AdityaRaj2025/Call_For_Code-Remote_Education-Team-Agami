import React from "react";
import Main from "/../Main";
import Signup from "/../Signup";
import About from "/../About";
import Contact from "/../Contact";
import Navbar from "/../Navbar";
import Footer from "/../Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const Apps = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default Apps;
