import React from "react";
import LocationPin from "../images/location-pin.svg";

export default function Travel(props) {
    return (
        <div className="travel">
            <img className="travel--img" src={props.imageUrl} alt={props.title} />
            <div className="travel--content">
                <div className="travel--location_container">
                    <div className="travel--location">
                        <img className="travel--location_pin" src={LocationPin} />
                        <h5 className="travel--location_name">{props.location}</h5>
                    </div>
                    <a className="travel--google_maps_link" href={props.googleMapsUrl}>View on Google Maps</a>
                    <h2 className="travel--title">{props.title}</h2>
                </div>
                <div className="travel--texts">
                    <p className="travel--dates">{props.startDate} - {props.endDate}</p>
                    <p className="travel--description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}