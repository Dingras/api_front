import { useState } from "react";
import "./Dioses.css"
import Gods from "../../services/Gods.json"
import CartaDios from "../../components/Cartas/CartaDios/CartaDios";

const Dioses = () => {

    const [DataGods, setDataGods] = useState(Gods);
    console.log(DataGods)
    return(
        <div className="card">
            <div className="card-body">
                {
                    DataGods.map((god) => {
                        <CartaDios key={god.id_god} god={god}/>
                    })
                }
            </div>
        </div>
    )
}

export default Dioses;