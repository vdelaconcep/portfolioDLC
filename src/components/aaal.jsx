import mainDesktop from "@/assets/img/AAAL/aaal-beta.vercel.app_.png";
import formulario from "@/assets/img/AAAL/aaal-beta.vercel.app_ (2).png";
import mensajes from "@/assets/img/AAAL/aaal-beta.vercel.app_ (3).png";
import galeria from "@/assets/img/AAAL/aaal-beta.vercel.app_ (4).png";

const Aaal = ({ clase }) => {
    return (
        <div className={clase && clase}>
            <article className="flex gap-7 my-10">
                <div className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
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
    );
};

export default Aaal;