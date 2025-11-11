const ItemFormacion = ({imagen, titulo, institucion, sub, certificado}) => {
    return (
        <article className="text-white flex flex-col items-center justify-between h-full p-4 rounded-2xl flex-1 border-1 border-gray-600 bg-gradient-to-tr from-purple-500/5 to-purple-200/20">
            <div className="flex h-full items-center justify-center">
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