import React from "react";
import './hotels.css';
const Services=()=>{
    return(
        <>
        <div id="pop-all">
  <div className="gallery">
    <diV className="caption"> Romantic places in India</diV>
    <div className="images">
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Tajmahal.jpg')} width="400px" height="500px" className="image" title="Taj Mahal"></img>
<figcaption> 
    <h4> Taj Mahal</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Goa Beaches.jpg')} width="400px" height="500px" className="image" title="Goa Beaches"></img>
<figcaption> 
    <h4>Goa Beaches</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Udaipur Palace.jpg')} width="400px" height="500px" className="image" title="Udaipur Palace"></img>
<figcaption> 
    <h4>Udaipur Palace</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Kerala Backwaters.jpg')} width="400px" height="500px" className="image" title="Kerala Backwaters"></img>
<figcaption> 
    <h4>Kerala Backwaters</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    </div>
 </div>
 <div className="pop-gallery2">
    <div className="caption"> Best Temples in India</div>
    <div className="images">
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Kashi Vishwanath Temple.png')} width="400px" height="500px" className="image" title="Kashi Vishwanath Temple"></img>
<figcaption> 
    <h4> Kashi Vishwanath Temple</h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Tirumala Venkateswara Temple.png')} width="400px" height="500px" className="image" title="Tirumala Venkateswara Temple"></img>
<figcaption> 
    <h4>Tirumala Venkateswara Temple </h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/KonSunark  Temple.png')} width="400px" height="500px" className="image" title="KonSunark Temple"></img>
<figcaption> 
    <h4>KonSunark Temple </h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./images/hotels/Lotus Temple.png')} width="400px" height="500px" className="image" title="Lotus Temple"></img>
<figcaption> 
    <h4>Lotus Temple </h4>
    <p></p>
</figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>  
    </div>
    
    
    


    </div>

 </div>
 </div>
        </>
    );
}
export default Services;