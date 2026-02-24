import assets from "../assets/assets";
import {motion} from "motion/react";
function Footer({ theme }) {
  return (
    < motion.footer
     initial={{opacity:0, y: 30}}
    animate={{opacity:1, y: 0}}
    transition={{duration:0.5,delay:0.8}}
    viewport={{once:true}}
    className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-10 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      
      {/* Top section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT COLUMN */}
        <motion.div
         initial={{opacity:0, y: -30}}
    animate={{opacity:1, x: 0}}
    transition={{duration:0.5,delay:0.3}}
    viewport={{once:true}}
        className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="Logo"
          />

          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <ul className="flex gap-8 flex-wrap">
            <li><a className="hover:text-primary" href="#home">Home</a></li>
            <li><a className="hover:text-primary" href="#services">Services</a></li>
            <li><a className="hover:text-primary" href="#ourwork">Our work</a></li>
            <li><a className="hover:text-primary" href="#contact">Contact Us</a></li>
          </ul>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
         initial={{opacity:0, x: 30}}
    animate={{opacity:1, y: 0}}
    transition={{duration:0.5,delay:0.3}}
    viewport={{once:true}}
        className="text-gray-600 dark:text-gray-400 max-w-md lg:ml-auto">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded border border-gray-300 dark:border-gray-600 bg-transparent"
            />
            <button className="bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Bottom section */}
      <motion.div 
           initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5,delay:0.4}}
    viewport={{once:true}}
      className="pb-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>Copyright 2025 © agency.io - Mr. Fraz</p>

        <div className="flex items-center gap-4">
          <img src={assets.facebook_icon} alt="Facebook" />
          <img src={assets.twitter_icon} alt="Twitter" />
          <img src={assets.instagram_icon} alt="Instagram" />
          <img src={assets.linkedin_icon} alt="LinkedIn" />
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
