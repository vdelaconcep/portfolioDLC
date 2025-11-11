import Subtitulo from "@/components/subtitulo";

import portada from "../assets/img/la-nave.vercel.app_.png";
import carrito from "../assets/img/la-nave.vercel.app_ (5).png";
import login from "../assets/img/la-nave.vercel.app_ (6).png"
import cards from "../assets/img/la-nave.vercel.app_ (4).png"
import admin from "../assets/img/la-nave.vercel.app_ (8).png"

const FullStack = () => {
    return (
        <section id="fullstack" className="min-h-[100dvh] bg-[#150C27] p-10 pt-18 montserrat">
            <h1 className="text-5xl font-bold text-white text-shadow-md text-shadow-gray-900 mb-4 text-center comfortaa">Proyectos Full-Stack</h1>

            <Subtitulo
                texto='Tienda de ropa'
                clase='mt-15 mb-10'/>
            <article className="flex gap-7 my-10">
                <img
                    className="rounded-xl h-[300px] border-gray-400 border-2"
                    src={portada}
                    alt="La Nave portada" />
                <div className="w-full">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
            </article>
            <article className="flex gap-7 my-10">
                <div className="w-full">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
                <img
                    className="rounded-xl h-[300px] border-gray-400 border-2"
                    src={cards}
                    alt="La Nave cards" />
                
            </article>
            <article className="flex gap-7 my-10">
                <img
                    className="rounded-xl h-[300px] border-gray-400 border-2"
                    src={carrito}
                    alt="La Nave carrito" />
                <div className="w-full">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
            </article>
            <article className="flex gap-7 my-10">
                <div className="w-full">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
                <img
                    className="rounded-xl h-[300px] border-gray-400 border-2"
                    src={login}
                    alt="La Nave login" />

            </article>
            <article className="flex gap-7 my-10">
                <img
                    className="rounded-xl h-[300px] border-gray-400 border-2"
                    src={admin}
                    alt="La Nave admin" />
                <div className="w-full">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
            </article>
            
            <Subtitulo texto='Plataforma de películas' />
            <Subtitulo texto='Proyecto en desarrollo' />

        </section>
    );
};

export default FullStack;