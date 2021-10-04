import React from "react";
import logo from '../images/logos/eTecnoBlancoHorizontal.png';
import { useAuth0 } from "@auth0/auth0-react";


export const NavbarSinLog  = () => {
    
    //Usando el Api de Auth0, metodos para este
    const { loginWithRedirect } = useAuth0();

    return (
        <nav>
                <ul class="menu">
                    <li class="logo"><a href="#">
                        <img src={logo} alt="Logo eTecno" />
                                    </a>
                    </li>
                    <li class="item"><a href="index.html">Home</a></li>
                    <li class="item"><a href="#">Tienda</a></li>
                    <li class="item"><a href="#">Carrito</a></li>
                    <li class="item"><a href="#">Contacto</a></li>
                    {/*<li class="item button"><a onClick={toggle}>Log in</a></li>*/}
                    <li class="item button"><a onClick={() => loginWithRedirect()}>Log in / Registro</a></li>
                    <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
                </ul>
            </nav>
    )
}