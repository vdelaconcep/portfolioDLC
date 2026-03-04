import main from "@/assets/img/HAL/halmovies.onrender.com_catalog.png";
import portadaMobile from "@/assets/img/HAL/halmovies.onrender.com_.png";
import mainMobile from "@/assets/img/HAL/halmovies.onrender.com_ (1).png";
import detalleMobile from "@/assets/img/HAL/halmovies.onrender.com_ (2).png";
import ItemOtros from "@/components/itemOtros";
import { useLanguage } from "@/context/langContext";
import BotonLink from "@/components/botonLink";
import { motion } from "framer-motion";
import { fadeInUp } from '@/constants/animations';
import { useMobile } from "@/context/mobileContext";
import VerSitioMobile from "@/components/verSitioMobile";

const HalMovies = ({ clase }: { clase?: string }): JSX.Element => {
    const { language } = useLanguage();
    const { isMobile } = useMobile();
    const invitacion = language === 'es' ? 'Ir al sitio web' : 'Go to website'

    return (
        <div className={clase && clase}>
            <article className={`flex w-full items-center ${isMobile ? 'flex-col' : 'gap-7'}`}>
                <motion.div
                    {...fadeInUp}
                    className={`rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700 bg-cover bg-center overflow-hidden group relative ${isMobile ? 'w-full' : 'w-1/2'}`}>
                    <a
                        className="block"
                        href="https://halmovies.onrender.com/"
                        target="_blank">
                        <img
                            className="w-full h-full object-cover transition-all duration-200 group-hover:blur-sm group-hover:scale-105"
                            src={main}
                            alt="HAL main desktop" />
                        {isMobile ?
                            <div className="absolute bottom-0 right-0">
                                <VerSitioMobile
                                    texto={invitacion} />
                            </div> :
                            <>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-all duration-200">
                                    {invitacion}<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                                </div>
                            </>
                        }
                    </a>
                </motion.div>
                
                <div className={isMobile ? 'w-full mt-10' : 'w-1/2'}>
                    <p className={`text-gray-200 ${isMobile ? 'mb-10' : 'mb-15'}`}>
                        {language === 'es' ? 'Aplicación web desarrollada en React que consume la API de TMDB para mostrar información sobre películas. Incluye funcionalidades de búsqueda, filtrado y visualización de detalles. Diseño responsive para ver en cualquier dispositivo.'
                            : "Web application developed in React that consumes the TMDB API to display movie information. Features search functionality, filtering, and movie details views. Responsive design for viewing on any device."}
                    </p>
                    <div className="flex flex-col items-center text-gray-200">
                        <div>
                            <ItemOtros
                                clase='mb-4'
                                titulo='Frontend'
                                descripcion='React, Vite, CSS/Bootstrap' />

                            <ItemOtros
                                clase={!isMobile && 'mb-4'}
                                titulo='Deploy'
                                descripcion='Render' />
                        </div>

                    </div>
                </div>
        
            </article>
            <article className={`flex w-full ${isMobile ? 'flex-col mt-10' : 'gap-7 my-15'}`}>
                <motion.div
                    {...fadeInUp}
                    className={`w-full flex gap-2 justify-between ${!isMobile && 'hidden'}`}>
                    <img
                        className="rounded-xl flex-1 h-auto min-w-0 object-contain shadow-md shadow-gray-400 border-3 border-gray-800"
                        src={portadaMobile}
                        alt="HAL portada mobile" />
                    <img
                        className="rounded-xl flex-1 h-auto min-w-0 object-contain shadow-md shadow-gray-400 border-3 border-gray-800"
                        src={mainMobile}
                        alt="HAL main mobile" />
                    <img
                        className="rounded-xl flex-1 h-auto min-w-0 object-contain shadow-md shadow-gray-400 border-3 border-gray-800"
                        src={detalleMobile}
                        alt="HAL detalle mobile" />
                </motion.div>
                <div className={`flex flex-col justify-between ${isMobile ? 'w-full mt-10' : 'w-1/2'}`}>
                    <ul className="text-gray-200">
                        {language === 'es' ?
                            <>
                                <li className="mb-5">Diseño visual inspirado en la película "2001, odisea del espacio"</li>
                                <li className="mb-5">Paginación dinámica con <b>scroll infinito</b></li>
                                <li className="mb-5"><b>Filtrado</b> por género</li>
                                <li className="mb-5"><b>Búsqueda</b> de películas por título</li>
                                <li><b>Diseño responsive</b> mobile first</li>
                            </>
                            : <>
                                <li className="mb-5">Visual design inspired by the movie "2001: A Space Odyssey"</li>
                                <li className="mb-5">Dynamic pagination with <b>infinite scroll</b></li>
                                <li className="mb-5"><b>Filtering</b> by genre</li>
                                <li className="mb-5"><b>Search</b> movies by title</li>
                                <li>Mobile-first <b>responsive design</b></li>
                            </>
                        }
                    </ul>
                    <article className={`flex justify-end  ${isMobile ? 'mt-10 flex-col' : 'mx-10 mt-auto'}`}>
                        <BotonLink
                            texto={invitacion}
                            enlace='https://halmovies.onrender.com/'
                            color='gray-200'/>
                    </article>

                </div>
                <motion.div
                    {...fadeInUp}
                    className={`flex justify-between w-1/2 ${isMobile && 'hidden'}`}>
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                        src={portadaMobile}
                        alt="HAL portada mobile" />
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                        src={mainMobile}
                        alt="HAL main mobile" />
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                        src={detalleMobile}
                        alt="HAL detalle mobile" />
                </motion.div>
            </article>
        </div>
    );
};

export default HalMovies;