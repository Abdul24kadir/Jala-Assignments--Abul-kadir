function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};

// add new property dynamically
Person.prototype.country = "India";

let p1 = new Person("Abdul");
p1.sayHello();             // Hello, Abdul
console.log(p1.country);   // India

//output

// PS C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\02.JavaScript Access and Properties>
// cd 05javascript
// PS C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\02.JavaScript Access and Properties\05javascript> node index.js
// Hello, Abdul
// India
// PS C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\02.JavaScript Access and Properties\05javascript> 
