import { motion } from "framer-motion";

const Divisor = () => {
    return (
        <motion.div
            className="w-full h-[20px]"
            style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, black 0, black 15px, white 15px, white 30px)',
                backgroundSize: '42.43px 42.43px'
            }}
            animate={{
                backgroundPosition: ['0px 0px', '-42.43px 0px']
            }}
            transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity
            }}
        ></motion.div>
    )
};

export default Divisor;