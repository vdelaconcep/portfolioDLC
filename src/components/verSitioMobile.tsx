interface VerSitioMobileProps {
    texto: string;
}

const VerSitioMobile = ({ texto }: VerSitioMobileProps): JSX.Element => {
    return (
        <article className="bg-black/50 backdrop-blur-sm text-white montserrat font-semibold w-fit p-2 px-4 rounded-tl-xl">
            {texto}<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
        </article>
    )

};

export default VerSitioMobile;
