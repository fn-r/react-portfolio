import { useState } from "react"
import { NavHashLink } from "react-router-hash-link"
import { logo } from "../utils/Assets"
import MobileNavBar from "./MobileNavBar"

const MainNavBar = () => {
    // open and close mobile menu
    const [menu, setMenu] = useState("hidden")
    const openMobileMenu = () => setMenu("")
    const closeMobileMenu = () => setMenu("hidden")

    return (
        <section className="z-50 fixed top-0 left-0 w-screen overflow-hidden">
            <div className="flex items-center justify-between px-8 py-5 bg-white">
                <div className="w-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-auto mr-14">
                            <NavHashLink smooth to="#">
                                <img src={logo} alt="logo" />
                            </NavHashLink>
                        </div>
                    </div>
                </div>
                <div className="w-auto hidden lg:block">
                    <ul className="flex items-center mr-10 font-semibold">
                        <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><NavHashLink smooth to="#header">Home</NavHashLink></li>
                        <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><NavHashLink smooth to="#portfolio">Portfolio</NavHashLink></li>
                        <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><NavHashLink smooth to="#about">About</NavHashLink></li>
                    </ul>
                </div>
                <div className="w-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-auto hidden lg:block">
                            <NavHashLink smooth to="#contact" className="group relative p-0.5 font-heading block uppercase w-full md:w-auto text-xs tracking-px text-gray-900 font-bold bg-gradient-green overflow-hidden rounded-10">
                                <div className="absolute top-0 left-0 transform -translate-y-full  group-hover:-translate-y-0 h-full w-full bg-gradient-green transition ease-in-out duration-500"></div>
                                <div className="py-3 px-5 bg-white rounded-lg">
                                    <p className="relative z-10 ">Contact Me</p>
                                </div>
                            </NavHashLink>
                        </div>
                        <div className="w-auto lg:hidden" onClick={openMobileMenu}>
                            <svg className="navbar-burger text-gray-800" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                                <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <MobileNavBar menu={menu} closeMobileMenu={closeMobileMenu} />
        </section>
    )
}

export default MainNavBar