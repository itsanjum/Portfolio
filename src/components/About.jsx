import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt="web-developemnt"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};



const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"

      >
       I am a skilled software developer in developing scalable and user-friendly solutions. 
       Proficient in JavaScript and frameworks like React.js and Node.js,I have a strong background in front-end and backend technologies
      . A quick learner and strong collaborator, I excel in analyzing requirements, preparing technical
      designs, and ensuring seamless operations. Let’s work together to bring innovative ideas to life!

    </motion.p >

       {/* To display the Cards */ }
    <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
   

    </>
  )
}

export default SectionWrapper (About,"about")


