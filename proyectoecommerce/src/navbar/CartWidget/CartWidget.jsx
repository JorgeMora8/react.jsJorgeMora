import logoReact from "../../Imagenes/Techno.svg"
import logoCarrito from "../../Imagenes/carrito.svg"

const CartWidget = () => {
  return (
    <div>
        <img src={logoReact} className="logoNavBar" alt="carrito" />

        <img src={logoCarrito} alt="" className="logoCarrito"/>
    </div>
  )
}

export default CartWidget