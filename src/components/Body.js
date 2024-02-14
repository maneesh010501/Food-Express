import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json)
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    //conditional rendering

    return listOfRestaurants.length === 0 ? <div>
        <div className="loading-container">
            <h1>Looking for great food near you ...</h1>
        </div>
        <div><Shimmer /></div>
    </div> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filtered = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.5);
                    setListOfRestaurants(filtered);
                }}>
                    Top Rated Restaurants
                </button>
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search for restaurants"
                        value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="search-btn" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfRestaurants(filteredRestaurants);
                    }}>search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
};

export default Body;