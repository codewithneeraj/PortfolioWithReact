import { gsap } from "gsap";
import React, { useEffect } from "react";
import AllProjects from "./AllProjects";
const Main = ()=> {

    useEffect(() => {
        gsap.fromTo('.hero_text', {
            y: '100%',
            opacity: 0
          }, {
            y: '0',
            opacity: 1,
            duration: .8,
            ease: "power1.out"
          });
      }, 
    []
    );
    return (
  <main>
    <section id="hero">
      <h2 className="hero_text"><span>HEY I'M NEERAJ</span> <br/>UI DEVELOPER</h2>
    </section>

        <AllProjects/>

    <section id="css_gallery">
      <h2>Css Gallery</h2>
      <p>Content for the services section goes here.</p>
    </section>
  </main>
    )
}
export default Main;