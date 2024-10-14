import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./img/logo.png"

const Header=()=>{
    return(
        <div className="header">
            <div className="header-item">
            <img className="logo" alt="logo" src={logo}/>
            </div>
            <div className="navbar">
            <nav className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>AboutUS</li>
                    <li>ContactUS</li>
                    <li>Cart</li>
                </ul>
            </nav>
            </div>
        </div>
    )
}
const ReastaurantsCard=(props)=>{//ReastaurantsCard=({resName,rating,eta,cusins})
    const {resName="NA",rating,eta,cusins}=props;
    return(<div className="reastaurants-details">
            <img className="reastaurant-img" alt="P K Biryani Pot" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ulqip48w3lckbay55dph"/>
            <h2>{resName}</h2>{/*props.resName*/}
            <h3>{rating}</h3>{/*props.rating*/}
            <h3>{eta}</h3>{/*props.eta*/}
            <h4>{cusins}</h4>{/*props.cusins*/}
    </div>
    );
}
const Main=()=>{
    return (
        <main className="main">
            <div className="search-item">
                <label>Search : </label>
                <input/>
            </div>
            <div  className="reastaurants-list">
                <ReastaurantsCard resName="P K Biryani Pot" rating="Rating 4.0"  eta="30-35 Mins" cusins="Biryani, North Indian"/>
                <ReastaurantsCard resName="KFC" rating="Rating 4.5"  eta="20-25 Mins" cusins="Burger, Chicken wings"/>
            </div>
        </main>
    )
}

const MainComponent=()=>{
    return(
        <div className="main-component">
            <Header/>
            <Main/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent/>);