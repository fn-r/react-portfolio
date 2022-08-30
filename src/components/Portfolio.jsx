import { motion } from "framer-motion";

const Portfolio = ({ portfolio_bg, relative_status, data }) => {

    const portfolioVariants = {
        offscreen: {
            y: 100
        },
        onscreen: {
            y: 50,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    }

    return (
        <motion.div
            className={`w-full lg:w-1/3 ${relative_status ? 'lg:relative lg:top-12' : ''} py-10 px-5 md:px-16 lg:px-5`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
        >
            <motion.div variants={portfolioVariants}>
                <div className={`h-full pt-8 px-10 transform hover:-translate-y-3 ${portfolio_bg} rounded-2xl transition ease-out duration-1000`}>
                    <a href={data.link} target="_blank" rel="noreferrer noopener">
                        <h3 className="mb-5 font-heading font-semibold text-white text-3xl">{data.name}</h3>
                        <img
                            className="relative mx-auto px-0 md:px-5 lg:px-0 transform hover:scale-110 transition ease-in-out duration-500"
                            src={data.img_link}
                            alt={data.img_desc}
                            loading="lazy"
                        />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Portfolio