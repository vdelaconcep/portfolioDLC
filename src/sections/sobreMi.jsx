import Presentacion from "@/components/presentacion";
import Subtitulo from "@/components/subtitulo";
import ExperienciaCard from "@/components/experienciaCard";
import ItemFormacion from "@/components/itemFormacion";
import { motion } from "framer-motion";
import { experiencia, formacion } from "@/data/datosEsp";

const itemVariants = {
    hidden: {
        y: 0,
        opacity: 0
    },
    visible: (delay) => ({
        y: [0, -20, 0],
        opacity: [0, 1, 1],
        transition: {
            duration: 1,
            delay: delay,
            ease: "easeInOut",
            times: [0, 0.5, 1]
        }
    })
}

const SobreMI = () => {
    return (
        <section id="about" className="bg-gradient-to-tr from-gray-800 to-gray-900 flex flex-col items-center p-10 pt-18 montserrat">
            <div className="h-full w-full p-4 pt-6">
                <Presentacion clase='mb-15' />
                <Subtitulo
                    texto='Experiencia'
                    clase='mb-10'
                />
                
                <div className="flex gap-3 justify-center w-full mb-15">
                    
                    {experiencia.map((trabajo, index) => (
                        <motion.div
                            key={trabajo.titulo}
                            custom={index * 0.20}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            className="flex-1"
                        >
                            <ExperienciaCard
                                titulo={trabajo.titulo}
                                periodo={trabajo.periodo}
                                items={trabajo.items} />
                        </motion.div>    
                        
                    ))}
                </div>

                <Subtitulo
                    texto='Formación'
                    clase='mb-10'
                />
                <div className="grid grid-cols-3 gap-4 w-full mb-15">
                    {formacion.map((item, index) => (
                        <motion.div
                            key={item.titulo}
                            custom={index * 0.20}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            className="flex-1"
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
                    texto='Herramientas utilizadas'
                    clase='mb-10'
                />
                <Subtitulo
                    texto='Otras habilidades'
                    clase='mb-10'
                />
                
            </div>
            
        </section>
    )
};

export default SobreMI;