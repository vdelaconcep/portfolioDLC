import Triangulo from "@/components/triangulo"

const ItemOtros = ({ titulo, descripcion, certificado, clase }) => {
    return (
        <article
            key={titulo}
            className={`flex montserrat text-md ${clase && clase}`}>
            <Triangulo />
            <span className="text-white font-bold mx-2">{titulo}</span>
            <span className="text-white font-light mr-2">{descripcion}</span>
            {certificado && <a href={certificado} target="_blank" className="text-[#8473FF] hover:underline">Ver certificado</a>}
            
        </article>
    );
};

export default ItemOtros;