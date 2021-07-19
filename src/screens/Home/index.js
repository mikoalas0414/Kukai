import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";

const Home = () => {
  return (
    <>
      <Hero />
      <HotBid />
      <Description />
    </>
  );
};

export default Home;
