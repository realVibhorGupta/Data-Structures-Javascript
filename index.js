
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
//, context(It is different from scope)
// console.log(this);
// console.log(this == window);

// this.alert("hello")
// instantiation - making  multiple copies 

class Player{
  constructor(name,type){
    this.name = name;
    this.type=type; 
  }
  //This is like init or constructors in python and java 
  introduce(){
    console.log(`Hi I am ${this.name} , I am. a ${this.type}`);
  }
}
class Wizard extends Player{
  constructor(name,type){
   super(name,type)
  }

play(){
  console.log(`I am  ${this.type}`);
}
}

const playerOne = new Wizard("Vibhor","healer");
const playerTwo = new Wizard("Vibhor","Dark Magician");
//Here we are copying the prioperties and using for different objects 
playerOne.play();
playerTwo.play();

//Custom Array 

class DemoArray{
    
    constructor(){
      this.length = 0 ;
      this.data = {};
    }

    //access the item on particular position
    get(index){
      return this.data[index]
    }

    //Add item to the last Position
    pushItem(item){
      this.data[this.length]= item
      this.length++ ;
      return this.length;
    }

    //Delete item from the last position 
    popItem(){
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
   
    delete(index){
      const item = this.data[index];
      this.shiftItems(index);

    }

    shiftItems(index){
      for (let i = index ; i< this.length - 1  ; i++  ){
        //Changing Of the index
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length - 1]
      this.length--;
    }
}

const newArray = new DemoArray();
newArray.pushItem('hi');
newArray.pushItem('Namastey');
newArray.pushItem('Bonjour');
// newArray.popItem();
newArray.delete(0);
console.log(newArray);




//Strings should be treated as a array
//Create a function that recieves a string " 
//"HI  My name is XYZ" should be 
//"ZYX si eman yM  IH  "


//Take the string into account
  
//Based on index we will print the value from the right hand side 
//For take save the value of each element in the array and using loop print the value in the reverse order 

let string  = "HI My name is XYZ";
const reverse = (str) => {
  //Check the input if the string is random 
  if(!str || str.length < 2 || typeof str !== 'string'){
      return "error";
  }
    const  reverse = [];
    const totalCharacters = str.length-1;
    for(let i= length ; i < totalCharacters; i--){
       
    }
    return reverse.join('');//join all the items
} 