import { useEffect } from "react";
import { motion } from 'framer-motion';
import Navegacion from "@/components/navegacion";


const Home = () => {
    useEffect(() => {
        console.log('Estamos?');
    }, []);

    return (
        <section className="bg-gradient-to-tr from-[#678F6C] from-2% via-[#316149] via-20% to-[#03121D] h-[100dvh] to-80% flex flex-col px-8 md:px-10 overflow-hidden">
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 2}}
                className="flex justify-end mt-5">
                <Navegacion />
            </motion.article>
            
            <article
                className="text-white text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] coolvetica text-shadow-md text-shadow-gray-900 flex flex-col justify-center h-full">
                <motion.h1
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{duration: 1.5}}
                >Desarrollo Full-Stack</motion.h1>
                <motion.h1
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="md:mt-[-25px] text-pink-300">Diseño UX/UI</motion.h1>
            </article>
            
        </section>
    );
};

export default Home;