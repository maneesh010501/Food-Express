import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla, locality } = resData.info;
    const { deliveryTime, slaString } = sla;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <div className="rating-n-tod">
                <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezyN8WrLRY3kSJvMYWVHktECJO7tacp1sIw&usqp=CAU" alt="" />
                <h5 className="rating">{avgRating}</h5>
                <h5 className="tod">{slaString}</h5>
            </div>
            <h5>{locality}</h5>
        </div>
    )
};

export default RestaurantCard;