import mainDesktop from "@/assets/img/AAAL/aaal-beta.vercel.app_.png";
import formulario from "@/assets/img/AAAL/aaal-beta.vercel.app_ (2).png";
import mensajes from "@/assets/img/AAAL/aaal-beta.vercel.app_ (3).png";
import galeria from "@/assets/img/AAAL/aaal-beta.vercel.app_ (4).png";
import ItemOtros from "@/components/itemOtros";
import BotonLink from "@/components/botonLink";
import { useLanguage } from "@/context/langContext";

const Aaal = ({ clase }) => {
    const { language } = useLanguage();

    return (
        <div className={clase && clase}>
            <article className="flex gap-7 mb-15 items-center">
                <div
                    className="w-1/3 rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700 bg-cover bg-center overflow-hidden group relative">
                    <a
                        className="block"
                        href="https://aaal-beta.vercel.app/"
                        target="_blank">
                        <img
                            className="w-full h-full object-cover transition-all duration-200 group-hover:blur-sm group-hover:scale-105"
                            src={mainDesktop}
                            alt="AAAL home desktop" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-all duration-200">
                            {language === 'es' ? 'Visitar sitio' : 'Visit website'}<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                        </div>
                    </a>
                </div>

                <div className="w-2/3">
                    <p className="text-gray-200 mb-15">
                        {language === 'es' ? 'Sitio web institucional del Club Asociación de Automóviles Antiguos de Lanús que incluye novedades, historia, eventos, avisos clasificados, galería de fotos y catálogo de automóviles.'
                            : "Institutional website for the Club Asociación de Automóviles Antiguos de Lanús featuring news, history, events, classified ads, photo gallery, and car catalog."}
                    </p>
                    <div className="flex flex-col items-center text-gray-200">
                        <div>
                            <ItemOtros
                                clase='mb-4'
                                titulo='Frontend'
                                descripcion='React, Vite, CSS/Tailwind' />

                            <ItemOtros
                                clase='mb-4'
                                titulo='Backend'
                                descripcion='Node.js, Express' />

                            <ItemOtros
                                clase='mb-4'
                                titulo={language === 'es' ? 'Base de datos' : 'Database'}
                                descripcion='MySQL' />

                            <ItemOtros
                                clase='mb-4'
                                titulo='Deploy'
                                descripcion='Vercel, Render' />
                        </div>

                    </div>
                </div>
            </article>

            <article className="flex gap-7 mt-10 w-full">
                <div className="w-1/2 flex flex-col justify-between">
                    <ul className="text-gray-200">
                        {language === 'es' ?
                            <>
                                <li className="mb-5"><b>Diseño visual</b> con marcada identidad institucional</li>
                                <li className="mb-5">Implementación de <b>animaciones con Framer-motion</b></li>
                                <li className="mb-5"><b>Panel de administración</b> para gestión autónoma de contenido</li>
                                <li className="mb-5"><b>Filtros</b> en galería de fotos y catálogo de automóviles</li>
                                <li className="mb-5"><b>Interfaz intuitiva</b> facilita interacción con la comunidad</li>
                            </>
                            : <>
                                <li className="mb-5"><b>Visual design</b> with strong institutional identity</li>
                                <li className="mb-5">Implementation of <b>animations with Framer Motion</b></li>
                                <li className="mb-5"><b>Admin panel</b> for autonomous content management</li>
                                <li className="mb-5"><b>Filters</b> in photo gallery and car catalog</li>
                                <li className="mb-5"><b>Intuitive interface</b> that facilitates interaction with community</li>
                            </>
                        }

                    </ul>
                    <article className="flex justify-end mx-10 mt-auto">
                        <BotonLink
                            enlace='https://aaal-beta.vercel.app/'
                            color='gray-200' />
                    </article>
                </div>
                <div className="flex justify-between w-1/2">
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                        src={formulario}
                        alt="AAAL formulario mobile" />
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                        src={mensajes}
                        alt="AAAL mensajes mobile" />
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                        src={galeria}
                        alt="AAAL galeria mobile" />
                </div>
            </article>
        </div>
    );
};

export default Aaal;