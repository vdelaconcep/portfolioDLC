import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { itemsNavegacion } from '@/data/itemsNavegacion';
import { scrollToSection } from '@/utils/scrollToSection';
import BotonIdioma from '@/components/botonIdioma';
import { useLanguage } from "@/context/langContext";
import { useMobile } from '@/context/mobileContext';
import BotonMenu from './botonMenu';

const Navegacion = ({ clase }) => {

    const { language } = useLanguage();

    const { isMobile } = useMobile();
    const [menuAbierto, setMenuAbierto] = useState(false);

    const bodyRef = useRef(null);

    const [inUXUI, setInUXUI] = useState(false);

    useEffect(() => {
        const uxuiSection = document.getElementById('uxui');

        if (!uxuiSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setInUXUI(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-80px 0px 10% 0px'
            }
        );

        observer.observe(uxuiSection);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        bodyRef.current = document.body;
    }, []);

    const { scrollY } = useScroll({
        container: bodyRef
    });

    const opacidadBg = useTransform(
        scrollY,
        [0, 10],
        [0, 1]
    );

    const background = {
        backgroundColor: useTransform(
            opacidadBg,
            (opacity) => {
                const finalOpacity = menuAbierto && opacity < 0.7 ? 0.7 : opacity;
                return inUXUI ? `rgba(0, 0, 0, ${finalOpacity * 0.9})` : `rgba(0, 0, 0, ${finalOpacity * 0.4})`
            }
        ),
        backdropFilter: useTransform(
            opacidadBg,
            (opacity) => {
                const finalOpacity = menuAbierto && opacity < 0.7 ? 0.7 : opacity;
                return `blur(${finalOpacity * 12}px)`;
            }
        ),
        borderBottom: useTransform(
            opacidadBg,
            (opacity) => {
                const finalOpacity = menuAbierto && opacity < 0.7 ? 0.7 : opacity;
                return `1px solid rgba(255, 255, 255, ${finalOpacity * 0.1})`;
            }
        ),
        boxShadow: useTransform(
            opacidadBg,
            (opacity) => {
                const finalOpacity = menuAbierto && opacity < 0.7 ? 0.7 : opacity;
                return `0.5px 0px 0.5px rgba(255, 255, 255, ${finalOpacity * 0.3})`;
            }
        )
    }

    return (
        <>
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex ${isMobile ? 'justify-between px-3 py-2' : 'justify-center py-4'}  montserrat text-lg ${clase && clase}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={ background }>
            {isMobile ?
                
                <BotonMenu abierto={menuAbierto} setAbierto={setMenuAbierto} />:
                <ul className='list-none flex text-lg font-medium text-gray-400'>
                    {itemsNavegacion.map(item =>
                        <li
                            key={item.linkto}
                            className="mx-2 last-of-type:mr-0 cursor-pointer hover:bg-[#8473FF] hover:text-gray-900 px-3 rounded-2xl"
                            onClick={() => { scrollToSection(item.linkto); }}>
                            {language === 'es' ? item.tituloes : item.tituloen}
                        </li>
                    )}
                </ul>
            }

            
            <BotonIdioma clase={!isMobile && 'absolute right-10 bottom-1/2 translate-y-1/2'} />
            </motion.nav>
            <AnimatePresence>
            {menuAbierto && isMobile &&
                
                <motion.article
                    style={background}
                    className="fixed top-[57px] left-0 z-100 w-screen"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <ul className='list-none montserrat font-medium text-gray-400 text-lg px-10 py-0'>
                        {itemsNavegacion.map(item =>
                            <li
                                key={item.linkto}
                                className="cursor-pointer hover:bg-[#8473FF] hover:text-gray-900 p-2 my-2 rounded-2xl"
                                onClick={() => {
                                    scrollToSection(item.linkto);
                                    setMenuAbierto(false);
                                }}>
                                {language === 'es' ? item.tituloes : item.tituloen}
                            </li>
                        )}
                    </ul>
                </motion.article>
                }
            </AnimatePresence>
        </>
    );
};

export default Navegacion;