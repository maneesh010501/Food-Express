import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, locality, costForTwoMessage, sla, areaName, feeDetails, avgRating, totalRatingsString } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu-container">
            <div className="menu">
                <div>
                    <h2>{name}</h2>
                    <h5>{cuisines.join(", ")}</h5>
                    <h5>{locality}</h5>
                    <h5>{costForTwoMessage}</h5>
                    <h5>{sla.deliveryTime} mins</h5>
                    <h5>{areaName}</h5>
                    <h5>{feeDetails.message}</h5>
                    <h3>Recommended</h3>
                    <ul>
                        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
                    </ul>

                </div>
                <div className="avg-rating">
                    <h5>{avgRating}</h5>
                    <h5>{totalRatingsString}</h5>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;