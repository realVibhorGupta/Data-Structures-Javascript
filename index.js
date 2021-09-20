
const strings = ['a','b','c','d'];
// for 64 bits infa. = 4 * 8 = 32 bytes
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

//Dynamic arryays
//C++ memory management has to be taken care of
//python has lists
//java has arraylists
// Append : Complexity  has o(n)
//
//Objects : 
//reference type 
var objectOne =  { value : 10 };
var  objectTwo = objectOne;
var objectThree =   { value : 10 };


objectOne === objectTwo;//true because we have assigned before
 objectOne === objectThree;//false because the objects were created at the different place in the memory so address would be different.Values may be same but objects are different .And objects are references types in javascript.

objectOne.value = 15;//Now we have changed the value of objectOne
objectTwo.value//15 as we have assigned 
objectThree.value // 10 objects are referenceds types in javascript.



//, context , instantiation
