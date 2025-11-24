import Subtitulo from "@/components/subtitulo";
import ItemOtros from "@/components/itemOtros";
import BotonLink from "@/components/botonLink";

import mockup from "@/assets/img/veteclick/mockup.jpg";

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

                <div className="flex gap-7 my-10 w-full items-center">
                    
                    <article className="w-full">
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
                                    descripcion={language === 'es' ? 'En alta, media y baja definición / Pruebas de usabilidad' : 'Low-, mid-, and high-fi prototypes + usability testing'} />

                                <ItemOtros
                                    clase='mb-4'
                                    titulo='UI kit'
                                    link='#'
                                    linkName={language === 'es' ? 'Ver UI Kit en Figma' : 'Go to UI Kit in Figma'} />
                            </div>

                        </div>
                    </article>
                    <article
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
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-all duration-200 p-5">
                                <span>{language === 'es' ? 'Ver wireframes en Figma' : 'See wireframes in Figma'}<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i></span>

                            </div>
                        </a>
                    </article>

                </div>

                <div className="flex gap-7 my-10">
                    <article className="overflow-hidden h-[363px] w-[210px] rounded-3xl relative ring-2 ring-black">
                        <video src={video} autoPlay loop muted className="scale-117 absolute top-1/2 right-1/2 translate-x-[109px] -translate-y-[169px]" ></video>
                    </article>
                    <div className="flex-1 w-full flex flex-col justify-between">
                    <ul>
                        {language === 'es' ?
                            <>
                                <li className="mb-5"><b>Aplicación de grillas</b> para garantizar la consistencia visual</li>
                                <li className="mb-5"><b>Elección de paleta de colores</b> de acuerdo a la temática de la app, aplicando reglas de diseño</li>
                                <li className="mb-5"><b>Empleo de bibliotecas de la comunidad de Figma</b> para íconos y algunos componentes</li>
                                <li className="mb-5">Diseño de componentes con <b>empleo de variables en Figma</b></li>
                                <li className="mb-5">Testeo de pantallas principales con <b>usuarios reales</b> para identificar y corregir problemas</li>
                            </>
                            : <>
                                <li className="mb-5"><b>Grid system implementation</b> to ensure visual consistency</li>
                                <li className="mb-5"><b>Color palette selection</b> according to the app's theme, applying design principles</li>
                                <li className="mb-5"><b>Use of Figma Community libraries</b> for icons and some components</li>
                                <li className="mb-5">Component design with <b>Figma variables implementation</b></li>
                                <li className="mb-5">Testing of main screens with <b>real users</b> to identify and fix issues</li>
                            </>
                        }

                        </ul>
                        <article className="flex gap-5 justify-end mt-auto">
                            <BotonLink
                                enlace='https://www.figma.com/design/VjjO2uZo4a5xFHAkgdUpVJ/Equipo-11---veteClick---wireframes?node-id=0-1&t=OBKQjiLyTZIUSveC-1'
                                color='gray-800'
                                texto={{
                                    es: 'Ver wireframes',
                                    en: 'Wireframes'
                                }} />
                            <BotonLink
                                enlace='https://www.figma.com/proto/VjjO2uZo4a5xFHAkgdUpVJ/Equipo-11---veteClick---wireframes?node-id=1-1250&t=sxMmiInhuReBR6pq-1'
                                color='gray-800'
                                texto={{
                                    es: 'Ver prototipo',
                                    en: 'Prototype'
                                }}/>
                        </article>

                    </div>
                    
                </div>
                
                
                
            </div>
        </section>
    );
};

export default Uxui;