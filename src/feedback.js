import React from "react";
import './feedback.css';
const Feedback=()=>{
    return(
        <>
        <div className="feedback-all">
        <div id="feedback">
        <img src={require('./bytheway.png')} alt="error" width="300pxpx" height="100px"></img>
            <h1>Feedback</h1>
            <form action="https://postman-echo.com/post" method="post">
                <div className="elements">
            <div className="lable">Name</div>
            <input type="text" className="box" placeholder="Name" name="name" id="name" required="required"></input>
            </div>
            <div className="elements">
            <div className="lable">Email</div>
            <input type="text" className="box" placeholder="Email" name="Email" id="Email" required="required"></input>
            </div>
            <div className="elements">
            <div className="lable">Subject</div>
            <input type="text" className="box" placeholder="Subject" name="subject" id="subject" required="required"></input>
            </div>
            <div className="elements">
                <div className="lable">feedback</div>
            <input type="text" name="city" id="city" class="box" placeholder="Enter Your City" list="list"></input>
            <datalist id="list">
                            <option value="Good"></option>
                            <option value="Very Good"></option>
                            <option value="Bad"></option>
                            <option value="Average"></option>
                            </datalist>
            
            </div>
            <div className="elements">
            <div className="lable">Message</div>
            <input type="text" className="box-1" placeholder="Message" name="message" id="meesage" required="required"></input>
            </div>
            <div className="submit-button">
                <button>Submit</button>
            </div>
            
            </form>
        </div>
        </div>

        </>
    );
}
export default Feedback;