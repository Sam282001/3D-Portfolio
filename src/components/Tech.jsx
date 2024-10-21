import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies  } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((techonlogy) => (
        <div className="w-28 h-28" key={techonlogy.name}>
          <BallCanvas icon={techonlogy.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech
