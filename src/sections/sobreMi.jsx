import Presentacion from "@/components/presentacion";
import Subtitulo from "@/components/subtitulo";
import ExperienciaCard from "@/components/experienciaCard";
import ItemFormacion from "@/components/itemFormacion";
import ItemOtros from "@/components/itemOtros";
import { motion } from "framer-motion";
import { experiencia, formacion, otros } from "@/data/datosEsp";
import { herramientas } from "@/data/datos";

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

const itemVariants2 = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: (delay) => ({
        x: [-50, 0],
        opacity: [0, 1],
        transition: {
            duration: 1,
            delay: delay,
            ease: "easeInOut"
        }
    })
}

const SobreMI = () => {
    return (
        <section id="about" className="bg-gradient-to-tr from-gray-800 to-gray-900 flex flex-col items-center p-10 pt-18 montserrat">
            <div className="h-full w-full p-4 pt-6 max-w-[1440px]">
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
                <div className="flex justify-between w-full mb-15">
                    {herramientas.map((item, index) => (
                        <motion.div
                            className="flex flex-col items-center"
                            key={item.titulo}
                            custom={index * 0.20}
                            variants={itemVariants2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                        >
                            <article className="bg-radial from-gray-600 to-gray-900 rounded-xl ring-1 ring-gray-600 p-2">
                                <svg
                                    width='48'
                                    height='48'
                                    fill={item.color}>
                                        <use href={`/sprite.svg#${item.titulo}`}/>
                                </svg>
                            </article>
                            <h4 className="text-white capitalize mt-3">{item.titulo}</h4>
                        </motion.div>
                    ) 

                    )}
                </div>
                <Subtitulo
                    texto='Otras habilidades'
                    clase='mb-10'
                />
                {otros.map(item => (
                    <ItemOtros
                        clase='mb-3'
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