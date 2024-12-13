import "./Header.css";
import Title from "./Titel";
function Header(){
    return (
        
       
        <header className="header">
        
            <img className="img" src="https://www.digikala.com/brand/full-horizontal.svg" alt="" />
        <ul className="ul">
        <Title text="header"/>
            <li className="li">home</li>
            <li className="li">product</li>
            <li className="li">profile</li>
        </ul>
        </header>
        
    );
}
export default Header;