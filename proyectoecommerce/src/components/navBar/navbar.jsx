import React from 'react';



const NavBar = () => {

  return (
   
    <div className='nav'>
        <div>
           <p className='navLogo'>Alea</p> 
        </div>      
        <ul className='navBar'>
            <li className='navBarItem'>Home</li>
            <li className='navBarItem'>Informacion</li>
            <li className='navBarItem'>Opciones</li>
            <li className='navBarItem'>Contacto</li>
        </ul>
        <button className='btnIngresar'>Ingresar</button>
    </div>
  )
}

export default NavBar