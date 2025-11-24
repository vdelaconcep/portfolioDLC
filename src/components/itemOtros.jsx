import Triangulo from "@/components/triangulo"

const ItemOtros = ({ titulo, descripcion, certificado,link, linkName, clase }) => {
    return (
        <article
            className={`flex montserrat text-md ${clase && clase}`}>
            <Triangulo />
            <span className="font-bold mx-2">{titulo ? titulo : ''}</span>
            {descripcion && <span className="font-light mr-2">{descripcion}</span>}
            {certificado && <a href={certificado} target="_blank" rel="noopener noreferrer"  className="text-[#8473FF] hover:underline">Ver certificado</a>}
            {link && linkName && <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#8473FF] hover:underline">{linkName}</a>}
            
        </article>
    );
};

export default ItemOtros;