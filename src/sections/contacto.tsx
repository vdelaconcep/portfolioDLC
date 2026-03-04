import { motion } from "framer-motion";
import BotonContacto from "@/components/botonContacto";
import { contacto } from "@/data/datosContacto";
import { useLanguage } from '@/context/langContext';
import { wavy, fadeInUp } from '@/constants/animations';
import { useMobile } from "@/context/mobileContext";

const Contacto = (): JSX.Element => {
    const { language } = useLanguage();
    const { isMobile } = useMobile();

    return (
        <section id="contacto" className={`min-h-[100dvh] bg-gray-900 flex flex-col items-center pt-18 pb-10 montserrat ${isMobile ? 'px-2' : 'px-10'}`}>
            <h1 className="text-5xl font-bold text-white text-shadow-md text-shadow-gray-800 my-4 text-center comfortaa">
                {language === 'es' ?
                    'Contacto' :
                    'Contact'
                }
            </h1>

            <div className={`flex flex-col items-center px-4  ${isMobile ? 'mt-10 w-full' : 'mt-20 max-w-[600px]'}`}>

                <h4 className={`text-[#b86dbf] text-center ${!isMobile && 'mb-5'}`}>
                    {language === 'es' ?
                        'Si te interesó mi trabajo y querés saber más, escribime. Estoy disponible para nuevos proyectos' :
                        "If you’re interested in my work and want to see more, feel free to reach out. I’m open to new projects"
                    }
                </h4>
                <div className={`flex justify-between w-full gap-4  ${isMobile && 'flex-col mt-10 items-center'}`}>
                    {contacto.map((item, index) =>
                        <motion.div
                            className="flex flex-col w-full"
                            key={`botonContacto-${index}`}
                            {...(isMobile ? fadeInUp : wavy(index))}
                        >
                        <BotonContacto
                            
                            contacto={item.contacto}
                            color={item.color || null}
                            link={item.link}
                            title={language === 'es' ? item.title.es : item.title.en}
                            />
                        </motion.div>
                    )
                    }
                </div>
                
            </div>
            
        </section>
    );
};

export default Contacto;