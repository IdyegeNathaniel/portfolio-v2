import { MailIcon, PhoneIcon } from "./svgs";
// import { motion } from "framer-motion"


const Contact: React.FC = () => {

   
  return (
    <section id="contact">
      <h1>Get in Touch.</h1>
      <div>
        <div className="flex flex-wrap justify-center gap-5 my-5">
          <span className="det-span"><MailIcon fill="white" className="mr-2 w-[15px] h-[15px]" />idyegenathaniel@gmail.com</span>
          <span className="det-span"><PhoneIcon fill="white" className="mr-2 w-[15px] h-[15px]" />+234 903 246 1074</span>
        </div>
        <form method="POST" action="https://getform.io/f/arolrwkb">
          <div className="flex flex-col md:flex-row md:gap-3">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" name="email" />
          </div>
          <textarea name="message" placeholder="Write Your Message" />
          <button type="submit" className="w-full bg-white text-black py-3 rounded-md cursor-pointer" disabled>Send Message</button>
        </form>
        </div>
     
    </section>
  )
}

export default Contact