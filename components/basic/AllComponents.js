import React from "react";
import Banner from "../banner/Banner";
// sections:
import Whitepapers from "./whitepapers";
import PageForm from "./form";
import About from "./about";
import Websites from "./websites";
import Articles from "./carousel";
import ScrollToTop from "./ScrollUp"; 


const AllComponents = () => {
  return (
    <div>
      <Banner />
      <About />
      <Whitepapers />
      <Websites />
      <Articles />
      <PageForm />
      <ScrollToTop />
    </div>
  );
};

export default AllComponents;
