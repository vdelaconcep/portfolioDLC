

const BotonContacto = ({contacto, color}) => {
    return (
        <button className="flex bg-white text-black p-2 rounded-md">
                <svg
                    width='48'
                    height='48'
                    fill={color && color}>
                    <use href={`/sprite.svg#${contacto}`} />
            </svg>
            <h4>{contacto}</h4>
        </button>
    )
};

export default BotonContacto;