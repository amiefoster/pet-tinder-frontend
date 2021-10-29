import { useState } from "react";
import matchImg from "../images/match.png";
import TinderCard from "react-tinder-card";

function MatchingCard({
  petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge, handleDeleteClick, handleLikeClick,
}) {
  
  //state is toggled onClick
  const [isVisible, setIsvisible] = useState(false);
  //set state for its a match banner
  const [match, setMatch] = useState(false);

  //conditional for if match is true
  //right now its saying if its true toggle the match state to show the picture
  function itsAMatch(profileLike) {
    if (profileLike === true) {
      setMatch(!match);
      console.log(match, 'this is from is amatch')
    }
  }


  //handles the swipe - takes in direction - if left then sned the id to handleDeleteClick -
  //if right then send details to handleLikeClick
  //need to make sure that itsAMatch is triggered
////////////////////////////////////////////
  //////////??ADDED LAST NIGHT PASSING IN PROFILE LIKE TO ITS A MATCH  - - - THIS SHOULD ALLOW THAT FUNCTION TO GRAB THAT VALUE AND COMPARE AND DISPLAY THE MATCHING PIATURE//////////////
///////////////////////////////////////////

  function swiped(
    direction, petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge
  ) {
    if (direction === "left") {
      handleDeleteClick(id);
    } else if (direction === "right") {
      handleLikeClick(
        petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge
      ) && itsAMatch(profileLike);
    }
    console.log(profileLike)
  }

  return (
    <div >
      {match ? (
        <img src={matchImg} className="match-pic" alt="match banner" />
      ) : null}
      <TinderCard
        className="swipe justify-content-center"
        preventSwipe={["up", "down"]}
        onSwipe={(dir) =>
          swiped(
            dir, petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge
          )
        }
      >
        <div
          className="profile-card"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div onClick={() => setIsvisible(!isVisible)}>
            <h3>
              {petName}, {petAge}
            </h3>
            <h5>Breed: {breed}</h5>
            {isVisible ? (
              <div className="owner-details">
                <h5>
                  My owners name is, {ownerName}. They are {ownerAge} and love{" "}
                  {ownerHobby}.
                </h5>
              </div>
            ) : null}
          </div>
        </div>
      </TinderCard>
    </div>
  );
}

export default MatchingCard;
