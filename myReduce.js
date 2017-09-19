// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

//takes all input and builds a signle answer Ex sum
//I need to write something that reduces the vale in an array to one item
// I have an array and a callback aka array that is passed in and whatever function that is passed in
var newArray = [];
	for(let i = 0; i < arr.length; i++){
		//We need to use the value in the inital array need to send value into the call baxk to get a new value
		// callback(arr[i]);
		var newValue =  callback(arr[i], i, arr);
		newArray.push(newValue);	
	}
	
	return newArray;



//  CODE INSIDE HERE   //

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/

/*var number =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = numbers.reduce(function add(previous, current) {
	return current + previous;
});*/

//=>55



// export this function (you can ignore this for now)
module.exports = myReduce;
