import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import { Contenedor, Button, ListaArticulos, Ul, Li, Delete } from './styles'

export const Carro = ({
    cantidad,
    productos,
    eliminarProducto
}) => {
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto
    
    const eliminarDelCarro = (x) => {

        if(window.confirm('¿Está seguro de eliminar este producto del carrito?')){
            eliminarProducto(x)
        }
        
    }

    return (
        <Contenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Button onClick={handleMostrarCarro} >Carro</Button>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos>
                        <Ul>
                            {
                                productos.map(x => {
                                    return (
                                        <Li key={x.id}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><Delete onClick={()=> eliminarDelCarro(x)}>X</Delete> {x.nombre}</span>
                                            <span>({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong></span>
                                        </Li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                    </ListaArticulos>
            }
        </Contenedor>

    )
}