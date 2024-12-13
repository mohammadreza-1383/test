import "./Product.css";
function Product(props){
return(
    <div className="product-card">
        <img src={props.imgsrc} alt="" />
        <h4>
            {props.titl}
        </h4>
        <p>
{props.price}
        </p>
    </div>
)
}
export default Product;