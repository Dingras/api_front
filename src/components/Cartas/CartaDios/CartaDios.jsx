import { useState } from "react";
import "./CartaDios.css"

const CartaDios = (props) => {

    return(
        <div className="card" style="width: 18rem;">
            {
                props.god.map((god)=>{
                    return(
                    <>
                        <img src={god.url_image_god} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{god.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={god.abilities.pasive.url_image} alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{god.abilities.pasive.name}</h5>
                                                    <p className="card-text">{god.abilities.pasive.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={god.abilities.first_ability.url_image} alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{god.abilities.first_ability.name}</h5>
                                                    <p className="card-text">{god.abilities.first_ability.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={god.abilities.second_ability.url_image} alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{god.abilities.second_ability.name}</h5>
                                                    <p className="card-text">{god.abilities.first_ability.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={god.abilities.third_ability.url_image} alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{god.abilities.third_ability.name}</h5>
                                                    <p className="card-text">{god.abilities.third_ability.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={god.abilities.ultimate.url_image} alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{god.abilities.ultimate.name}</h5>
                                                    <p className="card-text">{god.abilities.ultimate.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </>
                    )
                })
            }
        </div>
    )
}
export default CartaDios;