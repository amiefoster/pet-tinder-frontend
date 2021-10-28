
import React from "react";
import { useState, useEffect } from "react"

function UserProfile() {  
    const USER_URL = 'http://localhost:9292/mainuser'
    const [user, setUser] = useState([])
    const [isVisible, setIsvisible] = useState(false)

    useEffect(() => {
        fetch(USER_URL)
        .then(response => response.json())
        .then(data => checkIfUserExists(data))
    }, [])

    function checkIfUserExists(data){
        if (!!data){
            setUser(data)
        }
    }

    let id = " ";
    let petName = null;
    let species = null;
    let breed = null;
    let age = null;
    let owner_hobby= null;
    let image_url= null;
    let owner_name= null;
    let owner_age= null;

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
                  console.log (id, "this is inside renderedUser ID 1")
          })
    } renderUser()
  
    // const [formData, setFormData] = useState({
    //     name: "",
    //     breed: "",
    //     age: "",
    //     imgUrl: "",
    //     ownerName: "",
    //     ownerHobby: "",
    //     ownerAge: ""

    // })

    // function handleChange(event) {
    //     setFormData({
    //       ...formData,
    //       [event.target.name]: event.target.value,
    //     });
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     fetch("http://localhost:9292/mainuser/1/edit", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body:JSON.stringify({
    //             name:  formData.name,
    //             breed: formData.breed,
    //             age: formData.age,
    //             imgUrl: formData.imgUrl,
    //             ownerName: formData.ownerName,
    //             ownerHobby: formData.ownerHobby,
    //             ownerAge: formData.ownerAge
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(updatedUserProfile => ??????())
    // }

    return (
        <div>
           <div className="profile-card">
            <div onClick={() => setIsvisible(!isVisible)}>
            <img src={image_url} alt="pic of pet" className="profile-pic"/>
            <h2>{petName}, {age}</h2>
            <h4>Breed: {breed}</h4>
            {isVisible ? 
                <div className="owner-details">
                    <h3>My owners name is, {owner_name}. They are {owner_age} and love {owner_hobby}.</h3>
                </div> : 
                        null}
        </div>
            <button>❌</button>
            <button>💗</button>
        </div>


            <div>
                <p> {id}{petName}{species} </p>
            </div>
            <div className = "form-box" >
            <h2>Test Form</h2>
            <form >
                <input
                    type="text"
                    name="name"
                    placeholder="Update your pets name!"
                    // onChange={handleChange}
                />

                <select>
                    <option>Do you have a cat or dog?</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    
                </select>

                <input
                    type="text"
                    name="breed"
                    placeholder="What breed is your pet?"
                    // onChange={handleChange}
                />

                 <input
                    type="text"
                    name="age"
                    placeholder="How old is your pet?"
                    // onChange={handleChange}
                />

                <input
                    type="text"
                    name="imageUrl"
                    placeholder="http://www.yourImageURLhere.com"
                    // onChange={handleChange}
                />

                <input
                    type="text"
                    name="ownerName"
                    placeholder="What is your name?"
                    // onChange={handleChange}
                />

                <input
                    type="text"
                    name="ownerHobby"
                    placeholder="What is your favorite hobby?"
                    // onChange={handleChange}
                />

                <input
                    type="text"
                    name="ownerAge"
                    placeholder="What is your age?"
                    // onChange={handleChange}
                />
                <button type="submit">Update Your Profile Information</button>

            </form>
            </div>
        </div>
        );    
}
export default UserProfile;
