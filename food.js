import React from "react";
import './hotels.css';

const Food = () => {
    return (
        <>
            <div id="pop-all">
                <div className="gallery">
                    <div className="caption"> Best Foods in India</div>
                    <div className="images">
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/Samosa.png')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Samosa"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Samosa</h4>
                                <p></p>
                            </figcaption>
                            <div className="book-button">
                                <button onClick={() => window.location.href = "/booknow"}>Book Now</button>
                            </div>
                        </div>
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/panipuri.png')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Panipuri"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Panipuri</h4>
                                <p></p>
                            </figcaption>
                            <div className="book-button">
                                <button onClick={() => window.location.href = "/booknow"}>Book Now</button>
                            </div>
                        </div>
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/Vada Pav.png')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Vada Pav"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Vada Pav</h4>
                                <p></p>
                            </figcaption>
                            <div className="book-button">
                                <button onClick={() => window.location.href = "/booknow"}>Book Now</button>
                            </div>
                        </div>
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/yyyyy.png')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Chat"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Chat</h4>
                                <p></p>
                            </figcaption>
                            <div className="book-button">
                                <button onClick={() => window.location.href = "/booknow"}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pop-gallery2">
                    <div className="caption"> Best Non-Veg in India</div>
                    <div className="images">
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/Mutton Biryani.png')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Mutton Biryani"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Mutton Biryani</h4>
                                <p></p>
                            </figcaption>
                            <div className="book-button">
                                <button onClick={() => window.location.href = "/booknow"}>Book Now</button>
                            </div>
                        </div>
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/Hyd briyani.png')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Hyderabadi Chicken Biryani"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Hyderabadi Chicken Biryani</h4>
                                <p></p>
                            </figcaption>
                            <div className="book-button">
                                <button onClick={() => window.location.href = "/booknow"}>Book Now</button>
                            </div>
                        </div>
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/IMG-20230805-WA0009.jpg')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Pot Biryani"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Pot Biryani</h4>
                                <p></p>
                            </figcaption>
                            <div className="book-button">
                                <button onClick={() => window.location.href = "/booknow"}>Book Now</button>
                            </div>
                        </div>
                        <div className="hotel-pic" id="pic1">
                            <img
                                src={require('./images/hotels/Tandoori Chicken.png')}
                                width="400px"
                                height="500px"
                                className="image"
                                title="Tandoori Chicken"
                                alt="non"
                            />
                            <figcaption>
                                <h4>Tandoori Chicken</h4>
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

export default Food;
