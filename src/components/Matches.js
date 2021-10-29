import { useState } from "react"



function Matches({
  petName, species, breed, age, ownerHobby, imageUrl, profileLike, ownerName, ownerAge,
}) {
  
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div onClick={() => setIsVisible(!isVisible)} className="match-card" style={{backgroundImage: `url(${imageUrl})`}}>
      <h1>
        {ownerName}, {ownerAge}
      </h1>
      {isVisible ? <div><h4>Hobby: {ownerHobby}</h4><h4>{species} {petName}, {age}, {breed}</h4></div>: null}
    </div>
  );
}

export default Matches;
