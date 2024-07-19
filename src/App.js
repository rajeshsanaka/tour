import "./App.css";
import Header from "./header";
import Login from "./login";
import Feedback from "./feedback";
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Hotels from "./hotels";
import Services from "./services";
import PopularPlace from "./popularplaces";
import Food from "./food"; 
import BookNow from "./booknow";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
    return(
        <Router>
        <div className="App">
       <Header/>
        <Routes>
            <Route path="/booknow" element={<BookNow/>}></Route>
            <Route path="/food" element={<Food/>}></Route>
            <Route path="/popularplaces" element={<PopularPlace/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/Hotels" element={<Hotels/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/feedback" element={<Feedback/>}></Route>
       <Route path="/login"  element={<Login/>}></Route>
        </Routes>
        <div className="">


        </div>
       </div>
       </Router>
    );
}
export default App;