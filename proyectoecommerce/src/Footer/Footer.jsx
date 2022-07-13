import logoReact from "../Imagenes/Techno.svg"


const Footer = () =>{ 
    return(
        <div className="footerContainer">
            <div className="footerItem">
                <img src={logoReact} alt="" />
            </div>
            <div className="footerItem">
                <b className="navMenuTituloFooter">Navegacion</b>
                <ul className="navMenuFooter">
                    <li className="navMenuFooterItem">Computadoras</li>
                    <li className="navMenuFooterItem">Telefonos</li>
                    <li className="navMenuFooterItem">Audifonos</li>
                    <li className="navMenuFooterItem">Relojes</li>
                </ul>
            </div>
            <div className="footerItem">
                <p className="descripTechnoFooter">Techno es un ecommerce donde encontraras distintos articulos de tecnologias, desde Computadoras hasta los ultimos relojes en el mercado</p>
            </div>
        </div>
    )
}

export default Footer