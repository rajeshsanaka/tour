import React from "react";
import './login.css';
const BookNow=()=>{
    return(
        <>
        <div className="booknow-all">
            <div id="login">
            <img src={require('./bytheway.png')} width='300px' height="100px"></img>
            <h3>Book your Destination</h3>
            <form  action="https://postman-echo.com/post" method="post">
                <div>
                <section>
        <input type="text" placeholder="Firstname" className="box1" required="required" id="fristname" name="fristname"></input>
                <input type="text" placeholder="Lastname" className="box1" required="required" id="lastname" name="lastname"></input>
        </section>
        <div className="elements">
            <input type="text" placeholder="email or phone number" className="box" required="required" id="email" name="email"></input>
        </div>
        <div className="elements">
            <input type="password" placeholder="Password" className="box" required="required" name="password" id="password"></input>
        </div>
        <div className="lable"></div>
            <input type="text" name="city" id="city" class="box" placeholder="Destination" list="list" required="required"></input>
            <datalist id="list">
                            <option value="Goa"></option>
                            <option value="Vizag"></option>
                            <option value="Dehli"></option>
                            <option value="Keral"></option>
                            </datalist>
            
            </div>
            <p className="desi"> Book your destination, and enjoy  your Jorney<span>Help</span></p>
                    
               
            <div className="elements">
            <button>Submit</button>
        </div>
            </form>
            </div>

        </div>


        </>

    );

}
export default BookNow;