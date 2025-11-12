import Subtitulo from "@/components/subtitulo";

import portada from "@/assets/img/LN/la-nave.vercel.app_.png";
import carrito from "@/assets/img/LN/la-nave.vercel.app_ (5).png";
import login from "@/assets/img/LN/la-nave.vercel.app_ (6).png";
import cards from "@/assets/img/LN/la-nave.vercel.app_ (4).png";
import admin from "@/assets/img/LN/la-nave.vercel.app_ (8).png";
import main from "@/assets/img/HAL/halmovies.onrender.com_catalog.png";
import portadaMobile from "@/assets/img/HAL/halmovies.onrender.com_.png";
import mainMobile from "@/assets/img/HAL/halmovies.onrender.com_ (1).png";
import detalleMobile from "@/assets/img/HAL/halmovies.onrender.com_ (2).png";

import mainDesktop from "@/assets/img/AAAL/aaal-beta.vercel.app_.png";
import formulario from "@/assets/img/AAAL/aaal-beta.vercel.app_ (2).png";
import mensajes from "@/assets/img/AAAL/aaal-beta.vercel.app_ (3).png";
import galeria from "@/assets/img/AAAL/aaal-beta.vercel.app_ (4).png";

const FullStack = () => {
    return (
        <section id="fullstack" className="min-h-[100dvh] bg-gradient-to-tr from-[#1f1239] to-black p-10 pt-18 montserrat flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white text-shadow-md text-shadow-gray-900 my-4 text-center comfortaa">Proyectos Full-Stack</h1>
            <div className="max-w-[1440px]">
                <Subtitulo
                    texto='Tienda de ropa'
                    clase='my-10' />
                <article className="flex gap-7 my-10">
                    <div className="w-1/3">
                        <img
                            className="rounded-xl shadow-md shadow-gray-400"
                            src={portada}
                            alt="La Nave portada" />
                    </div>
                    
                    <div className="w-2/3">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                        </p>
                    </div>
                </article>
                <article className="flex gap-7 my-10">
                    <div className="w-2/3">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                        </p>
                    </div>
                    <div className="w-1/3">
                        <img
                            className="rounded-xl shadow-md shadow-gray-400"
                            src={cards}
                            alt="La Nave cards" />
                    </div>
                    

                </article>
                <article className="flex gap-7 my-10">
                    <div className="w-1/3">
                        <img
                            className="rounded-xl shadow-md shadow-gray-400"
                            src={carrito}
                            alt="La Nave carrito" />
                    </div>
                    
                    <div className="w-2/3">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                        </p>
                    </div>
                </article>
                <article className="flex gap-7 my-10">
                    <div className="w-2/3">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                        </p>
                    </div>
                    <div className="w-1/3">
                        <img
                            className="rounded-xl shadow-md shadow-gray-400"
                            src={login}
                            alt="La Nave login" />
                    </div>
                    

                </article>
                <article className="flex gap-7 my-10">
                    <div className="w-1/3">
                        <img
                            className="rounded-xl shadow-md shadow-gray-400"
                            src={admin}
                            alt="La Nave admin" />
                    </div>
                    
                    <div className="w-2/3">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                        </p>
                    </div>
                </article>

                <Subtitulo
                    texto='Plataforma de películas'
                    clase='mt-20 mb-10' />

                <article className="flex gap-7 my-10 w-full">
                    <div className="w-1/2">
                        <img
                            className="rounded-xl shadow-md shadow-gray-400"
                            src={main}
                            alt="HAL main desktop" />
                    </div>
                    
                    <div className="w-1/2">
                        <p className="text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellat, voluptates tempore dolor, provident aspernatur voluptatem perferendis pariatur reprehenderit nulla saepe accusantium dolore placeat atque eaque necessitatibus dignissimos. Veniam, adipisci.
                        </p>
                    </div>

                </article>
                <article className="flex gap-7 my-10 w-full">
                    <div className="w-1/2">
                        <p className="text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellat, voluptates tempore dolor, provident aspernatur voluptatem perferendis pariatur reprehenderit nulla saepe accusantium dolore placeat atque eaque necessitatibus dignissimos. Veniam, adipisci.
                        </p>
                    </div>
                    <div className="flex justify-between w-1/2">
                        <img
                            className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                            src={portadaMobile}
                            alt="HAL portada mobile" />
                        <img
                            className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                            src={mainMobile}
                            alt="HAL main mobile" />
                        <img
                            className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                            src={detalleMobile}
                            alt="HAL detalle mobile" />
                    </div>
                </article>



                <Subtitulo
                    texto='Proyecto en desarrollo'
                    clase='mt-20 mb-10' />

                <article className="flex gap-7 my-10">
                    <div className="w-1/3">
                        <img
                            className="rounded-xl shadow-md shadow-gray-400"
                            src={mainDesktop}
                            alt="AAAL home desktop" />
                    </div>
                    
                    <div className="w-2/3">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                        </p>
                    </div>
                </article>

                <article className="flex gap-7 my-10 w-full">
                    <div className="w-1/2">
                        <p className="text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellat, voluptates tempore dolor, provident aspernatur voluptatem perferendis pariatur reprehenderit nulla saepe accusantium dolore placeat atque eaque necessitatibus dignissimos. Veniam, adipisci.
                        </p>
                    </div>
                    <div className="flex justify-between w-1/2">
                        <img
                            className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                            src={formulario}
                            alt="AAAL formulario mobile" />
                        <img
                            className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                            src={mensajes}
                            alt="AAAL mensajes mobile" />
                        <img
                            className="rounded-xl h-[300px] shadow-md shadow-gray-400 border-6 border-gray-800"
                            src={galeria}
                            alt="AAAL galeria mobile" />
                    </div>
                </article>
            </div>

        </section>
    );
};

export default FullStack;