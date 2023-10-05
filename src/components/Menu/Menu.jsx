import { useEffect } from "react"
import "./Menu.css"
import Dioses from "../../pages/Dioses/Dioses"
import Items from "../../pages/Items/Items"
import Inicio from "../../pages/Inicio/Inicio"

const MENU_ITEMS = [
    {
        page: <Dioses/>,
        title: "Dioses"
    },
    {
        page: <Inicio/>,
        title: "Inicio"
    },
    {
        page: <Items/>,
        title: "Items"
    }
]

const Menu = (props) =>{

    useEffect(()=>{
        props.setActualFrame(<Inicio/>)
    },[])

    return(
        <menu className="top-menu-bar">
            {
                MENU_ITEMS.map((item) =>{
                    return(
                        <button className="tom-menu-button" onClick={() => props.setActualFrame(item.page)}>{item.title}</button>
                    )
                })
            }
            
        </menu>
    )
}
export default Menu;