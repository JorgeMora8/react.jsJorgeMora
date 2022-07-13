import Titulo from "../Titulo/Titulo"

const Formulario = ( {mensaje}) =>{ 
    let titulo="Registrate en nuestra plataforma"
    let info="Si deseas registrate en nuestra plataforma, a continuacion tienes el formulario correspondiente donde depositaras tu datos como usuario"
    return(
     <>
      <Titulo titulo={titulo} parrafo={info}/>
      <div className="formularioArea">
        <form action="">
          <input type="text" placeholder="Ingrese nombre" className="input inputNombre"/>
          <input type="text" placeholder="Ingrese Apellido" className="input inputApellido"/>
          <input type="text" placeholder="Ingrese Email" required className="input inputEmail"/>
          <button onClick={mensaje} className="guardarFormularioBtn">Guardar</button>
        </form>
        </div>
      </>
    )
  }

  export default Formulario