
const Titulo = ({titulo, parrafo}) =>{ 
 //   let {titulo, parrafo}=props
    return(  
        <>
      <div className="infoContainer">
        <div className='info'>
            <h3 className='infoTitulo'>{titulo}</h3>
            <p className='infoParrafo'>{parrafo}</p>
        </div>
      </div>
      </> )
  }

  export default Titulo

