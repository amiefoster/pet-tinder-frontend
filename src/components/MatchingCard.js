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

  function swiped(
    direction, petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge
  ) {
    if (direction === "left") {
      handleDeleteClick(id);
    } else if (direction === "right") {
      handleLikeClick(
        petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge
      )
    }
  }

  //once card has left screen this function removes it from the list of potential matches because the user has already swiped
  function removeLikedCard(dir, id){
    if (dir === "right"){
      handleDeleteClick(id)
    }
  }

  return (
    <div className="matching-card-background">
      {match ? (
        <img src={matchImg} className="match-pic" alt="match banner" />
      ) : null}
      <TinderCard
        className="swipe justify-content-center"

        preventSwipe={["up", "down"]}
        onSwipe={(dir) =>
          swiped(
            dir, petName, id, species, breed, petAge, ownerHobby, ownerName, imageUrl, profileLike, ownerAge)}
        onCardLeftScreen={(dir) => removeLikedCard(dir, id)}
      >
        <div
          className="profile-card"
          onClick={() => setIsvisible(!isVisible)}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div >
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
