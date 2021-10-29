import React, { useState, useEffect } from "react";

function UserProfile(){

    const USER_URL = 'http://localhost:9292/mainuser'
    const [user, setUser] = useState([])
    const [isVisible, setIsvisible] = useState(false);
    const [refresh, setRefresh] = useState(false);
    
    //GETting user from database
    useEffect(() => {

      fetch(USER_URL)
      .then(response => response.json())
      .then(data => checkIfUserExists(data)) //taking data and running it through handler function to see if it exists before SETTING to user
    }, [])
    
    function checkIfUserExists(data){
        if (!!data){
            setUser(data) //SETTING to user
        }
    }
    
    //empty variables to hold user INFO outside of MAPPING scope

    let id = " ";
    let petName = "";
    let species = "";
    let breed = "";
    let age = "";
    let owner_hobby= "";
    let image_url= "";
    let owner_name= "";
    let owner_age= "";

    //Iterating through User to later save the variables
    function renderUser () {
        return user.forEach(
          singleUser => {
                id = singleUser.id
                petName = singleUser.name
                species = singleUser.species
                breed = singleUser.breed
                age = singleUser.age
                owner_hobby = singleUser.owner_hobby
                image_url = singleUser.image_url
                owner_name = singleUser.owner_name
                owner_age = singleUser.owner_age
          })
    } renderUser()

    //setting States for all our variables
    const [updatedPetName, setUpdatedPetName] = useState(petName);
    const [updatedSpecies, setUpdatedSpecies] = useState(species);
    const [updatedBreed, setUpdatedBreed] = useState(breed);
    const [updatedAge, setUpdatedAge] = useState(age);
    const [updatedOwner_Hobby, setUpdatedOwner_Hobby] = useState(owner_hobby);
    const [updatedImage_Url, setUpdatedImage_Url] = useState(image_url);
    const [updatedOwner_Name, setUpdatedOwner_Name] = useState(owner_name);
    const [updatedOwner_Age, setUpdatedOwner_Age] = useState(owner_age);

    //function to reload page and will attack it to form button
    const refreshPage = ()=>{
      window.location.reload();
   }
 

    //PATCHING - updating our user info in the backend
    function handleEditForm(e) {
        e.preventDefault();

        fetch('http://localhost:9292/mainuser/1/edit', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: updatedPetName, species: updatedSpecies, breed: updatedBreed, age: updatedAge, owner_hobby: updatedOwner_Hobby, image_url: updatedImage_Url, owner_name: updatedOwner_Name, owner_age: updatedOwner_Age }),
        })
        .then((resp) => resp.json())
        .then((updatedUserProfile) => {
          setUser([updatedUserProfile])
          // setRefresh(!refresh)
        }); //SETting all new info into SetUser

    }

    return (

      <div className="container">
      <div className="profile-card user-profile-card" style={{backgroundImage: `url(${image_url})`}}>
        <div onClick={() => setIsvisible(!isVisible)}>
          <h2>
            {petName}, {age}
          </h2>
          <h4>Breed: {breed}</h4>
          {isVisible ? (
            <div className="owner-details">
              <h5>
                My owners name is, {owner_name}. They are {owner_age} and love{" "}
                {owner_hobby}.
              </h5>
            </div>
          ) : null}
        </div>
      </div>

        <form onSubmit={handleEditForm} className="user-profile-form">
            <label>Pet Name:</label>
            <input
                id="petName"
                type="text"
                name="petName"
                value={updatedPetName}
                onChange={(e) => setUpdatedPetName(e.target.value)}
                style={{display: 'block'}}
            />
            <label>Cat or Dog:</label>
            <input
                id="species"
                type="text"
                name="species"
                value={updatedSpecies}
                onChange={(e) => setUpdatedSpecies(e.target.value)}
                style={{display: 'block'}}
            />

            <label>Breed:</label>
            <input
                id="breed"
                type="text"
                name="breed"
                value={updatedBreed}
                onChange={(e) => setUpdatedBreed(e.target.value)}
                style={{display: 'block'}}
            />
            <label>Pet Age:</label>
            <input
                id="age"
                type="text"
                name="age"
                value={updatedAge}
                onChange={(e) => setUpdatedAge(e.target.value)}
                style={{display: 'block'}}
            />
            <label>Image URL:</label>
            <input
                id="imageUrl"
                type="text"
                name="imageUrl"
                value={updatedImage_Url}
                onChange={(e) => setUpdatedImage_Url(e.target.value)}
                style={{display: 'block'}}
            />
            <label>Your Name:</label>
            <input
                id="ownerName"
                type="text"
                name="ownerName"
                value={updatedOwner_Name}
                onChange={(e) => setUpdatedOwner_Name(e.target.value)}
                style={{display: 'block'}}
            />
            <label>Your Favorite Hobby:</label>
            <input
                id="ownerHobby"
                type="text"
                name="ownerHobby"
                value={updatedOwner_Hobby}
                onChange={(e) => setUpdatedOwner_Hobby(e.target.value)}
                style={{display: 'block'}}
            />
            <label>Your Age:</label>
            <input
            id="ownerAge"
                type="text" 
                name="ownerAge"
                value={updatedOwner_Age}
                onChange={(e) => setUpdatedOwner_Age(e.target.value)}
                style={{display: 'block'}}
            />
            <br/>
            <button onClick={refreshPage} className="btn-sm btn-danger" type="submit">Update Your Profile Information</button>

        </form>
        </div>
    );


}
export default UserProfile;
