
import ItemList from "./ItemsList";

const RestaurantCategory = (props) => {

    const {data,showItems,setShowIndex} = props;

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="w-6/12 font-sans rounded-lg cursor-pointer mx-auto my-4 items-center shadow-lg p-4">
            <div onClick={handleClick} className="flex justify-between font-bold">
                <span>{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;