import Presentacion from "@/components/presentacion";
import ExperienciaCard from "@/components/experienciaCard";
import { motion } from "framer-motion";

const experiencia = [
    {
        titulo: 'Técnica de laboratorio (metalografía)',
        periodo: '2023 - actual',
        items: [
            'Responsable de calidad',
            'Gestión de procedimientos y normas',
            'Organización de documentos'
        ]
    },
    {
        titulo: 'Investigadora en materiales',
        periodo: '2011 - 2023',
        items: [
            'Planificación de actividades',
            'Publicaciones en español e inglés',
            'Presentaciones en congresos'
        ]
    },
    {
        titulo: 'Profesora Universitaria',
        periodo: '2009 - 2024',
        items: [
            'Coordinación de prácticas de laboratorio',
            'Dictado de clases teóricas',
            'Corrección de trabajos prácticos'
        ]
    }
]

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
        <section id="about" className="bg-[#150C27] flex flex-col items-center p-10 pt-18 montserrat">
            <div className="h-full w-full p-4 pt-6">
                <Presentacion clase='mb-6' />
                <article className="flex mb-5 items-center gap-2">
                    <h2 className="text-[#8473FF] text-3xl whitespace-nowrap font-bold">
                        Experiencia
                    </h2>
                    <hr className="flex-1 text-gray-600" />
                </article>
                
                <div className="flex gap-3 justify-center w-full mb-15">
                    
                    {experiencia.map((trabajo, index) => (
                        <motion.div
                            key={index}
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
                <article className="flex mb-5 items-center gap-2">
                    <h2 className="text-[#8473FF] text-3xl whitespace-nowrap font-bold">
                        Formación
                    </h2>
                    <hr className="flex-1 text-gray-600" />
                </article>
                <article className="flex mb-5 items-center gap-2">
                    <h2 className="text-[#8473FF] text-3xl whitespace-nowrap font-bold">
                        Herramientas de trabajo
                    </h2>
                    <hr className="flex-1 text-gray-600" />
                </article>
                
            </div>
            
        </section>
    )
};

export default SobreMI;