import Presentacion from "@/components/presentacion";
import Subtitulo from "@/components/subtitulo";
import ExperienciaCard from "@/components/experienciaCard";
import ItemFormacion from "@/components/itemFormacion";
import { motion } from "framer-motion";
import logoUBA from '@/assets/img/UBA.png';
import logoUTN from '@/assets/img/UTN.png';
import logoEIT from '@/assets/img/EIT.svg'


const experiencia = [
    {
        titulo: 'Técnica de laboratorio (metalografía)',
        periodo: '2023 - actual',
        items: [
            'Responsable de calidad',
            'Gestión de procedimientos y normas'
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

const formacion = [
    {
        imagen: logoUTN,
        titulo: 'Diplomatura en desarrollo UX/UI',
        institucion: 'UTN-FRBA',
        sub: 'Ver certificado',
        certificado: 'https://validator.centrodeelearning.com/validator/d066cc46-16cd-4c15-a51f-47cb8f269e59'
    },
    {
        imagen: logoEIT,
        titulo: 'Full-Stack Engineer',
        institucion: 'Educación IT',
        sub: 'Ver certificado',
        certificado: 'https://www.educacionit.com/perfil/valeria-de-la-concepcion-maria-1033137/certificado/73594?_gl'
    },
    {
        imagen: logoUBA,
        titulo: 'Ingeniería mecánica',
        institucion: 'Facultad de Ingeniería, UBA',
        sub: 'Tesis pendiente'
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
                <Subtitulo
                    texto='Experiencia'
                    clase='mb-10'
                />
                
                <div className="flex gap-3 justify-center w-full mb-10">
                    
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
                <div className="grid grid-cols-3 gap-4 w-full mb-10">
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