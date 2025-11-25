import { motion } from "framer-motion";
import BotonContacto from "@/components/botonContacto";
import { contacto } from "@/data/datosContacto";
import { useLanguage } from '@/context/langContext';
import { wavy } from '@/constants/animations';

const Contacto = () => {
    const { language } = useLanguage();

    return (
        <section id="contacto" className="min-h-[100dvh] bg-gray-900 p-10 pt-18 montserrat flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white text-shadow-md text-shadow-gray-800 my-4 text-center comfortaa">
                {language === 'es' ?
                    'Contacto' :
                    'Contact'
                }
            </h1>

            <div className="flex flex-col items-center max-w-[600px] mt-20">

                <h4 className="text-[#b86dbf] mb-5 text-center">
                    {language === 'es' ?
                        'Si te interesó mi trabajo y querés saber más, escribime. Estoy disponible para nuevos proyectos' :
                        "If you’re interested in my work and want to see more, feel free to reach out. I’m open to new projects"
                    }
                </h4>
                <div className="flex justify-between w-full">
                    {contacto.map((item, index) =>
                        <motion.div
                            key={`botonContacto-${index}`}
                            {...wavy(index)}
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