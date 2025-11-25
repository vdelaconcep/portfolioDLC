
import { useLanguage } from '@/context/langContext';

const BotonLink = ({ enlace, color, texto }) => {
    const { language } = useLanguage();
    return (
        <button className={`rounded-xl ring-2 ring-${color} text-${color} py-2 px-3 font-bold hover:bg-pink-500/20 cursor-pointer hover:scale-105 transition-all duration-100`}>
            <a href={enlace} target="_blank">
                {language === 'es' ? (texto?.es || 'Visitar sitio') : (texto?.en || 'Visit website')} <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </a>
        </button>
    )
};

export default BotonLink;