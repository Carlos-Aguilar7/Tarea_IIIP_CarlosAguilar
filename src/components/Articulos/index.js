import { useContext } from 'react'
import { Articulo } from "../Articulo";
import { Container } from './styles';
import AppContext from "../../context/AppContext";

export const Articulos = () => {

    const { articulos } = useContext(AppContext)

    return (
        <Container >
            {
                articulos.map(prod => 
                    <Articulo key={prod.id} prod={prod}/>
                )
            }
        </Container>
    )
}