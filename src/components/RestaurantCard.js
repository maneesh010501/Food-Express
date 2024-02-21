import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla, locality } = resData.info;
    const { deliveryTime, slaString } = sla;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h4>{name.length < 23 ? name : `${name.slice(0, 23)}...`}</h4>
            <div className="grey">
                <div className="rating-n-tod">
                    <img className="star" src="https://img.freepik.com/premium-vector/stars-quality-icon-isolated-white-background-stars-rating-review-icon-website-mobile-apps_97458-1050.jpg" alt="" />
                    {/* <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezyN8WrLRY3kSJvMYWVHktECJO7tacp1sIw&usqp=CAU" alt="" /> */}
                    <h5 className="rating">{avgRating}</h5>
                    <h5 className="tod">{slaString}</h5>
                </div>
                <h5>{cuisines.join(", ").length < 30 ? cuisines.join(", ") : `${cuisines.join(", ").slice(0, 30)}...`}</h5>
                {/* <h5>{costForTwo}</h5> */}
                <h5>{locality.length < 30 ? locality : `${locality.slice(0, 30)}...`}</h5>
            </div>
        </div>
    )
};

export default RestaurantCard;