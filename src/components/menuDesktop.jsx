import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { itemsNavegacion } from '@/data/itemsNavegacion';
import { scrollToSection } from '@/utils/scrollToSection';
import BotonIdioma from '@/components/botonIdioma';
import { useLanguage } from "@/context/langContext";

const MenuDesktop = ({ clase }) => {

    const { language } = useLanguage();

    const { scrollY } = useScroll();

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

    const opacidadBg = useTransform(
        scrollY,
        [0, 10],
        [0, 1]
    );

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 py-4 flex justify-center ${clase && clase}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
                backgroundColor: useTransform(
                    opacidadBg,
                    (opacity) => inUXUI ? `rgba(0, 0, 0, ${opacity * 0.9})` : `rgba(0, 0, 0, ${opacity * 0.4})`
                ),
                backdropFilter: useTransform(
                    opacidadBg,
                    (opacity) => `blur(${opacity * 12}px)`
                ),
                borderBottom: useTransform(
                    opacidadBg,
                    (opacity) => `1px solid rgba(255, 255, 255, ${opacity * 0.1})`
                ),
                boxShadow: useTransform(
                    opacidadBg,
                    (opacity) => `0.5px 0px 0.5px rgba(255, 255, 255, ${opacity * 0.3})`
                )
            }}>
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
            <BotonIdioma clase='absolute right-10 bottom-1/2 translate-y-1/2'/>
        </motion.nav>
    );
};

export default MenuDesktop;