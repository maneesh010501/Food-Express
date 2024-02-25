import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="w-1/2 m-auto my-5 text-xl shadow-2xl text-gray-700">
            <div className="items-center h-20 flex justify-between font-semibold cursor-pointer" onClick={handleClick}>
                <span className="ml-3">{data.title} ({data.itemCards.length})</span>
                <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;