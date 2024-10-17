import logo from "../../img/logo.png"
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
export default Header;