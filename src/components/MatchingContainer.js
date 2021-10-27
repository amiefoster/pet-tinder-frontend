import MatchingCard from './MatchingCard';
import {useEffect, useState} from 'react';


function MatchingContainer() {
    const BASE_URL= 'http://localhost:9292/petprofiles'
    const [petProfiles, setPetProfiles] = useState([])

    // Get petProfiles
    useEffect(() => {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => checkIfPetProfileExists(data))
    }, [])



    function checkIfPetProfileExists(data){
        if (!!data){
            setPetProfiles(data)
        }
    }

    function renderPetProfiles (){
        console.log(petProfiles, "I am from MAP")
        return petProfiles.map(
            petProfile => {
                return(
                    <MatchingCard
                    key={petProfile.id}
                    petName={petProfile.name}
                    species={petProfile.species}
                    breed={petProfile.breed}
                    petAge={petProfile.age}
                    ownerHobby={petProfile.owner_hobby}
                    ownerName={petProfile.owner_name}
                    imageUrl={petProfile.image_url}
                    profileLike={petProfile.profile_like}
                    ownerAge={petProfile.owner_age}
                    />
                )
            }
        )
    }





    return(
        <div>
            {renderPetProfiles()}
        </div>
    )

}

export default MatchingContainer;
