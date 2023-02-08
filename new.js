function greet() {
  console.log('Good Morning');
}
greet();
let greetMe = function(){
  console.log('Good Morining');
};
greetMe();
let wishMe = function(name,age){
  let message = `hello ${name} you are ${age} yrs old`;
  console.log(message);
};
wishMe('Jagannathreddy',23);
let sum = function(a,b){
  let result = 2*(a+b);
  return result;
};
let output = sum (10,20);
console.log(output);
let printObject = function(obj){
  console.log(obj);
};
let mobile = {
  brand : 'Apple',
  color : 'silver',
  price : 35000
}
console.log(mobile);
let printArray = function(array){
  let result = '';
  for(let index in array){
    result += `INDEX: ${index} => VALUE: ${array[index]}\n`;
  }
  console.log(result);
};
printArray([10,20,30,40,50]);
let colors = ['White','Black','Orange','Blue'];
console.log(colors);
let student = {
  firstName : 'Jagan',
  lastName : 'Reddy',
  fullName : function(){
    return `${this.firstName} ${this.fullName}`;
  }
};
console.log(student.fullName());
let outerFn = function(){
  console.log('Iam an outer function');
  let innerFn = function(){
    console.log('Iam an inner function');
  };
  innerFn();
};
outerFn();
let twistedFn = function(){
  let name = 'John';
  let printStudent = function(){
    let student = {
      name : 'Jagan',
      age : 20,
      course : 'Bsc',
    }
    return student;
  };
  return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj.name);
var greetUs = function(){
  console.log('Good Morning');
}
greetUs();
var greetUs = function(){
  console.log('How Are You');
}
greetUs();
var greetUs = function(){
  console.log('Im Fine');
}
greetUs();
greetMe();
wishMe('M.Jagannath Reddy',23);