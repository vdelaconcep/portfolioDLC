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
            <article className="flex gap-7 my-10">
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
                        {language === 'es' ? 'E-commerce especializado en indumentaria y accesorios con temática de rock nacional argentino. Plataforma desarrollada como trabajo integrador del bootcamp Full-Stack de Educación IT. Funcionalidades avanzadas de gestión comercial y experiencia de usuario optimizada.'
                            : "E-commerce specialized in clothes and accessories with Argentine rock music theme. Platform developed as the final project for Educación IT's Full-Stack bootcamp. Advanced commercial management features and optimized user experience."}
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

            <article className="flex gap-7 my-10 w-full">
                <div className="w-1/2">
                    <ul className="text-gray-200">
                        {language === 'es' ?
                            <>
                                <li className="mb-5"><b>Identidad visual</b> de sitio alineada con la temática</li>
                                <li className="mb-5">Empleo de <b>animaciones y carousel</b></li>
                                <li className="mb-5"><b>UI intuitiva</b> para mejor experiencia de compra</li>
                                <li className="mb-5"><b>Diseño responsive</b> para todos los dispositivos</li>
                                <li className="mb-5">Sistema de gestión de <b>productos con talles</b></li>
                                <li className="mb-5">Visualización de <b>precios con descuentos</b> en tarjetas de producto</li>
                            </>
                            : <>
                                <li className="mb-5"><b>Visual identity</b> that captures the rock aesthetic</li>
                                <li className="mb-5"><b>Animations and carousels</b></li>
                                <li className="mb-5"><b>Intuitive UI</b> for enhaced shoping experience</li>
                                <li className="mb-5"><b>Responsive design</b> for all devices</li>
                                <li className="mb-5">Product managment sistems with <b>sizes</b></li>
                                <li className="mb-5">Price display with <b>discounts</b> on product cards</li>
                            </>
                        }

                    </ul>
                    <article className="flex justify-center">
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