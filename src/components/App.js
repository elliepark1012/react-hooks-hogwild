import React, { useState } from "react";
import Nav from "./Nav";
import Hog from "./Hog";
import hogsList from "../porkers_data";

function App() {

	const [hogs, setHogs] = useState(hogsList);
	// 0. setup hogs state
	// 1. have filter function affect the hogs state
	// 2. Have hogs map only apply through filtered hogs !
	const filterPigs = () => {
		setHogs([
			...hogs.filter((hog => hog.greased))
		])
	}
	console.log(hogs)
	// use the array sort function to sort by name
	
	// and set Hogs to be the sorted state!
	const nameSortFunction = (a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0
	}
	
	const sortByName = () => {
		const names = [...hogs.sort(nameSortFunction)]
		console.log(names)
	     setHogs(names)

	}
		
		// hogs.sort(function (a, b) {
		// 	let textA = hogs.name.toUpperCase();
		// 	let textB = hogs.name.toUpperCase();	
		// return (textA < textB) ? - 1 : (textA > textB) ? 1 : 0; 
        //         return -1;})


	return (
		<div className="App">
			<Nav />
			{/* They didn't say where to put the button */}
			
			<div style={{display: 'flex'}}>
				{
				  hogs.map((hog) => {
					return(
						<Hog key={hog.name} hog={hog} />
					)
				  })
				}

			</div>
			<button onClick={filterPigs}>Show Greased Pigs</button>
			<button onClick={sortByName}>A to Z</button>
			

		</div>
	);
}

export default App;

// Thinking in React 

// Step 1 : Break The UI Into A Component Hierarchy 
// App 
// HogTile
// HogGreased 
// Hoglist---basd on name or weight 

// Step 2 : Build A Static Version in React 

// Step 3 : Identify The Minimal (but complete) Representation of UI State
// - DRY: Don’t Repeat Yourself 

// 	1	Is it passed in from a parent via props? If so, it probably isn’t state.
// 	2	Does it remain unchanged over time? If so, it probably isn’t state.
// 	3	Can you compute it based on any other state or props in your component? If so, it isn’t state.

// Step 4 : Identify Where Your State Should Live

// For each piece of state in your application:
// 	•	Identify every component that renders something based on that state.
// 	•	Find a common owner component (a single component above all the components that need the state in the hierarchy).
// 	•	Either the common owner or another component higher up in the hierarchy should own the state.
// 	•	If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

// Step 5: Add Inverse Data Flow