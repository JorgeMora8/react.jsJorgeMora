import React from 'react';



const NavBar = () => {

    const navBarGeneral={backgroundColor:"#352b20", display:"flex", justifyContent: "space-around", alignItems:"center", flexWrap:"wrap"}
    const eCommerceNombre={fontSize:"1.6rem", color:"#ffffff", fontFamily:"poppins", fontWeight:"600"}; 
    const navBar ={display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", listStyleType:"none"}; 
    const navBarItem={color:"#ffffff", margin:"10px", cursor:"pointer"}; 
    const btnEstilo ={backgroundColor:"#ffffff", color:"#ff624d", border:"none", fontSize:"20px", padding:"5px 10px", borderRadius:"1rem", cursor:"pointer"}

  return (
   
    <div style={navBarGeneral}>

        <div>
           <p style={eCommerceNombre}>Alea</p> 
        </div>
        
        <ul style={navBar}>
            <li style={navBarItem}>Home</li>
            <li style={navBarItem}>Informacion</li>
            <li style={navBarItem}>Opciones</li>
            <li style={navBarItem}>Contacto</li>
        </ul>

        <button style={btnEstilo}>Ingresar</button>
    

    </div>
  )
}

export default NavBar