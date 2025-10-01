import Presentacion from "@/components/presentacion";
import ExperienciaCard from "@/components/experienciaCard";

const experiencia = [
    {
        titulo: 'Técnica de Laboratorio',
        periodo: '2023 - actual',
        items: [
            'Preparación de ractivos',
            'Otra cosa que hago',
            'Otra cosa que hago',
            'Otra cosa más'
        ]
    },
    {
        titulo: 'Investigadora en Materiales',
        periodo: '2011 - 2023',
        items: [
            'Preparación de ractivos',
            'Otra cosa que hago',
            'Otra cosa que hago',
            'Otra cosa más'
        ]
    },
    {
        titulo: 'Profesora Universitaria',
        periodo: '2009 - 2024',
        items: [
            'Preparación de ractivos',
            'Otra cosa que hago',
            'Otra cosa que hago',
            'Otra cosa más'
        ]
    }
]

const SobreMI = () => {
    return (
        <section id="about" className="bg-[#03121D] flex flex-col items-center p-10">
            <div className="border-pink-300 border-4 rounded-4xl h-full w-full p-4 pt-6">
                <Presentacion clase='mb-6' />
                <h2 className="text-pink-300 text-3xl coolvetica text-center">
                    Experiencia
                </h2>
                <hr className="mb-4 text-pink-300"/>
                <div className="flex gap-3 justify-center w-full">
                    
                    {experiencia.map((trabajo => 
                        <ExperienciaCard
                            titulo={trabajo.titulo}
                            periodo={trabajo.periodo}
                            items={trabajo.items} />
                    ))}
                </div>
                
            </div>
            
        </section>
    )
};

export default SobreMI;