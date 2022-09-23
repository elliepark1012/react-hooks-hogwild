import React from "react";

function Filter(hogs) {
console.log(hogs)

  const greasedLists = hogs.hogs.filter((hog) => hog.greased === true);
  
  console.log(greasedLists)

  const finalList = greasedLists.map((greasedList) => <ul key={greasedList.name}>
    <li>{"Name: " + greasedList.name}</li>
    <li>{"Specialty: "+ greasedList.specialty}</li>
  </ul>)

  return <div>
    <h3>Greased List </h3>
    {finalList}
    </div>
  
}

export default Filter;