import { useState } from "react"
import { NavHashLink } from "react-router-hash-link"
import { logoWhite } from "../utils/Assets"
import MobileNavBar from "./MobileNavBar"

const HeaderNavBar = () => {
    // open and close mobile menu
    const [menu, setMenu] = useState("hidden")
    const openMobileMenu = () => setMenu("")
    const closeMobileMenu = () => setMenu("hidden")

    return (

        <section className="z-50 fixed top-0 left-0 w-screen">
            <div className="flex items-center justify-between px-8 py-5">
                <div className="w-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-auto mr-14">
                            <NavHashLink smooth to="#">
                                <img src={logoWhite} alt="logo" />
                            </NavHashLink>
                        </div>
                    </div>
                </div>
                <div className="w-auto hidden lg:block">
                    <ul className="flex items-center mr-10 font-semibold">
                        <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg"><NavHashLink smooth to="#header">Home</NavHashLink></li>
                        <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg"><NavHashLink smooth to="#portfolio">Portfolio</NavHashLink></li>
                        <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg"><NavHashLink smooth to="#about">About</NavHashLink></li>
                    </ul>
                </div>
                <div className="w-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-auto hidden lg:block">
                            <NavHashLink smooth to="#contact" className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-white bg-opacity-30 hover:bg-opacity-10 transition ease-in rounded-10">Contact Me</NavHashLink>
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

export default HeaderNavBar