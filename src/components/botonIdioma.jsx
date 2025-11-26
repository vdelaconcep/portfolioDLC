import { useLanguage } from "@/context/langContext";
import { useMobile } from '@/context/mobileContext';

const BotonIdioma = ({ clase }) => {
    const { language, toggleLanguage } = useLanguage();
    const { isMobile } = useMobile();

    return (
        <article className={`text-white montserrat flex ${clase && clase}`}>
            <button
                className={`${(!isMobile && language === 'es') ? 'text-gray-700 mr-1' : 'cursor-pointer mr-1'} ${isMobile && 'ring-1 ring-gray-400 rounded-md px-1'}`}
                onClick={toggleLanguage}
                disabled={!isMobile && language === 'es'}
                title={language === 'en' ? 'Cambiar idioma' : (!isMobile ? undefined : 'Toggle language')}>
                {(!isMobile || language === 'en') ? 'ESP' : 'ENG'}
            </button>
            <span className={`text-gray-400 ${isMobile && 'hidden'}`}>|</span>
            <button
                className={`ml-1 ${language === 'en' ? 'text-gray-700' : 'cursor-pointer'} ${isMobile && 'hidden'}`}
                onClick={toggleLanguage}
                disabled={language === 'en'}
                title={language === 'es' ? 'Toggle language' : undefined}>
                ENG
            </button>
            
        </article>
        
    );
};

export default BotonIdioma;