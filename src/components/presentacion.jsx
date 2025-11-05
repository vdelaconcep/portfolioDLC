import { article } from "framer-motion/client";

const Presentacion = ({clase}) => {
    return (
        <article className={`flex justify-center items-center gap-5 ${clase && clase}`}>
            <div className="bg-[#a4326d] rounded-full h-[250px] w-[250px]">

            </div>
            <div className="px-4 w-[500px] flex flex-col h-full justify-center">
                <h1 className="text-5xl coolvetica text-white s mb-4">Sobre mí</h1>
                <p className=" text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dignissimos placeat molestiae ad dolorem porro sit, facilis odit aut. Pariatur sint at eaque unde perferendis aspernatur repudiandae mollitia nam aperiam!
                </p>
            </div>
        </article>
    );
};

export default Presentacion;