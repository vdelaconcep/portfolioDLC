import { article } from "framer-motion/client";

const Presentacion = ({clase}) => {
    return (
        <article className={`flex justify-center items-center gap-7 ${clase && clase}`}>
            <div className="h-0 w-0 border-b-[180px] border-b-pink-500 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent">

            </div>
            <div className="px-4 w-[500px] flex flex-col h-full justify-center">
                <h1 className="text-5xl comfortaa font-extrabold text-white text-shadow-md text-shadow-gray-900 mb-4">Sobre mí</h1>
                <p className=" text-[#b86dbf]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dignissimos placeat molestiae ad dolorem porro sit, facilis odit aut. Pariatur sint at eaque unde perferendis aspernatur repudiandae mollitia nam aperiam!
                </p>
            </div>
        </article>
    );
};

export default Presentacion;