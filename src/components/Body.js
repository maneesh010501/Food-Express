import RestaurantCard, { vegLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const { loggedInUser, setUserName } = useContext(UserContext);

    const VegRes = vegLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json)
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h2>Looks like you're offline! Please check your internet connection.</h2>

    //conditional rendering

    return listOfRestaurants.length === 0 ? <div>
        <div className="loading-container flex flex-col">
            <img className="w-10 h-10 mb-3" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
            {/* <img src="https://i.pinimg.com/originals/da/4f/c2/da4fc2360e1dcc5c85cf5eeaee4b107f.gif" className="w-80 h-60 mb-5" alt="" /> */}
            <h1 className="text-4xl">Looking for great food near you ...</h1>
        </div>
        <><Shimmer /></>
    </div> : (
        <div className="body">
            <div className="filter flex justify-between mb-7 mt-7">
                <button className="border border-solid border-gray-300 w-96 h-10 p-2 rounded ml-4" onClick={() => {
                    const filtered = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.5);
                    setfilteredRestaurants(filtered);
                }}>
                    Explore Top Rated Restaurants
                </button>
                <div>User :<input className="border border-black m-5" value={loggedInUser} onChange={(e) => { setUserName(e.target.value) }} /></div>
                <div className="search mr-5">
                    <input type="text" className="border border-solid border-gray-300 w-96 h-10 p-2 rounded" placeholder="Search for restaurants"
                        value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="border border-solid  border-gray-300 ml-1 h-10 p-2 rounded hover:bg-gray-100" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurants(filteredRestaurants);
                    }}>search</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="res-container flex flex-wrap justify-center w-[1000px]">
                    {
                        filteredRestaurants.map(restaurant =>
                            <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} className="res-link">
                                {restaurant.info.veg ? (<VegRes resData={restaurant} />) :
                                    (<RestaurantCard resData={restaurant} />)}
                                {/* {<RestaurantCard resData={restaurant} />} */}
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Body;