import ReastaurantsCard from "./ReastaurantsCard";
import { RES_LIST as resList} from "../../utils/mockData";
const Body=()=>{
    return (
        <main className="main">
            <div className="search-item">
                <label>Search : </label>
                <input/>
            </div>
            <div  className="reastaurants-list">
                {
                    resList.map((value)=>
                      <ReastaurantsCard key={value.info.id} resData={value.info} />
                    )
                }
            </div>
        </main>
    )
}
export default Body;