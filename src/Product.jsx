import React from "react";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Services from "./Services";

function About() {
  return (
    <section className="menu text-white container-fluid">
      <Navigation />
      <Menu />
      <Services />
    </section>
  );
}
export default About;
