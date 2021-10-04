import React from "react";
import { NavbarSinLog } from "../elements/NavbarSinLog";
import { NavbarConLog } from "../elements/NavbarConLog";
import { Profile } from "../elements/Profile";
import { Carrusel } from "../elements/Carrusel";
import { Tarjetas } from "../elements/Tarjetas";
import { Novedades } from "../elements/Novedades";
import { Footer } from "../elements/Footer";
import { useAuth0 } from "@auth0/auth0-react";

export const Index = () => {
    const {isAuthenticated} = useAuth0();

    return (
        <main>
            {isAuthenticated ? <>
                <NavbarConLog />
            </>
            : <NavbarSinLog />
            }
            

            <div align="center">
                <p>LUNES EN LA TARDE</p>

                <p>Novedades - Carlos </p>
                <p>Términos y condiciones y textos - Carlos</p>

                <p>Página de contacto - David </p>
                <p>Hacer las 15 páginas - Paula y David</p>

                <p>Json - Juan</p>
                <p>Base de datos</p>
                <p>LOGIN - REGISTRO - Juan</p>
            </div>

            <div align="center">
                <p></p>
                <p>Páginas para cada producto o un JavaScript que lo haga.</p>
                <p>Tienda como tal JavaScript</p>
            </div>

            <Carrusel />

            <Tarjetas />

            <Novedades />

            <Profile />
            
            <Footer />
      </main>

    )
}