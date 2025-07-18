import { BrowserRouter, useLocation } from "react-router-dom";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import SeatLayout from "./Pages/SeatLayout";
import MyBooking from "./Pages/MyBooking";
import Favorite from "./Pages/Favorite";
import { Toaster } from "react-hot-toast";
import Footer from "./component/Footer";

export default function App() {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}
