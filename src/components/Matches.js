function Matches({
  petName, species, breed, age, ownerHobby, imageUrl, profileLike, ownerName, ownerAge,
}) {
  
  return (
    <div className="match-card" style={{backgroundImage: `url(${imageUrl})`}}>
      <h1>
        {ownerName}, {ownerAge}
      </h1>
      <h3>Hobby: {ownerHobby}</h3>
      <h3>
        {species}: {petName}, {age}, {breed}
      </h3>
    </div>
  );
}

export default Matches;
