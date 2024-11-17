import React from 'react'
import "..//Hero/HeroSection.css"
import HeroItems from "./HeroItems"
import Lahore from "../../../assets/lahore.jpg"
import Karachi from "../../../assets/karachi.png"
import Islamabad from "../../../assets/islamabad.jpg"

var CardData = [
    {name: "Lahore", img: Lahore, desc: "The City of Gardens"},
    {name: "Karachi", img: Karachi, desc: "The City of Lights"},
    {name: "Islamabad", img: Islamabad, desc: "The Beautiful and Capital of Pakistan"},
];

const HeroSection = () => {
  return (
    <>
    <div className="container-fluid mainHero">
        <h1>We design beautiful Event Discovery Pages, faster and Accessible</h1>
    </div>

    <div className="container-fluid sectiontextButton">
        <p>A premium Event listing service that's accessible to all, <br/>
        without the premium price tag with just a click of a button across all major cities of pakistan</p>
        <button type="button">View pricing</button>
    </div>

    <div className="container-fluid heroCards">
        {
            CardData.map(
                (item, index) => (
                    <HeroItems key={index} city={item.name} src={item.img} desc={item.desc}/>
                )
            )
        }
    </div>
    </>
  )
}

export default HeroSection;
