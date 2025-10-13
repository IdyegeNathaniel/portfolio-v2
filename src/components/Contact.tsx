// import { MailIcon, PhoneIcon } from "./svgs";
// import { motion } from "framer-motion"


const Contact: React.FC = () => {

   
  return (
    <section id="contact">
      <h1>Get in Touch.</h1>
      <div>
        <form method="POST" action="https://getform.io/f/arolrwkb">
          <div className="flex flex-col md:flex-row md:gap-3">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" name="email" required />
          </div>
          <textarea name="message" placeholder="Write Your Message" />
          <button type="submit" className="w-full bg-white text-black py-3 rounded-md cursor-pointer">Send Message</button>
        </form>
        </div>
     
    </section>
  )
}

export default Contact