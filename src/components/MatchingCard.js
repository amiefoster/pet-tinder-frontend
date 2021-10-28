import {useState} from "react"
import matchImg from "../images/match.png"
import TinderCard from 'react-tinder-card'
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

    function swiped(direction, petName, id, species, breed, petAge, ownerHobby, ownerName,    imageUrl, profileLike, ownerAge) {

        console.log(direction, petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge)
        if (direction === "left"){
            handleDeleteClick(id)}
            else if (direction === "right"){
                handleLikeClick(petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge)
            }
    }

    return ( 
            <TinderCard 
                className= "swipe profile-card"
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge)}>
            <div className="profile-card" style={{backgroundImage: `url(${imageUrl})`}}>

                 <div onClick={() => setIsvisible(!isVisible)} >
                    {match ? <img src={matchImg} className="match-pic" alt="match banner"/> : null}

                    {/* <img src={imageUrl} alt="pic of pet" className="profile-pic"/> */}
                    <h3>{petName}, {petAge}</h3>
                    <h5>Breed: {breed}</h5>
                    {isVisible ? 
                        <div className="owner-details">
                            <h5>My owners name is, {ownerName}. They are {ownerAge} and love {ownerHobby}.</h5></div> : null}
                </div>
                </div>

            </TinderCard>
        
    )
}
    
    export default MatchingCard;
    

