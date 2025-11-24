import Subtitulo from "@/components/subtitulo";
import ItemOtros from "@/components/itemOtros";

import mockup from "@/assets/img/veteclick/mockup.jpg";
import prototipo from "@/assets/img/veteclick/prototipo.jpg";
import uikit from "@/assets/img/veteclick/UIkit.jpg";

import video from "@/assets/video/veteclicksi.mp4";

import { useLanguage } from "@/context/langContext";

const Uxui = () => {
    const { language } = useLanguage();

    return (
        <section id="uxui" className="min-h-[100dvh] bg-gray-300 p-10 pt-18 montserrat flex flex-col items-center">
            <h1 className="text-5xl font-bold text-black text-shadow-md text-shadow-gray-400 my-4 text-center comfortaa">{ language === 'es' ? 'Proyectos de diseño UX-UI' : 'UX/UI Design Projects'}</h1>
            <div className="max-w-[1440px] h-full w-full px-4">
                <Subtitulo
                    texto={language === 'es' ? 'App veterinaria' : 'Veterinary app'}
                    clase='my-10' />

                <article className="flex gap-7 my-10 w-full items-center">
                    <div
                        className="w-1/3 aspect-[688/836] rounded-xl shadow-md shadow-gray-800 bg-cover bg-center overflow-hidden group relative">
                        <a
                            className="block"
                            href="https://www.figma.com/design/VjjO2uZo4a5xFHAkgdUpVJ/Equipo-11---veteClick---wireframes?node-id=0-1&t=OBKQjiLyTZIUSveC-1"
                            target="_blank">
                            <img
                                className="w-full h-full object-cover transition-all duration-200 group-hover:blur-sm group-hover:scale-105"
                                src={mockup}
                                alt="Veteclick mockup" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-all duration-200">
                                {language === 'es' ? 'Ir a Figma' : 'Go to Figma'}<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                            </div>
                        </a>
                    </div>
                    <div className="w-full">
                        <p className="text-black">
                            {language === 'es' ?
                                'Aplicación de atención veterinaria online como proyecto final de la diplomatura en desarrollo UX/UI de la UTN. Incluye investigación y diseño centrado en el usuario, además del desarrollo del ‘happy path’ de la interfaz en Figma.' :
                                'Online veterinary care app as the final project for the UX/UI development diploma at UTN. The work included user-centered research and design, as well as developing the interface’s ‘happy path’ in Figma'
                            }
                        </p>
                        <div className="flex flex-col items-center mt-10">
                            <div>
                                <ItemOtros
                                    clase='mb-4'
                                    titulo={language === 'es' ? 'Investigación' : 'Research'}
                                    descripcion={language === 'es' ? 'Benchmarking, mapa de empatía, entrevistas y POV' : 'Benchmark, empathy map, interviews and POV'} />

                                <ItemOtros
                                    clase='mb-4'
                                    titulo={language === 'es' ? 'Arquitectura de la app' : 'App architecture'}
                                    descripcion={language === 'es' ? 'Cardsorting, mapa del sitio, wireframes' : 'Cardsorting, site map, wireframes'} />

                                <ItemOtros
                                    clase='mb-4'
                                    titulo={language === 'es' ? 'Prototipos' : 'Prototypes'}
                                    descripcion='En alta, media y baja definición / Pruebas de usabilidad' />

                                <ItemOtros
                                    clase='mb-4'
                                    titulo='UI kit' />
                            </div>

                        </div>
                    </div>

                </article>

                <img
                    className="rounded-xl w-full shadow-md shadow-gray-800 my-10"
                    src={prototipo}
                    alt="veteclick prototipo" />

                <article className="flex gap-7 my-10">
                    <div className="w-full">
                        <p className="text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                        </p>
                    </div>
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-400 ov"
                        src={uikit}
                        alt="veteclick UI kit" />

                </article>
                    <article className="overflow-hidden h-[363px] w-[210px] rounded-3xl relative ring-2 ring-black">
                    <video src={video} autoPlay loop muted className="scale-117 absolute top-1/2 right-1/2 translate-x-[109px] -translate-y-[169px]" ></video>
                </article>
                
                
            </div>
        </section>
    );
};

export default Uxui;