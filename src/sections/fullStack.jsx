import Subtitulo from "@/components/subtitulo";
import { useLanguage } from "@/context/langContext";
import { useMobile } from "@/context/mobileContext";

import LaNave from "@/components/laNave";
import HalMovies from "@/components/halMovies";
import Aaal from "@/components/aaal";


const FullStack = () => {
    const { language } = useLanguage();
    const { isMobile } = useMobile();

    return (
        <section id="fullstack" className={`bg-gradient-to-tr from-[#1f1239] to-black flex flex-col items-center pt-18 montserrat ${isMobile ? 'px-2 pb-15' : 'px-10 pb-10'}`}>
            <h1 className="text-5xl font-bold text-white text-shadow-md text-shadow-gray-900 my-4 text-center comfortaa">{language === 'es' ? 'Proyectos Full-Stack' : 'Full-Stack Projects'}</h1>
            <div className='max-w-[1440px] h-full w-full px-4'>
                <Subtitulo
                    texto={language === 'es' ? 'Tienda de ropa online' : 'Online clothing store'}
                    clase='my-10' />
                
                <LaNave />

                <Subtitulo
                    texto={language === 'es' ? 'Catálogo de películas' : 'Movie catalog'}
                    clase={isMobile ? 'mt-15 mb-10' : 'mt-20 mb-10'} />

                <HalMovies />

                <Subtitulo
                    texto={language === 'es' ? 'Proyecto en desarrollo' : 'Work in progress'}
                    clase={isMobile ? 'mt-15 mb-10' : 'mt-20 mb-10'} />

                <Aaal clase='mb-10'/>
            </div>

        </section>
    );
};

export default FullStack;