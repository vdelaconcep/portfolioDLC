import portada from "@/assets/img/LN/la-nave.vercel.app_.png";
import carrito from "@/assets/img/LN/la-nave.vercel.app_ (5).png";
import cards from "@/assets/img/LN/la-nave.vercel.app_ (4).png";
import admin from "@/assets/img/LN/la-nave.vercel.app_ (6).png"
import ItemOtros from "@/components/itemOtros";
import BotonLink from "@/components/botonLink";
import { useLanguage } from "@/context/langContext";
import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/animations";

const LaNave = ({ clase }) => {
    const { language } = useLanguage();

    return (
        <div className={`max-w-full ${clase && clase}`}>
            <article className="flex gap-7 items-center">
                <motion.div
                    {...fadeInUp}
                    className="w-1/3 rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700 bg-cover bg-center overflow-hidden group relative">
                    <a
                        className="block"
                        href="https://la-nave.vercel.app/"
                        target="_blank">
                        <img
                            className="w-full h-full object-cover transition-all duration-200 group-hover:blur-sm group-hover:scale-105"
                            src={portada}
                            alt="La Nave portada" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-all duration-200">
                            {language === 'es' ? 'Visitar sitio' : 'Visit website'}<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                        </div>
                    </a>
                </motion.div>
                
                <div className="w-2/3">
                    <p className="text-gray-200 mb-6">
                        {language === 'es' ? 'E-commerce especializado en indumentaria y accesorios con temática de rock nacional argentino. Plataforma desarrollada como trabajo integrador del bootcamp Full-Stack de Educación IT. Funcionalidades avanzadas de gestión comercial y experiencia de usuario optimizada.'
                        : "E-commerce specialized in clothes and accessories with Argentine rock music theme. Platform developed as the final project for Educación IT's Full-Stack bootcamp. Advanced commercial management features and optimized user experience."}
                    </p>
                    <div className="flex flex-col items-center text-gray-200">
                        <div>
                            <ItemOtros
                                clase='mb-4'
                                titulo='Frontend'
                                descripcion='React, Vite, CSS/Bootstrap' />

                            <ItemOtros
                                clase='mb-4'
                                titulo='Backend'
                                descripcion='Node.js, Express' />

                            <ItemOtros
                                clase='mb-4'
                                titulo={language === 'es' ? 'Base de datos' : 'Database'}
                                descripcion='MongoDB/Atlas' />

                            <ItemOtros
                                clase='mb-4'
                                titulo='Deploy'
                                descripcion='Vercel, Render' />
                        </div>
                        
                    </div>
                </div>
            </article>
            <article className="flex gap-7 my-15 items-center">
                <div className="w-1/3 flex items-center">
                    <ul className="text-gray-200">
                        {language === 'es' ? 
                            <>
                                <li className="mb-5"><b>Identidad visual</b> de sitio alineada con la temática</li>
                                <li className="mb-5">Empleo de <b>animaciones y carousel</b></li>
                                <li className="mb-5"><b>Diseño responsive</b> para todos los dispositivos</li>
                                <li className="mb-5">Sistema de gestión de <b>productos con talles</b></li>
                                <li>Visualización de <b>precios con descuentos</b> en tarjetas de producto</li>
                            </>    
                            : <>
                                <li className="mb-5"><b>Visual identity</b> that captures the rock aesthetic</li>
                                <li className="mb-5"><b>Animations and carousels</b></li>
                                <li className="mb-5"><b>Responsive design</b> for all devices</li>
                                <li className="mb-5">Product managment sistems with <b>sizes</b></li>
                                <li>Price display with <b>discounts</b> on product cards</li>
                            </>
                        }
                        
                    </ul>
                </div>
                <motion.div
                    {...fadeInUp}
                    className="w-2/3 flex items-center gap-4">
                    <div className="flex-shrink min-w-0">
                        <img
                            className="flex-none h-auto max-w-full object-contain rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                            src={carrito}
                            alt="La Nave carrito" />
                    </div>
                    <div className="flex-shrink min-w-0">
                        <img
                            className="flex-none h-auto max-w-full object-contain rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                            src={cards}
                            alt="La Nave cards" />
                    </div>    
                        
                    
                </motion.div>
                
            
            </article>
            <article className="flex gap-7">
                <motion.div
                    {...fadeInUp}
                    className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={admin}
                        alt="La Nave panel administrador" />
                </motion.div>
                
                <div className="w-2/3 flex flex-col justify-between">
                    <ul className="text-gray-200">
                    {language === 'es' ? 
                        <>
                                <li className="mb-5"><b>Cálculo automático del total</b> con descuentos</li>
                                <li className="mb-5"><b>Cálculo de costos de envío</b> según la zona geográfica</li>
                                <li className="mb-5">Envío automático de <b>e-mail de confirmación de compra</b></li>
                                <li><b>Panel de administrador</b> para gestión de precios, stock y compras realizadas, con servicio de mensajería</li>
                        </> :
                        <>
                                <li className="mb-5"><b>Automatic total calculation</b> with discounts</li>
                                <li className="mb-5"><b>Shipping cost calculation</b> based on geographic zone</li>
                                <li className="mb-5">Automatic <b>purchase confirmation email</b></li>
                                <li><b>Admin panel</b> for managing prices, inventory, and completed purchases, with messaging service</li>
                        </>
                    }
                    </ul>
                
                    <div className="flex justify-end mx-10 mt-auto">
                    <BotonLink
                        enlace='https://la-nave.vercel.app/'
                        color='gray-200'/>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default LaNave;
