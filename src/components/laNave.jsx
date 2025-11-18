import portada from "@/assets/img/LN/la-nave.vercel.app_.png";
import carrito from "@/assets/img/LN/la-nave.vercel.app_ (5).png";
import cards from "@/assets/img/LN/la-nave.vercel.app_ (4).png";
import ItemOtros from "@/components/itemOtros";
import { useLanguage } from "@/context/langContext";

const LaNave = ({ clase }) => {
    const { language } = useLanguage();

    return (
        <div className={clase && clase}>
            <article className="flex gap-7">
                <div className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={portada}
                        alt="La Nave portada" />
                </div>
                
                <div className="w-2/3">
                    <p className="text-white mb-15">
                        E-commerce especializado en indumentaria y accesorios con temática de rock nacional argentino. Plataforma desarrollada como trabajo integrador del bootcamp Full-Stack de Educación IT. Funcionalidades avanzadas de gestión comercial y experiencia de usuario optimizada.
                    </p>
                    <div className="flex flex-col items-center">
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
            <article className="flex gap-7 my-20">
                <div className="w-2/3">
                    <p className="text-white">
                        Identidad visual de sitio alineada con la temática
                        Empleo de animaciones y carousel
                        UI intuitiva para mejor experiencia de compra
                        Diseño responsive para todos los dispositivos
                        Sistema de gestión de productos con talles
                        Visualización de precios con descuentos en tarjetas de producto
                    </p>
                </div>
                <div className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={cards}
                        alt="La Nave cards" />
                </div>
                
            
            </article>
            <article className="flex gap-7">
                <div className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={carrito}
                        alt="La Nave carrito" />
                </div>
                
                <div className="w-2/3">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default LaNave;