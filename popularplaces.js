import React from "react";
import './hotels.css';
const PopularPlace=()=>{
    return(
<>
<div className="gallery">
    <diV className="caption"> </diV>
    <div className="images">
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Tajmahal.jpg')} width="400px" height="500px" className="image" title="Taj Mahal"></img>
<figcaption> 
    <h4> Taj Mahal</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Goa Beaches.jpg')} width="400px" height="500px" className="image" title="Goa Beaches"></img>
<figcaption> 
    <h4>Goa Beaches</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Udaipur Palace.jpg')} width="400px" height="500px" className="image" title="Udaipur Palace"></img>
<figcaption> 
    <h4>Udaipur Palace</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Kerala Backwaters.jpg')} width="400px" height="500px" className="image" title="Kerala Backwaters"></img>
<figcaption> 
    <h4>Kerala Backwaters</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button>Book Now</button>
</div>  
    </div>
    </div>
 </div>


</>
    );
}
export default PopularPlace;