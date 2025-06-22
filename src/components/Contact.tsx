
const Contact: React.FC = () => {
  return (
    <section>
      <h1>Get in touch.</h1>
      <form>
        <div className="flex flex-col md:flex-row md:gap-3">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" placeholder="Email Address"  name="email"  />
        </div>
        <textarea name="message" placeholder="Write Your Message" />
        <button type="submit" className="bg-white w-full text-black py-3 rounded-md ">Send Message</button>
      </form>
    </section>
  )
}

export default Contact