import React from "react";
import './hotels.css'
const Hotels =()=>{
    return(
        <><div className="hotels-all">
 <div className="gallery">
    <diV className="caption"> Hotels</diV>
    <div className="images">
    <div className="hotel-pic" id="pic1">
<img src={require('./places/Voyage Resort.png')} width="400px" height="500px" className="image" title="Voyage Resort"></img>
<figcaption><h4>Voyage Resort</h4>
<p>Voyage Resort.
Voyage Resort hotels are known for their luxurious accommodations, excellent service, and stunning views.</p> </figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./places/Malldevies.png')} width="400px" height="500px" className="image"></img>
<figcaption>
    <h4>Malldevies</h4> 
    <p>Test your skills and push your limits with rock climbing in the Western Ghats and other scenic locations.</p></figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./places/Crowne Plaza Hotels.png')} width="400px" height="500px" className="image"></img>
<figcaption>
    <h4>Crowne Plaza Hotel</h4>
    <p>Soar through the skies and take in breathtaking views of India's landscapes with paragliding in Himachal Pradesh and other regions.</p> </figcaption>
<div className="book-button">
<button onClick={() => window.location.href = "/booknow"}>Book Now</button>
</div>
    </div>
    <div className="hotel-pic" id="pic1">
<img src={require('./places/Hilton Hotels.png')} width="400px" height="500px" className="image"></img>
<figcaption> 
    <h4>Hilton Hotels</h4>
    <p>Hilton Hotels & Resorts is a global hotel chain with over 6,000 properties in 118 countries.</p>
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
export default Hotels;