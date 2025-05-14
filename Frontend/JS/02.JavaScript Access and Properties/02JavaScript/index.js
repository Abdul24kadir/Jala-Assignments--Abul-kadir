function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

var person = { name: "Abdul" };

greet.call(person, "Hello", "!");   // Hello, Abdul!
greet.apply(person, ["Hi", "!!"]);  // Hi, Abdul!!

// call() → takes arguments individually
// apply() → takes arguments as an array

// output:-
// PS C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\02.JavaScript Access and Properties> cd 02JavaScript
// PS C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\02.JavaScript Access and Properties\02JavaScript> node index.js
// Hello, Abdul!
// Hi, Abdul!!
// PS C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\02.JavaScript Access and Properties\02JavaScript> 



