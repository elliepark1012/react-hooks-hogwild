import React from 'react';
import Hog from "./Hog";

function HogContainer({hogs}) {

return (
    <div className="cards">
      {
        hogs.map((hog) => {
          return(
            <Hog 
              key={hog.id}
              hog={hog}
             />
          )
        })
      }
    </div>
);
}

export default HogContainer;
