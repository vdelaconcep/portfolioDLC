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
                        {language === 'es' ? 'E-commerce especializado en indumentaria y accesorios con temática de rock nacional argentino. Plataforma desarrollada como trabajo integrador del bootcamp Full-Stack de Educación IT. Funcionalidades avanzadas de gestión comercial y experiencia de usuario optimizada.'
                        : "E-commerce specialized in clothes and accessories with Argentine rock music theme. Platform developed as the final project for Educación IT's Full-Stack bootcamp. Advanced commercial management features and optimized user experience."}
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
                        {language === 'es' ? `Identidad visual de sitio alineada con la temática
                        Empleo de animaciones y carousel
                        UI intuitiva para mejor experiencia de compra
                        Diseño responsive para todos los dispositivos
                        Sistema de gestión de productos con talles
                        Visualización de precios con descuentos en tarjetas de producto` : 
                        `Visual identity that captures the rock aesthetic
                        Animations and carousels
                        Intuitive UI for enhaced shoping experience
                        Responsive design for all devices
                        Product managment sistems with sizes
                        Price display with discounts on product cards`}
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
                        {language === 'es' ? `Cálculo automático del total con descuentos
                        Cálculo de costos de envío según la zona geográfica
                        Envío automático de e-mail de confirmación de compra
                        Panel de administrador para gestión de precios, stock y compras realizadas, con servicio de mensajería` :
                        `Automatic total calculation with discounts
                        Shipping cost calculation based on geographic zone
                        Automatic purchase confirmation email
                        Admin panel for managing prices, inventory, and completed purchases, with messaging service`}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default LaNave;
