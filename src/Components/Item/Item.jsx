import { NavLink, Link } from 'react-router-dom'
import Contador from "../ItemCount/ItemCount"
import remeraBoca from '../../../Assets/Images/boca.jpg'
import './item.css'


const Item = ({producto}) =>{
    return(
        <div className="item" >
            <img src={`${producto.Img}`} alt="" />
            
            <h2>{producto.Producto}</h2>
            <p>Talle: {producto.Talle}</p>
            <p>Precio: {producto.Precio}</p>
            <Link to={`/info/${producto.Id}`}><button className="info">Información del Producto</button></Link>
            
        </div>
    )
}

export default Item

//{`{/info/${producto.Id}`}