import Matches from "./Matches";
import {useEffect, useState} from 'react'

function MatchesContainer() {
    const BASE_URL = "http://localhost:9292/mutuallikes"
    const [matchedProfiles, setMatchedProfiles] = useState([])

    useEffect(() => {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => checkIfMatchExists(data))
    }, [])

   function checkIfMatchExists(data) {
        if(!!data){
            setMatchedProfiles(data);
        }
    }

    function renderMatches() {
        return matchedProfiles.map(profile => 
            {if (profile.profile_like === true)
                {return (<Matches
                    key={profile.id}
                    petName={profile.name}
                    species={profile.species}
                    breed={profile.breed}
                    age={profile.age}
                    ownerHobby={profile.owner_hobby}
                    imageUrl={profile.image_url}
                    profileLike={profile.profile_like}
                    ownerName={profile.owner_name}
                    ownerAge={profile.owner_age}
                />)}
            })
    }

    return (
        <div className="matches-container">
            {renderMatches()}
        </div>
            )
}

export default MatchesContainer;
