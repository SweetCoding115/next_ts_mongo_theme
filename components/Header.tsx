import ThemeSwitcher from "./ThemeSwitcher"
import Logo from '../public/Zeronet_logo.png'
import Image from "next/image"
import Link from "next/link"

const Header = ({ children }) => {
  return (
    <div className="w-7xl h-20 shadow-md border-b-1 dark:shadow-slate-500 flex justify-center">
      <div className="flex items-center w-[1300px] justify-between px-3">
        <Link href='/'>
          <Image
            width={24}
            height={24}
            src={Logo}
            alt="Logo"
          />
        </Link>
        <h2 className="text-xl lg:text-2xl xl:text-3xl m-2">{children}</h2>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
export default Header
