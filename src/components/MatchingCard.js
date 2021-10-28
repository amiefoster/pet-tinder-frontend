import {useState} from "react"
import matchImg from "../images/match.png"
//import { useSprings, animated, to as interpolate } from '@react-spring/web'
//import { useDrag } from 'react-use-gesture'
//import { animated, interpolate } from "react-spring/hooks";

function MatchingCard({petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge, handleDeleteClick, handleLikeClick}) {

    
    
//set state for owner details
    //state is toggled onClick on line 16
    const [isVisible, setIsvisible] = useState(false)

//set state for its a match banner
    const [match, setMatch] = useState(false)

//conditional for its a match
    //right now its saying if its true toggle the match state to show the picture 
    //need to add else condition to say if its not true then delete this card (use handleDeleteClick that we sent down in props)
    function itsAMatch(profileLike) {
        if (profileLike === true){
            setMatch(!match)
        }
    }

    return (
        <div className="profile-card">
        <div onClick={() => setIsvisible(!isVisible)}>
            {match ? <img src={matchImg} className="match-pic" alt="match banner"/> : null}

            <img src={imageUrl} alt="pic of pet" className="profile-pic"/>
            <h2>{petName}, {petAge}</h2>
            <h4>Breed: {breed}</h4>
            {isVisible ? 
                <div className="owner-details">
                    <h3>My owners name is, {ownerName}. They are {ownerAge} and love {ownerHobby}.</h3>
                </div> : 
                        null}
        </div>
            <button onClick={() => handleDeleteClick(id)}>❌</button>
            <span onClick={() => itsAMatch(profileLike)}>
            <button onClick={() => handleLikeClick(petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge)}>💗</button>
            </span>
        </div>
    )
}
    
    export default MatchingCard;
    

