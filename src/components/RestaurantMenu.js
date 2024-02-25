import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, locality, costForTwoMessage, sla, areaName, feeDetails, avgRating, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mt-6 mb-2 text-gray-700">{name}</h2>
            <h5 className="text-lg font-semibold text-gray-700">{cuisines.join(", ")}</h5>
            <h5 className="text-gray-500">{locality}</h5>
            <h5 className="text-gray-500">{costForTwoMessage}</h5>
            <h5 className="text-gray-500">{sla.deliveryTime} mins</h5>
            <h5 className="text-gray-500">{areaName}</h5>
            <h5 className="text-gray-500">{feeDetails.message}</h5>
            <h5 className="text-gray-500">{avgRating}</h5>
            <h5 className="text-gray-500">{totalRatingsString}</h5>
            <div className="mt-14">{categories.map((category, index) =>
                //controlled component
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />)}</div>
        </div>
    )
}

export default RestaurantMenu;