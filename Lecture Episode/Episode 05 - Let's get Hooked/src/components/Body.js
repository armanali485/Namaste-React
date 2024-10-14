import {useState} from "react";
import ReastaurantsCard from "./ReastaurantsCard";
import {RES_LIST} from "../../utils/mockData";


const Body = () => {
    //Local State  Variable - Super powerful Variable
    const [resList,SetResList] = useState(RES_LIST);
  return (
    <main className="main">
      <div className="filter-btn">
        <button
          onClick={() => {
            SetResList(resList.filter((value) => value.info.avgRating> 4.5))
          }}
        >
          Rating 4.5+
        </button>
      </div>
      <div className="reastaurants-list">
        {resList.map((value) => (
          <ReastaurantsCard key={value.info.id} resData={value} />
        ))}
      </div>
    </main>
  );
};
export default Body;
