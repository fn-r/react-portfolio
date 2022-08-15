import { format } from "date-fns";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { TypeAnimation } from "react-type-animation";
import HeaderNavBar from "../components/HeaderNavBar";
import MainNavBar from "../components/MainNavBar";
import OverlayForm from "../components/OverlayForm";
import Portfolio from "../components/Portfolio";
import { about_data, project_data } from "../data/data";
import { headerGIF, conRadial2, logoWhite, featRadial1, heroLine2, heroLine3, aboutRadial2 } from "../utils/Assets";

const { Helmet } = require("react-helmet");

const MetaTags = () => (
    <Helmet>
        <title>Farah Nadhirah</title>
        <meta property="twitter:creator" content="Farah Nadhirah" />
        <meta property="twitter:site" content="https://farahn.netlify.app/" />
        <meta property="twitter:card" content="Software engineer based in Kuala Belait, Brunei Darussalam" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Farah Nadhirah" />
        <meta property="og:description" content="Software engineer based in Kuala Belait, Brunei Darussalam" />
        <meta name="author" content="Farah Nadhirah" />
        <meta name="robots" content="" />
        <meta name="keywords" content="Farah Nadhirah Rusli, developer, software engineer, coder, programmer" />
        <meta name="description" content="Software engineer based in Kuala Belait, Brunei Darussalam" />
    </Helmet>
)

