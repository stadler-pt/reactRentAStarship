import React from "react"
import {Link} from "react-router-dom"
import ackbar from "../img/ackbar.jpg"
import solo from "../img/solo.jpg"

const Home = () => {
    return (
        <div style={{width: "100%"}}>
            <section className="home">
                <h1 className="homeHeader" >Rent A <br />Starship</h1>
                <p>Durchs Angebot stöbern.</p>
                <p>Passendes Raumschiff auswählen.</p>
                <p>Weltraum unsicher machen.</p>
                <Link to="/products" className="orderButton">Zu den Schiffen</Link>
            </section>


            <section className="testemonials">
                <div className="testemonial">
                    <img className="testemonialImg" src={ackbar} alt="Admiral Ackbar" />
                    <div className="testemonialText" >
                        <p style={{margin: 0, fontSize: "1.2em"}} ><em>It's not a trap!</em></p>
                        <p style={{fontSize: "0.7em", margin: 0}}>Gial Ackbar<br/>Oberbefehlshaber, Allianz Flotte</p>
                    </div>   
                </div>
                <div className="testemonial">
                    <img className="testemonialImg" src={solo} alt="Han Solo" />
                    <div className="testemonialText" >
                        <p className="smallFont" ><em>The ship made the Kessel run in less than twelve parsecs.</em></p>
                        <p style={{fontSize: "0.7em", margin: 0}}>Han Solo<br/>General, Rebellenallianz || Schmuggler</p>
                    </div>   
                </div>
            </section>

        </div>
    )
}

export default Home