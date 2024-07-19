import React from "react";
import './contact.css';
const Contact=()=>{
    return(
        <>
        <div className="contacts">
        <h1>This is Google map</h1>
        <diV className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.4075642310398!2d80.27394956649714!3d16.1813687707721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7b0253962969%3A0xe9392810e13921a7!2sUnnava!5e0!3m2!1sen!2sin!4v1691175325191!5m2!1sen!2sin" width="1560" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </diV>
        <div className="head">
        <div className="cont">
            <h1>CONTACT US</h1>
            <ul>
                <li>Ph :- 9959815918</li>
                <li>Mobile no :- 9393933099</li>
                <li>Mail Id:- vamsithota46@gmail.com</li>
            </ul>
        </div>
        <div className="cont">
            <h1>ADDRESS</h1>
            <ul>
                <li>Door no:- 1-1-1</li>
                <li>place :- guntur</li>
                <li>State :- AndhraPradesh</li>
                <li>pincode :- 522006</li>
            </ul>
        </div>
        <div className="cont">
            <h1>DETAILS</h1>
            <ul>
                <li>office :- Guntur</li>
                <li>timings;- 9am to 5pm</li>

            </ul>
        </div>
        </div>
    </div>
        
        </>
    );
}
export default Contact;