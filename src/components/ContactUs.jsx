import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import {motion} from "motion/react";
function ContactUs() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");
    setError("");

    const formData = new FormData(event.target);
    formData.append("access_key", "bf0a61c7-8db1-4827-a878-227528edc3ea");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Thank you! Your message has been sent.");
        event.target.reset();
      } else {
        setError(data.message || "Something went wrong");
        setResult("");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setResult("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
    initial="hodden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{opacity:0, y: 30}}
    animate={{opacity:1, y: 0}}
    transition={{duration:0.5,delay:0.4}}
    viewPort={{once:true}}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 max-w-2xl w-full"
      >
        {/* Name */}
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="mb-2 text-sm font-medium">Your email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </div>

        {/* Status messages */}
        {result && (
          <p className="sm:col-span-2 text-green-600 text-sm font-medium">
            {result}
          </p>
        )}

        {error && (
          <p className="sm:col-span-2 text-red-600 text-sm font-medium">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit"}
          <img src={assets.arrow_icon} alt="" className="h-4 w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
}

export default ContactUs;
