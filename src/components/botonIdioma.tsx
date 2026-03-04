import { useLanguage } from "@/context/langContext";
import { useMobile } from '@/context/mobileContext';

interface BotonIdiomaProps {
    clase?: string;
}

const BotonIdioma = ({ clase }: BotonIdiomaProps): JSX.Element => {
    const { language, toggleLanguage } = useLanguage();
    const { isMobile } = useMobile();

    return (
        <article className={`montserrat flex ${clase && clase} ${isMobile ? 'text-gray-400' : 'text-white'}`}>
            <button
                className={`${(!isMobile && language === 'es') ? 'text-gray-700 mr-1' : 'cursor-pointer mr-1'}`}
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
