import React from "react";
import { useState } from "react"


function UserProfile() {  
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
