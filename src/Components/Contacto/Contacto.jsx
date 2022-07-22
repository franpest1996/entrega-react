import Item from "../Item/Item";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './Contacto.css'
import Footer from "../Footer/Footer";

const Contacto = () =>{
    return(
    
            <div className="contacto">
                <header>
                    <p>Contacto</p>
                </header>
                <form>
                    <label>
                        Nombre
                        <input type="text" name="Nombre" />
                    </label>
                    <label>
                        Apellido
                        <input type="text" name="Apellido" />
                    </label>
                    <label>
                        Mail
                        <input type="text" name="Mail" />
                    </label>
                    <input className="submit" type="submit" value="Enviar" />
                </form>
                
            </div>
            
       
    )
}


  



export default Contacto