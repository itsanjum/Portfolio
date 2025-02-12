import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
//template_tffv5p7
//service_ffzbpzn
//twyGW-f6cwHbIzDeq
const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",

  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    //template_tffv5p7
//service_ffzbpzn
//twyGW-f6cwHbIzDeq


    emailjs.send('service_ffzbpzn','template_tffv5p7',
      {
        from_name: form.name,
        to_name: 'Anjum',
        from_email: form.email,
        to_email: 'anjumunnisa1999@gmail.com',
        message: form.message,

      },
      'twyGW-f6cwHbIzDeq'
    )
    .then( () => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possilbe.');

        setForm({
          name: "",
          email: "",
          message: "",
        })
    },(error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.")
      })


  }



  return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
                  <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>


          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's you want to say?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold w-fit shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div 
                  variants={slideIn("right", "tween", 0.2, 1)}
                  className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
                    <EarthCanvas />


        </motion.div>




      
    </div>
  )
}

export default SectionWrapper(Contact, "contact");