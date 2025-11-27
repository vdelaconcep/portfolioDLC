import Presentacion from "@/components/presentacion";
import Subtitulo from "@/components/subtitulo";
import ExperienciaCard from "@/components/experienciaCard";
import ItemFormacion from "@/components/itemFormacion";
import ItemOtros from "@/components/itemOtros";
import { motion } from "framer-motion";
import { resumen, experiencia, formacion, otros, herramientas } from "@/data/datosSobreMi";
import { useLanguage } from "@/context/langContext";
import { wavy, drag } from "@/constants/animations";
import { useMobile } from '../context/mobileContext';

const SobreMI = () => {
    const { language } = useLanguage();
    const { isMobile } = useMobile();

    return (
        <section id="about" className={`bg-gradient-to-tr from-gray-800 to-gray-900 flex flex-col items-center pt-18 montserrat ${isMobile ? 'px-2 pb-15' : 'px-10 pb-10'}`}>
            <div className="h-full w-full p-4 pt-6 max-w-[1440px]">
                <Presentacion
                    titulo={language === 'es' ? 'Sobre mí' : 'About me'}
                    texto={language === 'es' ? resumen.es : resumen.en}
                    clase='mb-15' />
                <Subtitulo
                    texto={language === 'es' ? 'Experiencia' : 'Working experience'}
                    clase='mb-10'
                />
                
                <div className={`flex gap-3 justify-center w-full mb-15 ${isMobile && 'flex-col items-center'}`}>
                    
                    {experiencia[language].map((trabajo, index) => (
                        <motion.div
                            key={`exp-${index}`}
                            className="flex-1"
                            {...(isMobile ? drag : wavy(index))}
                        >
                            <ExperienciaCard
                                titulo={trabajo.titulo}
                                periodo={trabajo.periodo}
                                items={trabajo.items} />
                        </motion.div>    
                        
                    ))}
                </div>

                <Subtitulo
                    texto={language === 'es' ? 'Formación' : 'Education & training'}
                    clase='mb-10'
                />
                <div className={`w-full mb-15 ${isMobile ? 'flex flex-col gap-3' : 'grid grid-cols-3 gap-4'}`}>
                    {formacion[language].map((item, index) => (
                        <motion.div
                            key={`form-${index}`}
                            className="flex-1"
                            {...(isMobile ? drag : wavy(index))}
                        >
                        <ItemFormacion
                            imagen={item.imagen}
                            titulo={item.titulo}
                            institucion={item.institucion}
                            sub={item.sub}
                            certificado={item.certificado ? item.certificado : null} />
                        </motion.div>)
                    )}
                </div>
                <Subtitulo
                    texto={language === 'es' ? 'Herramientas utilizadas' : 'Work tools'}
                    clase='mb-10'
                />
                <div className={`w-full mb-15 ${isMobile ? 'grid grid-cols-3' : 'flex justify-between'}`}>
                    {herramientas.map((item, index) => (
                        <motion.div
                            className={`flex flex-col items-center ${isMobile && 'mb-5'}`}
                            key={`herramienta-${index}`}
                            {...drag(index)}
                        >
                            <article className="bg-radial from-gray-600 to-gray-900 rounded-xl ring-1 ring-gray-600 p-2">
                                <svg
                                    width='48'
                                    height='48'
                                    fill={item.color}>
                                        <use href={`/sprite.svg#${item.titulo}`}/>
                                </svg>
                            </article>
                            <h4 className={`text-white capitalize ${isMobile ? 'mt-1' : 'mt-3'}`}>{item.titulo}</h4>
                        </motion.div>
                    ) 

                    )}
                </div>
                <Subtitulo
                    texto={language === 'es' ? 'Otras habilidades' : 'Other skills'}
                    clase='mb-10'
                />
                {otros[language].map((item, index) => (
                    <ItemOtros
                        key={`OtherSkills-${index}`}
                        clase='mb-3 text-white'
                        titulo={item.titulo}
                        descripcion={item.descripcion}
                        certificado={item.certificado} />
                ))

                }
                
            </div>
            
        </section>
    )
};

export default SobreMI;