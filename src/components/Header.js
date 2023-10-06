import { UseSelector, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header =()=>{
    const result = useSelector((state)=>state.cartData);
    console.warn("data in header", result);
    return(
        <div className="header">
            <Link to="/"><h1 className="logo">SHOPPY</h1></Link>
            <Link to="/cart"><div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="there should be an image here"/>
            </div></Link>
        </div>
    )
}

export default Header;