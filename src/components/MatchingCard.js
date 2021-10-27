import {useState} from "react"
//import { useSprings, animated, to as interpolate } from '@react-spring/web'
//import { useDrag } from 'react-use-gesture'
//import { animated, interpolate } from "react-spring/hooks";

function MatchingCard({petName, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge}) {
    
//set state for owner details
    const [isVisible, setIsvisible] = useState(false)

//working on spring

    return (
        <div className="profile-card">
        <div onClick={() => setIsvisible(!isVisible)}>
            <img src={imageUrl} alt="pic of pet" className="profile-pic"/>
            <p>{petName}, {petAge}</p>
            <p>{breed}</p>
            {isVisible ? 
                <div className="owner-details">
                    <p>My owners name is, {ownerName}. They are {ownerAge} and love {ownerHobby}.</p>
                </div> : 
                        null}
        </div>
            <button onClick={() => console.log("delete button was clicked")}>❌</button>
            <button onClick={() => console.log("match button was clicked")}>💗</button>
        </div>
    )
}
    
    export default MatchingCard;
    

