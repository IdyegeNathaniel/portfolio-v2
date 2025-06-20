import { HiArrowRight } from "react-icons/hi"

const Hero: React.FC = () => {
  return (
    <section>
      <div className="">
        <h2 className="text-3xl font-bold mb-4 uppercase">Nathaniel Idyege</h2>
        <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
        <p className="text-neutral-300 text-sm leading-relaxed">Hey there, let us create your ideas, dreams, and visual design into something practical.<br /> i am a frontend developer with experience in building fast, responsive, accessible web applications</p>
      </div>
      <button className="flex items-center gap-2 group bg-white text-black text-[14px] font-semibold px-3 py-2 md:px-6 md:py-3 rounded-md mt-5 cursor-pointer transition-all duration-500">
        Let&#39;s Connect 
        <span className="group-hover:rotate-90"><HiArrowRight /> </span>  
      </button>
    </section>
  )
}

export default Hero