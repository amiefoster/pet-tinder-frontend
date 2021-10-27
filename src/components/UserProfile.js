import {useEffect, useState} from 'react';

function UserProfile() {
    
    const USER_URL = 'http://localhost:9292/mainuser'
    const [user, setUser] = useState([])


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
          }  

        )
    }
    renderUser()

    return (
        <div>
            <div>
                <p> {id}{petName}{species} </p>
            </div>
        </div>
        )
}

export default UserProfile;
