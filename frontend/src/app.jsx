import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServicesCard from "./components/ServicesCard";
import QuoteCalculator from "./components/QuoteCalculator";
import PlansGrid from "./components/PlansGrid";
import BookingForm from "./components/BookingForm";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import PageTransition from "./components/PageTransition";

// Import LocationPopup
import LocationPopup from "./components/LocationPopup";

function App() {
  return (
    <Router>
      {/* Popup overlay on page load */}
      <LocationPopup />

      <div className="min-h-screen bg-background text-content">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <>
                  <Hero />
                  <ServicesCard />
                  <QuoteCalculator />
                  <PlansGrid />
                  <Gallery />
                  <Reviews />
                </>
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <ServicesCard />
              </PageTransition>
            }
          />
          <Route
            path="/quote"
            element={
              <PageTransition>
                <QuoteCalculator />
              </PageTransition>
            }
          />
          <Route
            path="/plans"
            element={
              <PageTransition>
                <PlansGrid />
              </PageTransition>
            }
          />
          <Route
            path="/booking"
            element={
              <PageTransition>
                <BookingForm />
              </PageTransition>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            }
          />
          <Route
            path="/reviews"
            element={
              <PageTransition>
                <Reviews />
              </PageTransition>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
