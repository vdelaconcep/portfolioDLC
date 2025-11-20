import Triangulo from "@/components/triangulo"

const ItemOtros = ({ titulo, descripcion, certificado, clase }) => {
    return (
        <article
            className={`flex montserrat text-md ${clase && clase}`}>
            <Triangulo />
            <span className="font-bold mx-2">{titulo ? titulo : ''}</span>
            <span className="font-light mr-2">{descripcion}</span>
            {certificado && <a href={certificado} target="_blank" className="text-[#8473FF] hover:underline">Ver certificado</a>}
            
        </article>
    );
};

export default ItemOtros;