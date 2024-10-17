import { CDN_URL } from "../../utils/constants";
const ReastaurantsCard=(props)=>{
    const {resData}=props;
    const {name,cloudinaryImageId,cuisines,avgRating}=resData.info;
    const {deliveryTime} = resData.info.sla;

    return(<div className="reastaurants-details">
            <img className="reastaurant-img" alt="P K Biryani Pot" src={CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <div className="rating-delivery">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4UlEQVR4nNWWPUskQRCGW1H86Oqd9WNvdapm149NBUGQQ7j7AQcXnKlyuYKJYGBkaq5iIoKGK9rVKguaGFxgYiAcZ3SnePdDlJ71dF0d3JnZGbCgoqm3Hrr6rWaEeHdxMdHuZ9ohNe2BoXKq0E7tesD0F5j+ZY8HiqmBQdO8hfppvLn0wEyVRzBTJRVo9nigWAP10zGF4cTB0tBCPVhqWkgcDIyn9WBgPEkUmjnwRl9Cq5kxVGo+sVLq6CmPOIppKQhsv9kaW9twX6XdKWC6lExXQY3jpqz2vlQGPz6CHV0cAqbzpKA1ef7iwenjPiUNbSYG1bjt6GI2cOySaQY0XjcNaOjGvnTiTrS8eedS05hk/NGM0XbrwkTDZrORO8uBZNyIClWMW77Lo4Zi/O6PK8RorUbEDTgc7Aem2xCnvZX7+Q+xwfIAZyPs7Ez8EzPthl8d2okFze/mJTD+Dm8u/GPNGRmstPs12EDeos0g41ltZDBoXH9tNzNHNPm/plu746/vPK5Fo56JNqnx1zPTGNrsrZQy9aW5cg4U02qdwa4i/f4C0+faJsD07S2N0vgFGH8+mcz7FB5scPnhPstd7LmN6myt1VS1uBwa7JjCMBicFiuiNbR4RbRabSo/geK9xD3GARYgcsKgmAAAAABJRU5ErkJggg==" className="star-rating"/>
            <h4><span>{avgRating}</span>{` • ${deliveryTime}-${deliveryTime+5} mins`}</h4>
            </div>
            <p>{cuisines.join(", ")}</p>
    </div>
    );
}
export default ReastaurantsCard;