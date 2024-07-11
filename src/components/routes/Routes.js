import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutUs, Error404, Home, Logement } from "../../pages";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route exact path="/logement/:id" element={<Logement />} />
              <Route exact path="/error-404" element={<Error404 />} />
              <Route
                exact
                path="/*"
                element={<Navigate replace to="/error-404" />}
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
