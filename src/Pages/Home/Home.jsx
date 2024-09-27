import React from "react";
import Hero from "./components/Hero/Hero";
import PopularEvents from "./components/Popular Events/PopularEvents";
import CorporateVenues from "./components/Corporate Venues/CorporateVenues";
import SocialVenues from "./components/Social Venues/SocialVenues";
import WhyChooseUs from "./components/Why Choose Us/WhyChooseUs";
import Testimonial from "./components/Testimonial/Testimonial";
import LatestNews from "./components/Latest News/LatestNews";
import TopDestinations from "./components/Top Destinations/TopDestinations";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  // const { user } = useAuth();

  // if (!user) return <Navigate to="/login" />;
  return (
    <>
      <Hero />
      <PopularEvents />
      <CorporateVenues/>
      <SocialVenues/>
      <WhyChooseUs/>
      <Testimonial/>
      <LatestNews/>
      <TopDestinations/>
    </>
  );
};

export default Home;
