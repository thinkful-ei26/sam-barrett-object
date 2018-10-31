'use strict';

// function createMyObject() {
//     return {
//         foo: 'bar',
//         answerToUniverse: 42,
//         'olly olly': 'oxen free',
//         sayHello: function sayHello() {
//             return 'hello';
//         }
//     };
//   }
  
//   function updateObject(obj) {
//     obj.foo = 'foo';
//     obj.bar = 'bar';
//     obj.bizz = 'bizz';
//     obj.bang = 'bang';
//     return obj;
//   }

// function personMaker() {
//     var person = {
//       firstName: 'Paul',
//       lastName: 'Jones',
//       // replace `null` with a function that uses self reference to return
//       // full name
//       fullName: function() {
//           return `${this.firstName} ${this.lastName}`;
//         }
// }
//     return person;
//   }
  
const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
  
function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}
  
/* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
// (function testKeyDeleter() {
//   var obj = keyDeleter({
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
//   });



//   Take up to 10 minutes to write a function called makeStudentReport that takes a single 
//   argument, data. data is an array of objects. Each object in the array represents a student 
//   and their letter grade for a course — for example, {name: 'Johnny Robot', grade: 'C'}.

// makeStudentReport should return an array of strings. For each item in data, return a string 
// that looks like this: '[name]: [grade]'. The name and grade values on the student object 
// should be substituted in.

// function makeStudentsReport(data) {
//   // your code here
//   const result = [];
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     result.push(`${item.name}: ${item.grade}`);
//   }
//   console.log(result);
//   return result;
// }


// Take up to 10 minutes to write a function called enrollInSummerSchool that takes a single 
// argument, students. students is an array of objects, with each object representing a 
// student — for example, {name: 'Tim', status: 'Current student', course: 'Biology'}.

// enrollInSummerSchool should return an array of objects. For each object from the 
// original array, it should return the original name and course, but should update the 
// status to In Summer school

// const studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology',
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science',
//   },
// ];

// function enrolInSummerSchool(students) {
//   const res = [];
//   for (let i = 0; i < students.length; i++) {
//     res.push({
//       name: students[i].name,
//       status: 'enrolled in summer school',
//       course: students[i].course,
//     });
//   }
//   return res;
// }

// console.log(enrolInSummerSchool(studentData))

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return this.water / this.flour * 100;
//   }
// };

// console.log(loaf.hydration());

// const obj = {
//   foo: 'fooa',
//   bar: 'bara',
//   fum: 'fuma',
//   quux: 'quuxa',
//   spam: 'spama',
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// const obj = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };
// const fourthMeal = obj.meals[3];
// console.log(fourthMeal);


// const ob1 = {
//   name: 'bigK',
//   jobTitle: 'mechanic',
// };
// const ob2 =  {
//   name: 'kevin',
//   jobTitle: 'ski patrol',
//   boss: 'bigK'
// };
// const ob3 =  {
//   name: 'greg',
//   jobTitle: 'lifty',
//   boss: 'bigK'
// };

// const myArray = [ob1,ob2,ob3];

// myArray.forEach(function(user) { 
//   if (!user.boss) {
//     console.log(`${user.jobTitle} ${user.name} doesn't report to anybody.`);
//   }
//   else 
//   {console.log(`${user.jobTitle} ${user.name} reports to ${user.boss}`);
//   }
// });




// Expand on the previous example by adding a boss property to everyone except 
// the owner of the company.
// Change the iteration to print out messages in this
//  format: "${title} ${name} reports to ${boss}.". 
//  For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display
//  "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't 
// report to anybody.


// Redo your Cracking the Code problem from String Drills but this time use an object 
// as your cipher. Additionally, create a decodeWords function that utilizes your decode 
// function to accept a single string of words, and then return the fully decoded message 
// as a string.


function decode(word) {
  const cypher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };
  
  if (word[0] in cypher) {
    return word[cypher[word[0]] - 1];
  } else {
    return ' ';
  }

}   

function decodeWords(words) {
  const myArray = words.split(' '); 
  let lettersArray = [];
  for (let i = 0; i < myArray.length; i++) {
    lettersArray.push(decode(myArray[i]));

  }
  return lettersArray.join('');

}

const message = 'craft block argon meter bells brown croon droop';
console.log(decode('mroop'));
console.log(decodeWords(message));
