import { useMobile } from '@/context/mobileContext';

interface PresentacionProps {
    titulo: string;
    texto: string;
    clase?: string;
}

const Presentacion = ({ titulo, texto, clase }: PresentacionProps): JSX.Element => {
    const { isMobile } = useMobile();
    return (
        <article className={`flex justify-center items-end gap-7 ${clase && clase}`}>
            <div className={`h-0 w-0 border-b-[180px] border-b-pink-500 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent ${isMobile && 'hidden'}`}>

            </div>
            <div className={`flex flex-col h-full justify-between ${!isMobile && 'w-[600px] p-0'}`}>
                <h1 className="text-5xl comfortaa font-extrabold text-white text-shadow-md text-shadow-gray-900 mb-4">{titulo}</h1>
                <p className=" text-[#b86dbf]">
                    {texto}
                </p>
            </div>
        </article>
    );
};

export default Presentacion;
