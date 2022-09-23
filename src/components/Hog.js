import React, {useState} from "react";


function Hog({hog}) {
 const [showMainPage, setShowMainPage] = useState(true);
 const { name, image, specialty, weight, greased, "Highest Medal achieved": highest_medal_achieved } = hog

  // toggle visibility of this single hog
 function handleClick() {
  setShowMainPage(!showMainPage);
 }

  const main = <div key={hog.id} onClick={handleClick}>
    <img 
    className="image"
    key={name} 
    src={image} 
    alt={name}
    />
    <h4 class="header">{hog.name}</h4>
  </div>

const description = <div onClick={handleClick} class="description">
<p> <strong>specialty</strong></p>
<p>{specialty}</p>
<p><strong>Weight</strong></p>
<p>{weight}</p>
<p><strong>Greased? </strong></p>
<p>{greased ? "Yes": "No"}</p>
<p><strong>Highest Medal achieved</strong></p>
<p>{highest_medal_achieved}</p>
</div>

 return (
    <div className="ui card">
      {showMainPage ? main : description}    
    </div>
 )

}

export default Hog

