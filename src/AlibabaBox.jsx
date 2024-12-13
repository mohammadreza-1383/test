import { useState } from "react";
import "./AliBaba.css"

function Box(props){
  
return(
<div className="div1">

<div className="div13">
    <div className="div131">
    <p className="p-1">تومان</p>
    <h2 className="h2-1">{props.Price}</h2>
    
    </div>
    <div className="div132">
    <h2 className="h2-2">نرخ رسمی ایرلاین</h2>
    <button className="b-1"> افزودن بلیط</button>
    </div>
</div>
<div className="div12">
<div className="div121">



<p className="p2">
  <span className="span1">21:40</span>
  <span className="span2">{props.Raft}</span>
  
</p>
<div class="horizontal-line"></div>
<p className="p1">
  <span className="span1">23:00</span>
  <span className="span2">{props.Bargasht}</span>
</p>






</div>
<div className="div122">
    <a href="#">قوانین استرداد</a>
</div>
</div>
<div className="div11">
    <div className="div111">
        
<img className="img" src={props.imgsrc} alt="img" />
<p className="title">{props.onvan}</p>
</div>

<div className="div112"></div>
<a href="#">اطلاعات پرواز</a>
    </div>
</div>




)
}
export default Box;