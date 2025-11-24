import main from "@/assets/img/HAL/halmovies.onrender.com_catalog.png";
import portadaMobile from "@/assets/img/HAL/halmovies.onrender.com_.png";
import mainMobile from "@/assets/img/HAL/halmovies.onrender.com_ (1).png";
import detalleMobile from "@/assets/img/HAL/halmovies.onrender.com_ (2).png";
import ItemOtros from "@/components/itemOtros";
import { useLanguage } from "@/context/langContext";
import BotonLink from "./botonLink";

const HalMovies = ({ clase }) => {
    const { language } = useLanguage();
    return (
        <div className={clase && clase}>
            <article className="flex gap-7 w-full items-center">
                <div
                    className="w-1/2 rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700 bg-cover bg-center overflow-hidden group relative">
                    <a
                        className="block"
                        href="https://halmovies.onrender.com/"
                        target="_blank">
                        <img
                            className="w-full h-full object-cover transition-all duration-200 group-hover:blur-sm group-hover:scale-105"
                            src={main}
                            alt="HAL main desktop" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-all duration-200">
                            {language === 'es' ? 'Visitar sitio' : 'Visit website'}<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                        </div>
                    </a>
                </div>
                
                <div className="w-1/2">
                    <p className="text-gray-200 mb-15">
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
                                clase='mb-4'
                                titulo='Deploy'
                                descripcion='Render' />
                        </div>

                    </div>
                </div>
        
            </article>
            <article className="flex gap-7 my-15 w-full">
                <div className="w-1/2 flex flex-col justify-between">
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
                    <article className="flex justify-end mx-10 mt-auto">
                        <BotonLink
                            enlace='https://halmovies.onrender.com/'
                            color='gray-200'/>
                    </article>

                </div>
                <div className="flex justify-between w-1/2">
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
                </div>
            </article>
        </div>
    );
};

export default HalMovies;