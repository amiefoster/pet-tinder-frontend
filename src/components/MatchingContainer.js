import MatchingCard from "./MatchingCard";
import { useEffect, useState } from "react";

function MatchingContainer() {
  const BASE_URL = "http://localhost:9292/petprofiles";
  const [petProfiles, setPetProfiles] = useState([]);
  const [deleteProfile, setDeleteProfile] = useState(true)

  // Get petProfiles
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => checkIfPetProfileExists(data));
  }, [deleteProfile]);

// Uses conditional to make sure the info exists before it maps onto the browser
  function checkIfPetProfileExists(data) {
    if (!!data) {
      setPetProfiles(data);
    }
  }

  //delete function - takes in id on click and uses that id to delete and passes to handleDelete
  function handleDeleteClick(id){
    fetch(`http://localhost:9292/petprofiles/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(data => {
      handleDelete(data);
    })
  }
//deletes from the browser and resets the state to filter out card with deleteId
  function handleDelete(deleteID){
    const updatedProfiles = petProfiles.filter(pet => pet.id !== deleteID);
    setPetProfiles(updatedProfiles)
    setDeleteProfile(!deleteProfile)
  }

  //grabs if of card liked
    //im thinking this should all the whole pet object if it is liked by the user
    //then in the matches component we can filter this list by if the profile_like is true
      //so we need to send all the information back up and make a new object witht that info????
        //because mutual likes belongs to both USER and PROFILE shouldnt it have access to the whole object by the id??


  function handleLikeClick(petName, id, species, breed, petAge, ownerHobby, 
    ownerName, imageUrl, profileLike, ownerAge){

      console.log(petName, id, species, breed, petAge, ownerHobby, 
        ownerName, imageUrl, profileLike, ownerAge)
        
    fetch("http://localhost:9292/mutuallikes", {
      method: "POST", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        main_user_profile_id: 1,
        pet_profile_id: id,
        name: petName,
        species: species, 
        breed: breed,
        age: petAge,
        owner_hobby: ownerHobby,
        image_url: imageUrl,
        profile_like:  profileLike,
        owner_name: ownerName,
        owner_age: ownerAge
      })
    })
    .then (resp => resp.json())
    .then (data => console.log(data) )
  }



  function renderPetProfiles() {
    return petProfiles.map((petProfile) => {
      return (
        <MatchingCard
          key={petProfile.id}
          id={petProfile.id}
          petName={petProfile.name}
          species={petProfile.species}
          breed={petProfile.breed}
          petAge={petProfile.age}
          ownerHobby={petProfile.owner_hobby}
          ownerName={petProfile.owner_name}
          imageUrl={petProfile.image_url}
          profileLike={petProfile.profile_like}
          ownerAge={petProfile.owner_age}
          handleDeleteClick={handleDeleteClick}
          handleLikeClick={handleLikeClick}
        />
      );
    });
  }

  return (
    <div className="card-container">
      {renderPetProfiles()}
    </div>

  )
  }

export default MatchingContainer;
