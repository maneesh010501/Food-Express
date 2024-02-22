import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla, locality } = resData.info;
    const { deliveryTime, slaString } = sla;
    return (
        <div className="res-card w-[200px] m-5 h-[312px] rounded-lg shadow hover:shadow-2xl relative">
            <img className="res-logo rounded-lg h-[200px] w-[200px]" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h4 className="text-gray-700 text-lg font-semibold pl-1">{name.length < 18 ? name : `${name.slice(0, 18)}...`}</h4>
            <div className="text-gray-500 text-sm pl-1">
                <div className="rating-n-tod flex items-center font-semibold">
                    <img className="star w-[30px]" src="https://img.freepik.com/premium-vector/stars-quality-icon-isolated-white-background-stars-rating-review-icon-website-mobile-apps_97458-1050.jpg" alt="" />
                    {/* <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezyN8WrLRY3kSJvMYWVHktECJO7tacp1sIw&usqp=CAU" alt="" /> */}
                    <h5 className="rating mr-3">{avgRating}</h5>
                    <h5 className="tod bg-yellow-100 rounded-2xl p-1 absolute top-0 mt-1 font-normal flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="">{slaString}</span></h5>
                </div>
                <h5 className=" pl-1">{cuisines.join(", ").length < 25 ? cuisines.join(", ") : `${cuisines.join(", ").slice(0, 25)}...`}</h5>
                {/* <h5>{costForTwo}</h5> */}
                <h5 className=" pl-1">{locality.length < 30 ? locality : `${locality.slice(0, 30)}...`}</h5>
            </div>
        </div>
    )
};

export default RestaurantCard;