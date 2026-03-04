interface BotonContactoProps {
    contacto: string;
    color?: string;
    link: string;
    title: string;
}

const BotonContacto = ({ contacto, color, link, title }: BotonContactoProps): JSX.Element => {
    return (
        <a
            className="block"
            href={link}
            title={title}
            target="_blank"
            rel="noopener noreferrer">
            <article className="rounded-[13px] p-[3px] bg-gradient-to-tr from-[#8473FF] to-[#c005d1] w-full shadow-sm shadow-gray-400 hover:from-[#998df4] hover:to-[#e739f7] transition-all duration-200 flex flex-col">
            <button className="flex items-center justify-center gap-2 bg-gray-200 text-black p-2 rounded-[10px] cursor-pointer">

                <svg
                    width='35'
                    height='35'
                    fill={color && color}>
                    <use href={`/sprite.svg#${contacto}`} />
                </svg>
                <h4>{contacto}</h4>


            </button>
            </article>
        </a>
    )
};

export default BotonContacto;