const RenderHeader = () => {
    return (
        <section id="header" className="bg-gradient-fuchsia background-animate overflow-hidden">
            <div className="w-screen h-screen relative container mx-auto px-4 flex justify-center items-center">
                <img className="hidden xl:block absolute bottom-64 left-56 transform -translate-y-4" src={heroLine2} alt="" />
                <img className="hidden xl:block absolute bottom-64 right-56 transform -translate-y-28" src={heroLine3} alt="" />
                <div className="relative z-10 flex flex-wrap justify-center items-center -m-6 lg:pt-32 pb-36">
                    <div className="w-full lg:w-auto p-6 self-start">
                        <img className="xl:relative xl:-top-20 mx-auto" width="280" src="https://avatars.githubusercontent.com/u/73539860?v=4" alt="profile" />
                    </div>
                    <div className="flex-1 p-6">
                        <div className="lg:max-w-2xl mx-auto px-6">
                            <h1 className="mb-6 font-heading text-center text-white text-7xl md:text-9xl xl:text-12xl font-bold">Hello! I'm Farah Nadhirah</h1>
                            <p className="mb-10 font-medium text-xl text-center text-white">I'm a
                                <TypeAnimation
                                    sequence={[" software engineer", 3000, " programmer", 2500, " developer", 2500, " coder", 2500]}
                                    wrapper="span"
                                    repeat={Infinity}
                                />
                            </p>
                            <NavHashLink smooth to="#contact" className="group mb-9 relative flex items-center justify-center font-heading px-24 py-5 mx-auto w-full md:w-auto uppercase text-white hover:text-black text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md">
                                <div className="absolute transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-green"></div>
                                <p className="relative z-10 mr-2">Get in Touch</p>
                                <svg className="relative z-10" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.49999 16.2C13.4764 16.2 16.7 12.9764 16.7 8.99999C16.7 5.02354 13.4764 1.79999 9.49999 1.79999C5.52354 1.79999 2.29999 5.02354 2.29999 8.99999C2.29999 12.9764 5.52354 16.2 9.49999 16.2ZM12.8364 8.36359L10.1364 5.66359C9.78491 5.31212 9.21506 5.31212 8.86359 5.66359C8.51212 6.01506 8.51212 6.58491 8.86359 6.93638L10.0272 8.09999L6.79999 8.09999C6.30293 8.09999 5.89999 8.50293 5.89999 8.99999C5.89999 9.49704 6.30293 9.89999 6.79999 9.89999H10.0272L8.86359 11.0636C8.51212 11.4151 8.51212 11.9849 8.86359 12.3364C9.21506 12.6879 9.78491 12.6879 10.1364 12.3364L12.8364 9.63638C13.1879 9.28491 13.1879 8.71506 12.8364 8.36359Z" fill="white"></path>
                                </svg>
                            </NavHashLink>
                        </div>
                    </div>
                    <div className="hidden lg:block w-full lg:w-auto p-6 self-end">
                        <div style={{ width: '280px', height: '280px', background: '#46bb88', padding: '20px'}} className="flex justify-center items-center overflow-hidden border rounded-full">
                            <img className="flex shrink-0 min-h-full min-w-full" src={headerGIF} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const RenderPortfolios = () => {
    const portfolio = []
    let relative_status = true
    const portfolio_bg = [
        'bg-gradient-orange2',
        'bg-gradient-green',
        'bg-gradient-blue',
    ]
    portfolio_bg.forEach((bg, i) => {
        portfolio.push(<Portfolio
            key={`p_${i}`} portfolio_bg={bg}
            relative_status={relative_status} data={project_data[i]}
        />)
        relative_status = !relative_status
    })

    return (
        <section id="portfolio" className="relative pt-24 pb-48 bg-white overflow-hidden">
            <img className="absolute top-0 right-0" src={featRadial1} alt="" />
            <div className="relative z-10 container mx-auto px-4">
                <div className="md:max-w-8xl md:mx-auto">
                    <h2 className="max-w-xl font-heading font-bold text-6xl sm:text-7xl">Portfolio</h2>
                    <motion.div variants={{ onscreen: { transition: { staggerChildren: 1, delayChildren: 0.2 } } }} className="flex flex-wrap -m-5">
                        {portfolio}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const RenderAbout = () => {
    const aboutVariant = {
        offscreen: { opacity: 0, scale: 0.5 },
        onscreen: {
            opacity: 100,
            scale: 1,
            transition: {
                delay: 0.5,
                x: { duration: 0.4 },
                default: { ease: "linear" }
            },
        }
    }

    return (
        <section id="about" className="relative py-36 bg-white overflow-hidden">
            <img className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" src={aboutRadial2} alt="" />
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-wrap -m-6">
                    <div className="w-full md:w-1/2 p-6">
                        <h2 className="mb-16 md:max-w-md md:ml-auto font-heading font-bold text-6xl sm:text-7xl text-gray-900">About Me</h2>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            whileHover={{ y: -15 }}
                            viewport={{ once: true, amount: 0.8 }}
                            variants={aboutVariant}
                            className="p-0.5 bg-gradient-green rounded-10 transition ease-out duration-1000"
                        >
                            <div className="h-full px-7 py-8 bg-white rounded-lg">
                                <p className="text-lg text-gray-900">{about_data[0]}</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 p-6">
                        <div className="flex flex-wrap justify-center -m-6">
                            <div className="w-full lg:w-auto p-6">
                                <motion.div
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    whileHover={{ y: -15 }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    variants={aboutVariant}
                                    className="p-0.5 bg-gradient-green rounded-10 transition ease-out duration-1000"
                                >
                                    <div className="h-full px-7 py-8 bg-white rounded-lg">
                                        <p className="text-lg text-gray-900">{about_data[1]}</p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="w-full lg:w-auto p-6">
                                <motion.div
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    whileHover={{ y: -15 }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    variants={aboutVariant}
                                    className="p-0.5 bg-gradient-green rounded-10 transition ease-out duration-1000"
                                >
                                    <div className="h-full px-7 py-8 bg-white rounded-lg">
                                        <p className="text-lg text-gray-900">{about_data[2]}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const RenderContact = () => {
    const formVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    }

    return (
        <section id="contact" className="relative py-36 bg-white overflow-hidden">
            <img className="absolute left-0 bottom-0" src={conRadial2} alt="" />
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-wrap -m-6">
                    <div className="w-full md:w-1/2 p-6">
                        <div className="md:max-w-lg mb-14">
                            <h2 className="mb-7 font-heading font-bold text-5xl sm:text-6xl">Get in touch</h2>
                            <p className="text-gray-400 text-lg">Have a project idea? Feel free to reach out</p>
                        </div>
                        <div className="flex flex-wrap -m-10">
                            <div className="w-full p-10">
                                <div className="md:max-w-xs">
                                    <h3 className="mb-6 font-heading font-medium text-xl">You can find me at:</h3>
                                    <p className="text-lg text-gray-400 mb-4">Twitter</p>
                                    <p className="text-lg text-gray-400 mb-4">LinkedIn</p>
                                    <p className="text-lg text-gray-400 mb-4">GitHub</p>
                                    <p className="text-lg text-gray-400 mb-4">AngelList</p>
                                    <p className="text-lg text-gray-400 mb-4">Mail</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form name="contact-form" data-netlify="true" className="w-full md:w-1/2 p-6">
                        <motion.div
                            variants={formVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.02 }}
                            className="p-8 max-w-lg mx-auto bg-gray-800 rounded-10"
                        >
                            <div className="flex flex-wrap max-w-xl mx-auto">
                                <div className="w-full mb-5">
                                    <input className="w-full px-5 py-4 text-white text-base bg-transparent border border-gray-700 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 rounded" type="text" placeholder="Your full name" />
                                </div>
                                <div className="w-full mb-5">
                                    <input className="w-full px-5 py-4 text-white text-base bg-transparent border border-gray-700 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 rounded" type="text" placeholder="Your email address" />
                                </div>
                                <div className="w-full mb-5">
                                    <textarea className="w-full h-40 px-5 py-4 text-white text-base bg-transparent border border-gray-700 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 resize-none rounded" type="text" placeholder="Write message"></textarea>
                                </div>
                                <div className="w-full mb-5">
                                    <div className="group relative">
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                                        <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                                            <div className="relative p-5 px-11 bg-gradient-green overflow-hidden rounded-md">
                                                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                                                <p className="relative z-10">Send message</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </form>

                </div>
            </div>
        </section>
    )
}

const RenderFooter = () => (
    <section id="footer" className="py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap lg:items-center -m-6">
                <div className="w-full md:w-auto p-6">
                    <img src={logoWhite} alt="logo" />
                </div>
                <div className="w-auto md:ml-auto p-6">
                    <div className="flex flex-wrap items-center -m-1.5">
                        <div className="w-auto p-1.5">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className="w-auto p-1.5">
                            <h3 className="font-heading font-medium text-base text-white">fn.rusli@outlook.com</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-9">
                <div className="border-b border-gray-800"></div>
            </div>
            <div className="flex flex-wrap items-center justify-end -m-6">
                <div className="w-auto p-6">
                    <p className="text-sm text-gray-300">
                        © Copyright {format(new Date(), 'yyyy')}. All Rights Reserved by Farah Nadhirah.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

const RenderScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed z-10 bottom-0 left-0 right-0 bg-gradient-fuchsia origin-left h-2"
            style={{ scaleX: scrollYProgress }}
        />
    )
}

const Home = () => {
    // change navbar on scroll
    const [nav, setNav] = useState(<HeaderNavBar />)
    const listenScrollEvent = () => {
        if (window.scrollY < 100) {
            return setNav(<HeaderNavBar />)
        }
        return setNav(<MainNavBar />)
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    // 

    return (
        <>
            <MetaTags />
            {nav}
            <RenderHeader />
            <RenderPortfolios />
            <RenderAbout />
            <RenderContact />
            <RenderFooter />
            <RenderScrollProgress />

            <OverlayForm />
        </>
    )
}

export default Home