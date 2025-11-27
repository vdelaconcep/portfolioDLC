import Triangulo from "@/components/triangulo";
import { useLanguage } from '@/context/langContext';

const ItemOtros = ({ titulo, descripcion, certificado, link, linkName, clase }) => {
    const { language } = useLanguage();

    return (
        <article
            className={` flex gap-3 montserrat text-md ${clase && clase}`}>
            <Triangulo clase='inline-block' />
            <div className="inline-block">
                <span className="font-bold mr-2">{titulo ? titulo : ''}</span>
                {descripcion && <span className="font-light mr-2">{descripcion}</span>}
                {certificado && <a href={certificado} target="_blank" rel="noopener noreferrer" className="text-[#8473FF] hover:underline">{language === 'es' ? 'Ver certificado' : 'View certificate'}</a>}
                {link && linkName && <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#8473FF] hover:underline">{linkName}</a>}
            </div>
            
            
        </article>
    );
};

export default ItemOtros;