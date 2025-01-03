import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies  } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((techonlogy) => (
        <div className="w-28 h-28" key={techonlogy.name}>
          {/* Conditionally render 3D ball or static icon based on device */}
          {!isMobile ? (
          <BallCanvas icon={techonlogy.icon} />
          ) : (
            // Display the static icon on mobile devices
            <img
              src={techonlogy.icon}
              alt={techonlogy.name}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Tech
