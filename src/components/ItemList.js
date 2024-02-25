import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    // console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 h-72 m-5 p-5 flex justify-between items-center">
                    <div className="text-left w-80">
                        <div className="flex flex-col mb-2">
                            <span className="text-lg font-medium text-gray-700">{item.card.info.name}</span>
                            <span className="text-lg font-medium text-gray-700">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100} </span>
                        </div>
                        <p className="text-sm text-gray-500">{item.card.info.description}</p>
                    </div>
                    <div className="w-36 relative">
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-md" />
                        <button className="bg-green-600 text-white text-sm rounded-md p-2 absolute bottom-0 left-0">Add +</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;