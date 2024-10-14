import { CDN_URL } from "../../utils/constants";
const ReastaurantsCard=(props)=>{
    const {resData}=props;
    const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime}=resData.info;

    return(<div className="reastaurants-details">
            <img className="reastaurant-img" alt="P K Biryani Pot" src={CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{deliveryTime}</h3>
            <h3>{avgRating}</h3>
            <h4>{cuisines.join(", ")}</h4>
    </div>
    );
}
export default ReastaurantsCard;