import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Common/Footer/Footer";
import Layout from "./Common/Layout/Layout";
import Navigation from "./Common/Navigation/Navigation";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Common/Protected Route/ProtectedRoute";
import Venues from "./Pages/Venues/Venues";

const Home = lazy(() => import("./Pages/Home/Home"));
// const Venues = lazy(() => import("./Pages/Venues/Venues"));
const SignUp = lazy(() => import("./Pages/Sign Up/SignUp"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const VenueDetails = lazy(() => import("./Pages/Venue Detail/VenueDetail"));
const VendorLanding = lazy(() => import("./Pages/Landing/Landing"));

function App() {
  const path = useLocation().pathname;
  // console.log(path);

  return (
    <main className="relative">
      {path !== "/sign-up" && path !== "/login" && <Navigation />}
      {path != "/" && (
        <div className="xs:mx-5 mx-0 sm:mx-[50px] border-b border-b-[#D8E0F0]"></div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Layout />}>
            <Route path="/venues" element={<Venues />} />
            <Route path="/venues/:id" element={<VenueDetails />} />
          </Route>
          <Route path="/services" element={<Layout />}>
            <Route path="/services" element={<Venues />} />
            <Route path="/services/:id" element={<VenueDetails />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/landing" element={<VendorLanding />} />
        </Routes>
      </Suspense>
      {path !== "/sign-up" && path !== "/login" && path !== "/profile" && (
        <Footer />
      )}
      <Toaster />
    </main>
  );
}

export default App;
