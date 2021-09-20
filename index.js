
const strings = ['a','b','c','d'];
console.log(strings);

strings.push('e');//O(1)
strings.pop();//O(1)

//unshift
//Add data at the beginning
//specially in javascript

strings.unshift('e');//O(n)
//This process takes longer than push and pop
//The string is indexed in an array. and when we have to add the data in the front , we have to shift all the other elements to n+1 index .This is the reason we are getting the O(n).
//splice()
//add data in the middle 
strings.splice(2,3,'alien');//O(n)
//reason is the same 


console.log(strings);
//Review :Inserting in the middle and the front is not a good idea in arrays.because of the O(n) complexity.
