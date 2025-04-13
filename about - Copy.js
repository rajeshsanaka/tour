import React from "react";
import'./about.css'
const About =()=>{
    return(
<><diV className="all">
<div className="about">
        <h1>ABOUT US</h1>
        <img src={require('./nature5.jpg')} width="450px" height="400px"></img>
        <div className="descri">

            <h3>WE ARE</h3>
            <h2>BY THE WAY</h2>
            <p>A website that has travel and food and stay booking is a one-stop shop for all your travel needs. You can book flights, hotels, rental cars, activities, and even restaurant reservations all in one place. This can save you time and money, and
                it can also make planning your trip easier.</p>
        </div>
    </div>
    <div className="dscp">
        <div className="matter">
            <h2>Why BY THE WAY?</h2>
            <p>A search engine that allows you to search for flights, hotels, and other travel-related products. A comparison tool that allows you to compare prices from different providers. A reviews section where you can read customer reviews of different
                travel products. A booking engine that allows you to book your travel products online. A customer support team that can help you with any problems you might have. Some of the benefits of using a website with travel and food and stay booking</p>
        </div>
        <div className="matter">
            <h2>Trains and buses with BY THE WAY</h2>
            <p>You can book all your travel needs in one place. Save time: You don't have to go to different websites to book your travel products. Save money: You can compare prices from different providers and find the best deals. Peace of mind: You can
                book your travel products with confidence knowing that you are protected by the website's terms and conditions.</p>
        </div>
        <div className="matter">
            <h2>Must try Food with BY THE WAY</h2>
            <p>we provide location based peoples favourite food items in that specific location with the route map and they can easily access hotel cousin and must try street food and they can place order from their location in simple steps</p>
        </div>
    </div>
 
        <h6 className="copy">@ ALL COPY RIGHTS</h6>


        </diV>
</>
    );
}
export default About;