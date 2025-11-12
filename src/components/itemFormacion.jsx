const ItemFormacion = ({imagen, titulo, institucion, sub, certificado}) => {
    return (
        <article className="text-white flex flex-col items-center justify-between h-full p-4 flex-1 bg-radial-[at_75%_25%] from-gray-700 to-gray-900 rounded-xl ring-1 ring-gray-600">
            <div className="flex h-full items-center justify-center max-w-[90%]">
                <img
                    className="max-h-[150px] w-full mb-2 object-scale-down"
                    src={imagen}
                    alt={institucion} />
            </div>
            
            <div className="flex flex-col items-center">
                <h1 className="font-bold">{titulo}</h1>
                <h2>{institucion}</h2>
                <h3 className={`text-sm text-[#8473FF] ${certificado ? 'hover:underline' : ''}`}>{certificado ?
                    <a href={certificado}>{sub}</a> :
                    <span>{sub}</span>
                }</h3>
            </div>
            
        </article>
    )
};

export default ItemFormacion;