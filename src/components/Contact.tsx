

const Contact: React.FC = () => {

   
  return (
    <section>
      <h1>Get in Touch.</h1>
      <div className="flex flex-wrap justify-center gap-5 my-5">
        <span className="flex flex-1 min-w-max text-sm border border-gray-500 p-2 rounded-md">idyegenathaniel@gmail.com</span>
        <span className="flex flex-1 min-w-max text-sm border border-gray-500 p-2 rounded-md">+234 9032461074</span>
      </div>
      <form method="POST" action="https://getform.io/f/arolrwkb">
        <div className="flex flex-col md:flex-row md:gap-3">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" placeholder="Email Address"  name="email"  />
        </div>
        <textarea name="message" placeholder="Write Your Message" />
        <button type="submit" className="w-full bg-white text-black py-3 rounded-md">Send Message</button>
      </form>
    </section>
  )
}

export default Contact