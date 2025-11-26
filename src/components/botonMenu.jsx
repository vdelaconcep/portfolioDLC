import { motion } from "framer-motion";

const BotonMenu = ({ abierto, setAbierto }) => {
    return (
        <button
            onClick={() => setAbierto(!abierto)}
            className="text-gray-400 text-2xl relative w-10 h-10 hover:bg-[#8473FF] hover:text-gray-900 rounded-xl"
            aria-label="toggle-menu">
            <motion.i
                className="fa-solid fa-bars absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/4"
                animate={{
                    rotate: abierto ? 90 : 0,
                    opacity: abierto ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }} />

            <motion.i
                className="fa-solid fa-x absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/4"
                animate={{
                    rotate: abierto ? 0 : -90,
                    opacity: abierto ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }} />

        </button>
    );
};

export default BotonMenu;