import mainDesktop from "@/assets/img/AAAL/aaal-beta.vercel.app_.png";
import formulario from "@/assets/img/AAAL/aaal-beta.vercel.app_ (2).png";
import mensajes from "@/assets/img/AAAL/aaal-beta.vercel.app_ (3).png";
import galeria from "@/assets/img/AAAL/aaal-beta.vercel.app_ (4).png";
import ItemOtros from "@/components/itemOtros";
import BotonLink from "@/components/botonLink";
import { useLanguage } from "@/context/langContext";
import { motion } from "framer-motion";
import { fadeInUp } from '@/constants/animations';
import { useMobile } from "@/context/mobileContext";
import VerSitioMobile from "@/components/verSitioMobile";

const Aaal = ({ clase }) => {
    const { language } = useLanguage();
    const { isMobile } = useMobile();
    const invitacion = language === 'es' ? 'Ir al sitio web' : 'Go to website'

    return (
        <div className={clase && clase}>
            <article className={`flex w-full items-center ${isMobile ? 'flex-col' : 'gap-7'}`}>
                <motion.div
                    {...fadeInUp}
                    className={`rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700 bg-cover bg-center overflow-hidden group relative ${isMobile ? 'w-full' : 'w-1/3'}`}>
                    <a
                        className="block"
                        href="https://aaal-beta.vercel.app/"
                        target="_blank">
                        <img
                            className="w-full h-full object-cover transition-all duration-200 group-hover:blur-sm group-hover:scale-105"
                            src={mainDesktop}
                            alt="AAAL home desktop" />
                        {isMobile ?
                            <div className="absolute bottom-0 right-0 z-50000">
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

                <div className={isMobile ? 'w-full' : 'w-2/3'}>
                    <p className={`text-gray-200 mb-7 ${isMobile ? 'mt-10' : 'mb-7'}`}>
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
                                clase={!isMobile && 'mb-4'}
                                titulo='Deploy'
                                descripcion='Vercel, Render' />
                        </div>

                    </div>
                </div>
            </article>

            <article className={`flex mt-10 w-full ${isMobile ? 'flex-col' : 'gap-7'}`}>
                <motion.div
                    {...fadeInUp}
                    className={`w-full flex gap-2 justify-between ${!isMobile && 'hidden'}`}>
                    <img
                        className="rounded-xl flex-1 h-auto min-w-0 object-contain shadow-md shadow-gray-400 border-3 border-gray-800"
                        src={formulario}
                        alt="AAAL formulario mobile" />
                    <img
                        className="rounded-xl flex-1 h-auto min-w-0 object-contain shadow-md shadow-gray-400 border-3 border-gray-800"
                        src={mensajes}
                        alt="AAAL mensajes mobile" />
                    <img
                        className="rounded-xl flex-1 h-auto min-w-0 object-contain shadow-md shadow-gray-400 border-3 border-gray-800"
                        src={galeria}
                        alt="AAAL galeria mobile" />
                </motion.div>
                <div className={`flex flex-col justify-between ${isMobile ? 'w-full mt-10' : 'w-1/2'}`}>
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
                    <article className={`flex justify-end  ${isMobile ? 'mt-5 flex-col' : 'mx-10 mt-auto'}`}>
                        <BotonLink
                            texto={invitacion}
                            enlace='https://aaal-beta.vercel.app/'
                            color='gray-200' />
                    </article>
                </div>
                <motion.div
                    {...fadeInUp}
                    className={`flex justify-between w-1/2 ${isMobile && 'hidden'}`}>
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
                </motion.div>
            </article>
        </div>
    );
};

export default Aaal;