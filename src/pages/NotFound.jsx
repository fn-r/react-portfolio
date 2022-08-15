import { Link } from "react-router-dom"
import { logoWhite, http404, httpRadial2 } from "../utils/Assets"

const NotFound = () => (
    <section className="relative pt-16 pb-64 bg-black overflow-hidden">
        <img className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full" src={httpRadial2} alt="" />
        <div className="relative z-10 container mx-auto px-4">
            <img className="mx-auto mb-64" src={logoWhite} alt="logo" />
            <div className="md:max-w-lg mx-auto">
                <img className="mx-auto" src={http404} alt="404" />
                <div className="flex flex-wrap items-end justify-center -m-6">
                    <div className="w-full md:w-1/2 p-6">
                        <div className="md:max-w-xs">
                            <h2 className="font-heading font-semibold text-white text-5xl">Something went wrong!</h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-6">
                        <Link to="/" className="flex items-center max-w-max font-heading font-semibold text-xs text-white hover:text-gray-200 tracking-px uppercase" href="#">
                            <div className="flex items-center -m-1">
                                <div className="w-auto p-1">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 14.75L2.75 9.5M2.75 9.5L8 4.25M2.75 9.5L16.25 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div className="w-auto p-1">
                                    <p>Go back to Homepage</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default NotFound