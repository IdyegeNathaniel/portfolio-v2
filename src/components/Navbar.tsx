
import Link from "next/link"
import { DocIcon, GitIcon, HomeIcon, UserIcon } from "./svgs"

const Navbar: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center  mb-5">
      <nav className="max-w-2/4 w-5xl flex-nav border border-white rounded-full">
        <Link href={"/"} className="group relative inline-block">
          <HomeIcon className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]" />
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-white text-zinc-900 text-[12px] px-2 py-1 mt-4 rounded-md">
            Home
          </span>
        </Link>
        <Link href={"/"} className="group relative inline-block">
          <DocIcon className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]" />
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-white text-zinc-900 text-[12px] px-2 py-1 mt-4 rounded-md">
            Resume
          </span>
        </Link>
        <Link href={"/"} className="group relative inline-block">
          <GitIcon className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]" />
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-white text-zinc-900 text-[12px] px-2 py-1 mt-4 rounded-md">
            GitHub
          </span>
        </Link>
        <Link href={"/"} className="relative group inline-block">
          <UserIcon className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]" />
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-white text-zinc-900 text-[12px] px-2 py-1 mt-4 rounded-md">
            Me
          </span>
        </Link>
      </nav>
    </section >
  )
}

export default Navbar

