import React from "react";
import './login.css';
const Login=() =>{
    return(
        <><div className="total">
        <h2></h2>
        <div id="login">
            <img src={require('./bytheway.png')} width='300px' height="100px"></img>
        <h2>Create a new account</h2>
     <p>Its is quicly and Easy</p>
     <form action="https://postman-echo.com/post" method="post">
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
        <p className="desi">People who use our service may have uploaded your contact information to Facebook. <span>Learn more.</span></p>
        <p className="desi">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
        </p>
        <div className="elements">
            <button>Sign up</button>
        </div>
        <span > Alredy have account?</span>
     </form>

        </div>
        </div>
     

        </>
       
    );
}

export default Login;