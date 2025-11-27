import { useMobile } from '../context/mobileContext';

const Subtitulo = ({ texto, clase }) => {
    const { isMobile } = useMobile();
    return (
        <article className={`flex items-center gap-2 ${clase && clase}`}>
            <h2 className={`[background-image:linear-gradient(to_right,#8473FF,#c005d1)] [background-clip:text] [-webkit-background-clip:text] [color:transparent] [-webkit-text-fill-color:transparent] w-fit comfortaa font-extrabold ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                {texto}
            </h2>
            <hr className="flex-1 border-gray-600" />
        </article>
    )
};

export default Subtitulo;