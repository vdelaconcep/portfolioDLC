import main from "@/assets/img/HAL/halmovies.onrender.com_catalog.png";
import portadaMobile from "@/assets/img/HAL/halmovies.onrender.com_.png";
import mainMobile from "@/assets/img/HAL/halmovies.onrender.com_ (1).png";
import detalleMobile from "@/assets/img/HAL/halmovies.onrender.com_ (2).png";

const HalMovies = ({ clase }) => {
    return (
        <div className={clase && clase}>
            <article className="flex gap-7 w-full">
                <div className="w-1/2">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={main}
                        alt="HAL main desktop" />
                </div>
                
                <div className="w-1/2">
                    <p className="text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellat, voluptates tempore dolor, provident aspernatur voluptatem perferendis pariatur reprehenderit nulla saepe accusantium dolore placeat atque eaque necessitatibus dignissimos. Veniam, adipisci.
                    </p>
                </div>
        
            </article>
            <article className="flex gap-7 mt-20 w-full">
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
        </div>
    );
};

export default HalMovies;