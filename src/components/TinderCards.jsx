import React, { useState } from 'react'
import TinderCard from "react-tinder-card";
import '../css/TinderCards.css';
function TinderCards() {
    const [people]=useState([{
        name:'Kakashi Hatake',
        url:'https://media.shoanime.com/2018/08/Kakashi-Hatake.jpg'
    },{
        name:"Naruto Uzumaki",
        url:"https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/02/Naruto-Cual-es-la-edad-de-Naruto-y-el-resto-del-Equipo-7-2.jpg"
    },{
        name:"Sasuke Uchicha",
        url:"https://www.tierragamer.com/wp-content/uploads/2019/11/Naruto-Shippuden-Sasuke-Ichiha-450x300.jpg"
    }]);
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>{
                    return (
                    <div>
                        <TinderCard
                            className="swipe"
                            key={person.name}
                        >
                            <div
                                style={{background:`url(${person.url})`, backgroundSize:'cover'}}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TinderCards
