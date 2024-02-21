import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, locality, costForTwoMessage, sla, areaName, feeDetails, avgRating, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards, title } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
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
                    <h3>{title}</h3>
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