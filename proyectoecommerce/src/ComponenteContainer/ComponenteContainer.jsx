import Titulo from "../Titulo/Titulo"
import Formulario from "../Formulario/Formulario"
import Footer from "../Footer/Footer"
import imagen from "../Imagenes/computadoraHome.png"

const ComponenteContainer = ( {saludar} ) => {
    
  let titulo="¿Quienes somos?"
  let info="Techno es un ecommerce de articulos de tecnologia, desde computadoras hasta relojes inteligentes donde tenemos disponibles mas de 10+ diferentes marcas disponibles. Desde las mas conocidad hasta la mas recientes en el mercado"
  
  function informar(){ 
    alert("hiciste click en el btn")
  }
  return (
    <div>
     <p className="mensajeBienvenida">{saludar}</p> 
      <Titulo titulo={titulo} parrafo={info}/>
      <div className="imagenComputadora">
        <img src={imagen} alt="" />
      </div>
      <Formulario mensaje={ informar }/>
      
      <Footer />
    </div>
  )
}

export default ComponenteContainer