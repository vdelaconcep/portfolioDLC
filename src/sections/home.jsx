import { motion } from 'framer-motion';
import Navegacion from "@/components/navegacion";


const Home = () => {

    return (
        <section id='home' className="bg-gradient-to-tr from-[#1B093F] from-2% to-[#080918] h-[100dvh] to-80% flex flex-col px-8 md:px-10 overflow-hidden comfortaa items-center">
            <Navegacion />  
            <div className='h-full flex flex-col justify-center relative max-w-[1440px]'>
                <article
                    className="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] flex flex-col mb-5 font-bold">
                    <motion.h1
                        className='text-white text-shadow-md text-shadow-gray-900'
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >Desarrollo Full-Stack</motion.h1>
                    <motion.h1
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5 }}
                        className="md:mt-[-25px] [background-image:linear-gradient(to_right,#8473FF,#c005d1)] [background-clip:text] [-webkit-background-clip:text] [color:transparent] [-webkit-text-fill-color:transparent] w-fit">
                        Diseño UX/UI</motion.h1>
                </article>

                <article className='text-gray-300 text-center text-xl font-normal flex justify-center montserrat mt-25 absolute bottom-25 left-1/2 -translate-x-1/2'>
                    <h1 className='text-[#c005d1]'>Portfolio de <b className='text-white'>Valeria de la Concepción María</b> </h1>
                </article>
            </div>
            
            
        </section>
    );
};

export default Home;