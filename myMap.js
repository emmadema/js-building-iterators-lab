

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map






function myMap(anyArrayThatsPassedIn, whateverFunctionIsPassedIn) {
	var newArray = [];
	for(let i = 0; i < anyArrayThatsPassedIn.length; i++){
		//We need to use the value in the inital array need to send value into the call baxk to get a new value
		// callback(arr[i]);
		var newValue =  whateverFunctionIsPassedIn(anyArrayThatsPassedIn[i], i, anyArrayThatsPassedIn);
		newArray.push(newValue);	
	}
	
	return newArray;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/


//define a new array for capital letrters
//go through each letter and capitilize it
//





// export this function (you can ignore this for now)
module.exports = myMap;
