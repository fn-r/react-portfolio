import { NavHashLink } from "react-router-hash-link"
import { logo } from "../utils/Assets"

const MobileNavBar = ({ menu, closeMobileMenu }) => (
    <div className={`${menu} navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-40`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" onClick={closeMobileMenu}></div>
        <nav className="relative z-10 px-9 py-8 bg-white h-full">
            <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                        <div className="w-auto p-2">
                            <NavHashLink smooth to="#" className="inline-block">
                                <img src={logo} alt="logo" />
                            </NavHashLink>
                        </div>
                        <div className="w-auto p-2">
                            <button className="navbar-burger" onClick={closeMobileMenu}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-8 w-full">
                    <ul>
                        <li className="mb-12"><NavHashLink smooth to="#header" className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700">Home</NavHashLink></li>
                        <li className="mb-12"><NavHashLink smooth to="#portfolio" className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700">Portfolio</NavHashLink></li>
                        <li className="mb-12"><NavHashLink smooth to="#about" className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700">About</NavHashLink></li>
                        <li><NavHashLink smooth to="#contact" className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700">Contact</NavHashLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default MobileNavBar