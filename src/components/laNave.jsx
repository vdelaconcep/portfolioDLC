import portada from "@/assets/img/LN/la-nave.vercel.app_.png";
import carrito from "@/assets/img/LN/la-nave.vercel.app_ (5).png";
import cards from "@/assets/img/LN/la-nave.vercel.app_ (4).png";

const LaNave = ({ clase }) => {
    return (
        <div className={clase && clase}>
            <article className="flex gap-7">
                <div className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={portada}
                        alt="La Nave portada" />
                </div>
                
                <div className="w-2/3">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
            </article>
            <article className="flex gap-7 my-20">
                <div className="w-2/3">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
                <div className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={cards}
                        alt="La Nave cards" />
                </div>
                
            
            </article>
            <article className="flex gap-7">
                <div className="w-1/3">
                    <img
                        className="rounded-xl shadow-md shadow-gray-400 ring-1 ring-gray-700"
                        src={carrito}
                        alt="La Nave carrito" />
                </div>
                
                <div className="w-2/3">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam corporis odit totam est reiciendis incidunt sed iure, ducimus beatae natus quas neque, consectetur aliquam doloribus repudiandae atque. Atque, unde.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default LaNave;