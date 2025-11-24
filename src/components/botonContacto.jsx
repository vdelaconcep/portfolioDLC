

const BotonContacto = ({contacto, color, link, title}) => {
    return (
        <a
            href={link}
            title={title}
            target="_blank"
            rel="noopener noreferrer">
            <article className="rounded-[13px] p-[3px] bg-gradient-to-tr from-[#8473FF] to-[#c005d1] w-fit shadow-sm shadow-gray-400 hover:from-[#998df4] hover:to-[#e739f7] transition-all duration-200">
            <button className="flex items-center gap-2 bg-gray-200 text-black p-2 rounded-[10px] cursor-pointer">
                
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