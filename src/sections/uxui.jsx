import Subtitulo from "@/components/subtitulo";

import mockup from "@/assets/img/veteclick/mockup.jpg";
import prototipo from "@/assets/img/veteclick/prototipo.jpg";
import uikit from "@/assets/img/veteclick/UIkit.jpg";

import video from "@/assets/video/veteclicksi.mp4"

const Uxui = () => {
    return (
        <section id="uxui" className="min-h-[100dvh] bg-gray-300 p-10 pt-18 montserrat flex flex-col items-center">
            <h1 className="text-5xl font-bold text-black text-shadow-md text-shadow-gray-400 my-4 text-center comfortaa">Proyectos de diseño UX-UI</h1>
            <div className="max-w-[1440px]">
                <Subtitulo
                    texto='App veterinaria'
                    clase='my-10' />

                <article className="flex gap-7 my-10 w-full">
                    <img
                        className="rounded-xl h-[300px] shadow-md shadow-gray-800"
                        src={mockup}
                        alt="veteclick mockup" />
                    <div className="w-full">
                        <p className="text-black">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellat, voluptates tempore dolor, provident aspernatur voluptatem perferendis pariatur reprehenderit nulla saepe accusantium dolore placeat atque eaque necessitatibus dignissimos. Veniam, adipisci.
                        </p>
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