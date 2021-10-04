import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Esta es para icono estaticos fa
import {faMobileAlt, faDesktop, faCogs, faHome, faKeyboard} from '@fortawesome/free-solid-svg-icons'
//Esta es para iconos de marcas fab
import {faAndroid} from '@fortawesome/free-brands-svg-icons'

export const Tarjetas = () => {

    return(
        <div class="caja-botones">
            <div class="cajita">
                <div class="icono">
                    <FontAwesomeIcon icon={faMobileAlt}/>
                </div>
                <p>Celulares</p>
            </div>
            <div class="cajita">
                <div class="icono">
                    <FontAwesomeIcon icon={faDesktop}/>
                </div>
                <p>Computadores</p>
            </div>
            <div class="cajita">
                <div class="icono">
                    <FontAwesomeIcon icon={faCogs}/>
                </div>
                <p>Domótica</p>
            </div>
            <div class="cajita">
                <div class="icono">
                    <FontAwesomeIcon icon={faHome}/>
                </div>
                <p>Smart House</p>
            </div>
            <div class="cajita">
                <div class="icono">
                    <FontAwesomeIcon icon={faKeyboard}/>
                </div>
                <p>Periféricos</p>
            </div>
            <div class="cajita">
                <div class="icono">
                    <FontAwesomeIcon icon={faAndroid}/>
                </div>
                <p>Robótica</p>
            </div>
        </div>
    )
}