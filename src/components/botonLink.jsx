import { button } from "framer-motion/client";
import { useLanguage } from '@/context/langContext';

const BotonLink = ({ enlace, color }) => {
    const { language } = useLanguage();
    return (
        <button className={`rounded-xl ring-2 ring-${color} text-${color} py-2 px-3 font-bold hover:bg-pink-500/10 cursor-pointer hover:scale-105`}>
            <a href={enlace} target="_blank">
                {language === 'es' ? 'Visitar sitio' : 'Visit website'} <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </a>
        </button>
    )
};

export default BotonLink;